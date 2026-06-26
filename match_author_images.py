#!/usr/bin/env python3
"""Match local headshot images in public/assets to authors in authors.json."""

import json
import os
import re

ASSETS_DIR = r"c:\Users\SM COM\Downloads\scribe website-color theme change\public\assets"
AUTHORS_JSON = r"c:\Users\SM COM\Downloads\scribe website-color theme change\app\authors\authors.json"

# Image extensions to look for
IMG_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'}

def normalize(s):
    """Lowercase, convert camelCase to hyphen, strip common suffixes, keep only alphanum+hyphen."""
    # Insert hyphen before uppercase letters (camelCase -> hyphen-case)
    s = re.sub(r'(?<=[a-z0-9])([A-Z])', r'-\1', s)
    s = s.lower()
    # Replace underscores and spaces with hyphens
    s = re.sub(r'[_\s]+', '-', s)
    # Remove common non-name suffixes
    for suffix in [
        '-headshot', '-headshots', '-v2', '-v3', '-v4', '-v5',
        '-authorcentral-headsh', '-authorcentral-h', '-website-cover',
        '-websitecover', '-ebook-cover', '-ebookcover', '-thumb',
        '-thumbnail', '-photo', '-portrait', '-pic', '-image',
        '-541-296', '-300x225', '-150x150', '-232x300', '-219x300',
        '-271x300', '-1', '-2', '-3', '-opt', '-final',
    ]:
        if s.endswith(suffix):
            s = s[:-len(suffix)]
    # Remove non-alphanumeric except hyphens
    s = re.sub(r'[^a-z0-9-]', '', s)
    s = re.sub(r'-+', '-', s).strip('-')
    return s

# Collect all images
image_files = {}
for fname in os.listdir(ASSETS_DIR):
    ext = os.path.splitext(fname)[1].lower()
    if ext in IMG_EXTS:
        base = os.path.splitext(fname)[0]
        norm = normalize(base)
        image_files[norm] = fname  # norm -> original filename

print(f"Total images in assets: {len(image_files)}")

with open(AUTHORS_JSON, encoding='utf-8') as f:
    authors = json.load(f)

# Build slug index
slug_index = {}
for a in authors:
    slug = a['href'].split('/')[-1]
    slug_index[slug] = a

matched = 0
updated = []

for a in authors:
    slug = a['href'].split('/')[-1]

    # Try exact slug match first
    if slug in image_files:
        local_path = f"/assets/{image_files[slug]}"
        if a.get('img') != local_path:
            a['img'] = local_path
            matched += 1
            updated.append((slug, image_files[slug]))
        continue

    # Try matching by normalizing name parts
    name_parts = a['name'].lower().split()
    if len(name_parts) >= 2:
        # first-last
        candidate1 = f"{name_parts[0]}-{name_parts[-1]}"
        # firstname-middlename-lastname collapsed
        candidate2 = '-'.join(name_parts)
        # Try both
        for cand in [candidate1, candidate2, slug]:
            if cand in image_files:
                local_path = f"/assets/{image_files[cand]}"
                if a.get('img') != local_path:
                    a['img'] = local_path
                    matched += 1
                    updated.append((slug, image_files[cand]))
                break

print(f"\nMatched {matched} local images to authors:")
for slug, fname in updated:
    print(f"  {slug} -> {fname}")

with open(AUTHORS_JSON, 'w', encoding='utf-8') as f:
    json.dump(authors, f, indent=2, ensure_ascii=False)

print(f"\nauthors.json updated.")
