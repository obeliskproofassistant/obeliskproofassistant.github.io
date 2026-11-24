#!/usr/bin/env python3
"""Check every local href/src in the site's HTML pages (GitLab #8084).

Usage (from anywhere):
    python3 /botworkspace/obeliskproofassistant.github.io/tools/check_html_links.py [--max N]

Scans all *.html files except those under frozen/, archive/ and .git/ (frozen/ is kept
byte-for-byte as an archive and is unlinked from navigation).  A link is broken when it is
relative (or site-absolute) and the target file does not exist, or when it uses file://
(meaningless on a public website).  External links (http, https, mailto, data, javascript,
protocol-relative) and pure #fragment links are not checked.

Exit status: 0 if no broken links, 1 otherwise.
"""

from __future__ import annotations

import argparse
import html
import os
import re
import sys
from collections import Counter
from typing import Dict, List, Tuple

SITE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {".git", "frozen", "archive", "node_modules", "__pycache__"}
LINK_RE = re.compile(r'(?:href|src)="([^"]*)"')
EXTERNAL_RE = re.compile(r"^(?:https?:|mailto:|javascript:|data:|tel:|//)", re.I)


def iter_html_files(root: str) -> List[str]:
    out = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = sorted(d for d in dirnames if d not in SKIP_DIRS)
        for fn in sorted(filenames):
            if fn.endswith(".html"):
                out.append(os.path.join(dirpath, fn))
    return out


def broken_links(root: str = SITE_DIR) -> List[Tuple[str, str]]:
    """Return (page relative to root, link) pairs for every broken local link."""
    found: List[Tuple[str, str]] = []
    for page in iter_html_files(root):
        with open(page, encoding="utf-8", errors="replace") as f:
            text = f.read()
        page_dir = os.path.dirname(page)
        rel_page = os.path.relpath(page, root)
        for raw in LINK_RE.findall(text):
            link = html.unescape(raw).strip()
            if not link or link.startswith("#") or EXTERNAL_RE.match(link):
                continue
            if link.lower().startswith("file:"):
                found.append((rel_page, link))
                continue
            path = re.split(r"[#?]", link, 1)[0]
            if not path:
                continue
            target = os.path.join(root, path.lstrip("/")) if path.startswith("/") else os.path.join(page_dir, path)
            if not os.path.exists(os.path.normpath(target)):
                found.append((rel_page, link))
    return found


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--max", type=int, default=40, help="maximum number of pages to list")
    args = ap.parse_args()
    found = broken_links()
    if not found:
        print("[OK] no broken local links")
        return 0
    per_page: Dict[str, List[str]] = {}
    for page, link in found:
        per_page.setdefault(page, []).append(link)
    by_target = Counter(link for _, link in found)
    print(f"[FAIL] {len(found)} broken local links on {len(per_page)} pages")
    for page in sorted(per_page)[: args.max]:
        links = per_page[page]
        print(f"  {page}: {len(links)} (e.g. {links[0]})")
    print("Most frequent broken targets:")
    for link, n in by_target.most_common(10):
        print(f"  {n:5d}  {link}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
