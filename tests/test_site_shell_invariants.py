#!/usr/bin/env python3
"""
test_site_shell_invariants.py -- Automated Site-Shell Invariant Verification Suite.

Systematically verifies Mode 1 (Cosmetic / Organisational Site-Shell) invariants
across non-generated, non-frozen site-shell files in obeliskproofassistant.github.io:
  1. Zero links or references into frozen/ from site-shell HTML/JS/CSS, and frozen/ excluded in _config.yml.
  2. Zero informal first_order / 1st-Order terminology in site-shell HTML, and strict MKTD1 / MKTD2 taxonomy.
  3. Zero emojis across site-shell HTML/JS/CSS/tests, and zero directional arrows in <a>, <button>, <title>, <h1>..<h4>.
  4. Presence of .nojekyll and zero hardcoded private RFC1918 container IPs.
  5. Zero CSS/JS formula-token swapping hacks (e.g. mode-membership / mode-typing).
"""

from html.parser import HTMLParser
from pathlib import Path
import os
import re
import unittest

REPO_DIR = Path(__file__).resolve().parent.parent

SKIP_DIRS = {
    ".git",
    "generated",
    "frozen",
    "archive",
    "tickets",
    "__pycache__",
    "vendor",
    "images",
}

DIRECTIONAL_ARROW_PATTERN = re.compile(
    r"(?:"
    r"\u2190|\u2191|\u2192|\u2193|\u2196|\u2197|\u2198|\u2199|"
    r"&rarr;|&larr;|&darr;|&uarr;|&nearr;|&searr;|&nwarr;|&swarr;|"
    r"&#859[2345];|&#x219[0123];"
    r")",
    re.IGNORECASE,
)

INFORMAL_FIRST_ORDER_PATTERN = re.compile(
    r"(?:first[_ -]?order|1st[_ -]?order)",
    re.IGNORECASE,
)

PRIVATE_IP_PATTERN = re.compile(
    r"\b(?:"
    r"10\.\d{1,3}\.\d{1,3}\.\d{1,3}|"
    r"172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}|"
    r"192\.168\.\d{1,3}\.\d{1,3}"
    r")\b"
)

FORMULA_SWAP_HACK_PATTERN = re.compile(
    r"\b(?:mode-membership|mode-typing)\b",
    re.IGNORECASE,
)

# Formal mathematical syntax symbols (Fact 13) that reside in U+2600..U+27BF or nearby blocks
ALLOWED_MATH_CODEPOINTS = {
    0x2605,  # BLACK STAR used in formal syntax
}


def is_prohibited_emoji(ch: str) -> bool:
    cp = ord(ch)
    if cp in ALLOWED_MATH_CODEPOINTS:
        return False
    if 0x1F000 <= cp <= 0x1FAFF:
        return True
    if 0x2600 <= cp <= 0x27BF:
        return True
    if cp in (0x203C, 0x2049, 0x2139, 0x231A, 0x231B, 0x23E9, 0x23EA, 0x23EB, 0x23EC, 0x23F0, 0x23F3, 0xFE0F):
        return True
    if 0x2B50 <= cp <= 0x2B55:
        return True
    return False


class SiteShellHTMLTagParser(HTMLParser):
    """Extracts <a>, <button>, <title>, and <h1>..<h4> contents and attributes."""

    TARGET_TAGS = {"a", "button", "title", "h1", "h2", "h3", "h4"}

    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.active_stack = []
        self.elements = []
        self.links = []

    def handle_starttag(self, tag: str, attrs: list) -> None:
        t = tag.lower()
        attr_map = {k.lower(): (v or "") for k, v in attrs}
        line = self.getpos()[0]
        if t in ("a", "link", "script", "iframe", "img", "form"):
            for attr_name in ("href", "src", "action"):
                if attr_name in attr_map:
                    self.links.append((t, attr_name, attr_map[attr_name], line))
        if t in self.TARGET_TAGS:
            self.active_stack.append([t, line, attr_map, []])

    def handle_data(self, data: str) -> None:
        for frame in self.active_stack:
            frame[3].append(data)

    def handle_entityref(self, name: str) -> None:
        tok = f"&{name};"
        for frame in self.active_stack:
            frame[3].append(tok)

    def handle_charref(self, name: str) -> None:
        tok = f"&#{name};"
        for frame in self.active_stack:
            frame[3].append(tok)

    def handle_endtag(self, tag: str) -> None:
        t = tag.lower()
        for idx in range(len(self.active_stack) - 1, -1, -1):
            if self.active_stack[idx][0] == t:
                t_open, line, attr_map, chunks = self.active_stack.pop(idx)
                text = " ".join("".join(chunks).split())
                self.elements.append((t_open, line, attr_map, text))
                break


def iter_site_shell_files(suffixes=None):
    results = []
    for dirpath, dirnames, filenames in os.walk(REPO_DIR):
        dirnames[:] = sorted(d for d in dirnames if d not in SKIP_DIRS)
        for fn in sorted(filenames):
            path = Path(dirpath) / fn
            if suffixes is not None and path.suffix.lower() not in suffixes:
                continue
            results.append(path)
    return results


class TestSiteShellInvariants(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.html_files = iter_site_shell_files({".html"})
        cls.js_files = [
            p for p in iter_site_shell_files({".js"})
            if not str(p.relative_to(REPO_DIR)).startswith("assets/silktide")
        ]
        cls.css_files = [
            p for p in iter_site_shell_files({".css"})
            if not str(p.relative_to(REPO_DIR)).startswith("assets/silktide")
        ]
        cls.test_files = [p for p in (REPO_DIR / "tests").glob("*.py")]

    def test_site_shell_html_inventory_non_empty(self) -> None:
        names = {p.name for p in self.html_files}
        for expected in ("index.html", "about.html", "repl.html", "embedding.html", "ai.html"):
            self.assertIn(expected, names)

    def test_nojekyll_and_config_excludes_frozen(self) -> None:
        nojekyll = REPO_DIR / ".nojekyll"
        self.assertTrue(nojekyll.is_file(), ".nojekyll must exist at repository root")

        config_yml = (REPO_DIR / "_config.yml").read_text(encoding="utf-8")
        self.assertIn("frozen/", config_yml, "_config.yml must exclude frozen/")

    def test_zero_links_or_references_to_frozen_in_site_shell(self) -> None:
        offenders = []
        for path in self.html_files + self.js_files + self.css_files:
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            if path.suffix == ".html":
                parser = SiteShellHTMLTagParser()
                parser.feed(text)
                for tag, attr_name, target, line in parser.links:
                    if "frozen" in target.lower():
                        offenders.append(f"{rel}:{line} <{tag} {attr_name}={target!r}>")
            for lineno, line_txt in enumerate(text.splitlines(), 1):
                if re.search(r"\bfrozen/", line_txt, re.IGNORECASE):
                    offenders.append(f"{rel}:{lineno}: {line_txt.strip()[:120]}")
        self.assertEqual(offenders, [], f"Site-shell files must not link or point into frozen/: {offenders}")

    def test_zero_informal_first_order_terminology_and_strict_mktd_taxonomy(self) -> None:
        offenders = []
        for path in self.html_files:
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            for lineno, line_txt in enumerate(text.splitlines(), 1):
                m = INFORMAL_FIRST_ORDER_PATTERN.search(line_txt)
                if m:
                    offenders.append(f"{rel}:{lineno} ({m.group(0)!r}): {line_txt.strip()[:120]}")
        self.assertEqual(
            offenders,
            [],
            f"Informal first_order / 1st-Order terminology found in site-shell HTML: {offenders}",
        )

        required_terms = (
            "MKTD1-framework",
            "MKTD1-system",
            "MKTD1-prover",
            "MKTD1-theory",
            "MKTD2-framework",
            "MKTD2-system",
            "MKTD2-prover",
            "MKTD2-theory",
        )
        for page_name in ("about.html", "obelisk_ai.html"):
            content = (REPO_DIR / page_name).read_text(encoding="utf-8")
            for term in required_terms:
                self.assertIn(term, content, f"{page_name} missing required taxonomy term {term!r}")
        for redirect_name in ("ai.html", "ai_version.html"):
            redirect_content = (REPO_DIR / redirect_name).read_text(encoding="utf-8")
            self.assertIn("url=obelisk_ai.html", redirect_content, f"{redirect_name} must redirect to obelisk_ai.html")

    def test_zero_emojis_in_site_shell_and_tests(self) -> None:
        offenders = []
        for path in self.html_files + self.js_files + self.css_files + self.test_files:
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            for lineno, line_txt in enumerate(text.splitlines(), 1):
                bad_chars = sorted({ch for ch in line_txt if is_prohibited_emoji(ch)})
                if bad_chars:
                    codes = [hex(ord(c)) for c in bad_chars]
                    offenders.append(f"{rel}:{lineno} {codes}: {line_txt.strip()[:100]}")
        self.assertEqual(offenders, [], f"Prohibited emojis detected in site-shell files: {offenders}")

    def test_zero_directional_arrows_in_links_buttons_titles_and_headings(self) -> None:
        offenders = []
        for path in self.html_files:
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            parser = SiteShellHTMLTagParser()
            parser.feed(text)
            for tag, line, attr_map, inner_text in parser.elements:
                m = DIRECTIONAL_ARROW_PATTERN.search(inner_text)
                if m:
                    offenders.append(f"{rel}:{line} <{tag}> text has arrow {m.group(0)!r}: {inner_text[:100]}")
                title_attr = attr_map.get("title", "")
                m_title = DIRECTIONAL_ARROW_PATTERN.search(title_attr)
                if m_title:
                    offenders.append(
                        f"{rel}:{line} <{tag} title=...> has arrow {m_title.group(0)!r}: {title_attr[:100]}"
                    )
        self.assertEqual(
            offenders,
            [],
            f"Directional arrows detected in site-shell links, buttons, titles, or headings: {offenders}",
        )

    def test_laconic_link_labels(self) -> None:
        offenders = []
        for path in self.html_files:
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            parser = SiteShellHTMLTagParser()
            parser.feed(text)
            for tag, line, _attr_map, inner_text in parser.elements:
                if tag != "a":
                    continue
                if len(inner_text) > 70:
                    offenders.append(f"{rel}:{line} link text too verbose ({len(inner_text)} chars): {inner_text[:90]}")
                if re.search(r"\bvariant\s+[12]\b", inner_text, re.IGNORECASE):
                    offenders.append(f"{rel}:{line} link text uses Variant 1/2 instead of MKTD1/MKTD2: {inner_text}")
        self.assertEqual(offenders, [], f"Non-laconic link labels detected: {offenders}")

    def test_zero_hardcoded_private_container_ips(self) -> None:
        offenders = []
        config_files = [REPO_DIR / "_config.yml", REPO_DIR / "site.webmanifest"]
        for path in self.html_files + self.js_files + self.css_files + config_files:
            if not path.is_file():
                continue
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            for lineno, line_txt in enumerate(text.splitlines(), 1):
                m = PRIVATE_IP_PATTERN.search(line_txt)
                if m:
                    offenders.append(f"{rel}:{lineno} ({m.group(0)}): {line_txt.strip()[:100]}")
        self.assertEqual(offenders, [], f"Hardcoded private container IP found in site-shell: {offenders}")

    def test_zero_formula_swapping_css_or_js_hacks(self) -> None:
        offenders = []
        for path in self.html_files + self.js_files + self.css_files:
            rel = str(path.relative_to(REPO_DIR))
            text = path.read_text(encoding="utf-8")
            for lineno, line_txt in enumerate(text.splitlines(), 1):
                m = FORMULA_SWAP_HACK_PATTERN.search(line_txt)
                if m:
                    offenders.append(f"{rel}:{lineno} ({m.group(0)!r}): {line_txt.strip()[:100]}")
        self.assertEqual(offenders, [], f"Forbidden CSS/JS formula-swapping hack detected: {offenders}")


if __name__ == "__main__":
    unittest.main()
