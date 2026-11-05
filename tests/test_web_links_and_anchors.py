#!/usr/bin/env python3
"""
test_web_links_and_anchors.py — Automated Anchor, Dead Link, and Walkthrough Verification
(Tickets 7543 & 698).
"""

import importlib.util
import unittest
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
VERIFY_TOOL = Path("/botworkspace/tools/verify_web_links.py")


def _load_verifier():
    spec = importlib.util.spec_from_file_location("verify_web_links", str(VERIFY_TOOL))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class TestWebLinksAndAnchors(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.verifier = _load_verifier()
        cls.report = cls.verifier.run_verification(REPO_DIR)

    def test_scroll_to_text_targets_exist_in_output_html(self):
        self.assertEqual(
            self.report["scroll_to_text_errors"],
            [],
            f"scrollToText errors: {self.report['scroll_to_text_errors']}",
        )

    def test_all_local_links_pdfs_and_anchors_resolve(self):
        self.assertTrue(
            self.report["ok"],
            f"Broken links or anchors detected: {self.report['errors']}",
        )
        self.assertGreater(self.report["checked_local_references"], 20)
        self.assertGreater(self.report["checked_anchors"], 40)

    def test_index_and_ai_portal_contain_formula_vs_theorem_walkthrough(self):
        index_html = (REPO_DIR / "index.html").read_text(encoding="utf-8")
        ai_html = (REPO_DIR / "obelisk_ai.html").read_text(encoding="utf-8")
        for page_name, html_text in [("index.html", index_html), ("obelisk_ai.html", ai_html)]:
            self.assertIn("NBGCompiler.typeCheck", html_text, f"{page_name} missing NBGCompiler.typeCheck")
            self.assertIn("False_RussellIsSet", html_text, f"{page_name} missing False_RussellIsSet example")
            self.assertIn("repl.html", html_text, f"{page_name} missing link to repl.html")

    def test_output_html_section_and_item_anchors_exist(self):
        output_html = (REPO_DIR / "generated" / "output.html").read_text(encoding="utf-8")
        for sec_num in range(1, 6):
            self.assertIn(f'id="sec-{sec_num}"', output_html)
        self.assertIn('id="item-1.01"', output_html)
        embedding_html = (REPO_DIR / "embedding.html").read_text(encoding="utf-8")
        self.assertIn("scrollTargetIntoContainer", embedding_html)

    def test_mobile_responsive_rules_keep_portals_accessible(self):
        index_html = (REPO_DIR / "index.html").read_text(encoding="utf-8")
        self.assertIn("@media (max-width: 768px)", index_html)
        repl_html = (REPO_DIR / "repl.html").read_text(encoding="utf-8")
        self.assertNotIn(".sidebar-left, .sidebar-right { display: none; }", repl_html)
        ai_html = (REPO_DIR / "obelisk_ai.html").read_text(encoding="utf-8")
        self.assertNotIn("nav.main-nav {\n        display: none;", ai_html)

    def test_class_comprehension_and_symbol_pages_and_ml_labels(self):
        comp_page = (REPO_DIR / "generated" / "symbols" / "class-comprehension.html").read_text(encoding="utf-8")
        self.assertIn("CpKappa", comp_page)
        self.assertIn("Binder", comp_page)
        self.assertIn("#label-class-comprehension", comp_page)
        self.assertIn('id="symbol-defining-axioms"', comp_page)
        manual_html = (REPO_DIR / "generated" / "manual.html").read_text(encoding="utf-8")
        self.assertIn('id="label-class-comprehension"', manual_html)
        self.assertIn('id="label-a13"', manual_html)
        for token in ("{", "|", "}"):
            self.assertIn(
                f'href="symbols/class-comprehension.html" class="sym-link" title="Class comprehension',
                manual_html,
            )
            self.assertIn(f">{token}</a>", manual_html)


if __name__ == "__main__":
    unittest.main()
