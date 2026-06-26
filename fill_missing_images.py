#!/usr/bin/env python3
"""Extract image URLs from authors-page.html and fill missing imgs in authors.json."""

import json
import re

HTML_FILE = r"c:\Users\SM COM\Downloads\scribe website-color theme change\html\authors-page.html"
AUTHORS_JSON = r"c:\Users\SM COM\Downloads\scribe website-color theme change\app\authors\authors.json"

with open(HTML_FILE, encoding="utf-8") as f:
    html = f.read()

with open(AUTHORS_JSON, encoding="utf-8") as f:
    authors = json.load(f)

# Extract href -> img_src mapping from all author cards in the HTML
# Pattern: avatar-link href="/authors/slug" ... avatar img src="..."
html_imgs = {}

for card in re.finditer(
    r'<article class="author-card".*?</article>',
    html, re.DOTALL
):
    block = card.group(0)

    # Get href
    href_m = re.search(r'class="author-card__(?:name-link|avatar-link)"[^>]*href="([^"]*)"', block)
    if not href_m:
        href_m = re.search(r'href="(/authors/[^"]*)"', block)
    if not href_m:
        continue
    href = href_m.group(1)

    # Get img src — use the clean src (without query params)
    img_m = re.search(r'class="author-card__avatar"[^>]*src="([^"?]*)', block)
    if not img_m:
        img_m = re.search(r'src="([^"?]*)"[^>]*class="author-card__avatar"', block)
    if img_m:
        html_imgs[href] = img_m.group(1)

print(f"Images found in HTML: {len(html_imgs)}")

# Fill missing images in authors.json
filled = 0
already_local = 0
already_remote = 0

for a in authors:
    href = a["href"]
    current_img = a.get("img", "")

    if current_img.startswith("/assets/"):
        already_local += 1
        continue  # already using local image, keep it

    if href in html_imgs:
        new_img = html_imgs[href]
        if not current_img:
            a["img"] = new_img
            filled += 1
        elif current_img != new_img:
            # Already has a remote URL; update to HTML version (usually higher quality)
            a["img"] = new_img
            already_remote += 1

print(f"Already had local (/assets/) image: {already_local}")
print(f"Filled previously empty img: {filled}")
print(f"Updated existing remote URL: {already_remote}")
print(f"Total with img now: {sum(1 for a in authors if a.get('img'))}")

with open(AUTHORS_JSON, "w", encoding="utf-8") as f:
    json.dump(authors, f, indent=2, ensure_ascii=False)

print("authors.json updated.")
