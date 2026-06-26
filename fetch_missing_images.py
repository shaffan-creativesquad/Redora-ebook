#!/usr/bin/env python3
"""Fetch image URLs from live scribemedia.com for authors with no image."""

import json
import re
import time
import urllib.request
import sys

AUTHORS_JSON = r"c:\Users\SM COM\Downloads\scribe website-color theme change\app\authors\authors.json"

with open(AUTHORS_JSON, encoding="utf-8") as f:
    authors = json.load(f)

no_img = [a for a in authors if not a.get("img")]
print(f"Authors with no image: {len(no_img)}")

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=12) as r:
            return r.read().decode("utf-8", errors="replace")
    except Exception as e:
        return ""

found = 0
for i, a in enumerate(no_img, 1):
    slug = a["href"].split("/")[-1]
    url = f"https://scribemedia.com/authors/{slug}"
    html = fetch(url)

    if not html:
        print(f"[{i}/{len(no_img)}] {slug} - fetch failed")
        continue

    # Look for og:image meta tag (most reliable headshot)
    og_m = re.search(r'<meta property="og:image" content="([^"]+)"', html)
    if og_m:
        img_url = og_m.group(1)
        # Skip generic/logo images
        if "headshot" in img_url.lower() or "author" in img_url.lower():
            a["img"] = img_url.split("?")[0]  # strip query params
            found += 1
            print(f"[{i}/{len(no_img)}] {slug} -> {a['img'][-60:]}")
        else:
            # Try avatar img in card
            img_m = re.search(r'class="author-card__avatar"[^>]*src="([^"?]+)', html)
            if not img_m:
                img_m = re.search(r'class="author-detail__avatar-img"[^>]*src="([^"?]+)', html)
            if img_m:
                a["img"] = img_m.group(1)
                found += 1
                print(f"[{i}/{len(no_img)}] {slug} (fallback) -> {a['img'][-60:]}")
            else:
                print(f"[{i}/{len(no_img)}] {slug} - no headshot found (og: {img_url[-40:]})")
    else:
        print(f"[{i}/{len(no_img)}] {slug} - no og:image")

    time.sleep(0.4)

    # Save progress every 30
    if i % 30 == 0:
        with open(AUTHORS_JSON, "w", encoding="utf-8") as f:
            json.dump(authors, f, indent=2, ensure_ascii=False)
        print(f"  [saved progress: {i}/{len(no_img)}]")

# Final save
with open(AUTHORS_JSON, "w", encoding="utf-8") as f:
    json.dump(authors, f, indent=2, ensure_ascii=False)

print(f"\nDone. Found images for {found}/{len(no_img)} authors.")
print(f"Total with img: {sum(1 for a in authors if a.get('img'))}/{len(authors)}")
