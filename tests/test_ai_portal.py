#!/usr/bin/env python3
"""
test_ai_portal.py — Regression checks for the canonical showcase portal.

Per User Decision:
  - `index.html` remains the classic root landing page;
  - `obelisk_ai.html` is the single canonical showcase page featuring `generated/manual.html`;
  - `ai.html` and `ai_version.html` are lightweight HTML/JS redirects to `obelisk_ai.html`.
"""

import os
import unittest

REPO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CANONICAL_PAGE = "obelisk_ai.html"
REDIRECT_PAGES = ["ai.html", "ai_version.html"]


class TestAIPortal(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contents = {}
        for name in [CANONICAL_PAGE] + REDIRECT_PAGES:
            with open(os.path.join(REPO_DIR, name), "r", encoding="utf-8") as f:
                cls.contents[name] = f.read()

    def test_legacy_aliases_redirect_to_canonical_obelisk_ai(self):
        for alias in REDIRECT_PAGES:
            content = self.contents[alias]
            self.assertIn('http-equiv="refresh"', content)
            self.assertIn("url=obelisk_ai.html", content)
            self.assertIn('href="obelisk_ai.html"', content)
            self.assertLess(len(content), 1500, f"{alias} must be a lightweight redirect")

    def test_canonical_portal_features_manual_and_nbg_library(self):
        content = self.contents[CANONICAL_PAGE]
        self.assertIn("generated/manual.html", content)
        self.assertIn("generated/nbg_library.html", content)
        self.assertIn("NBG Standard Library", content)
        self.assertTrue(
            "100 type-checked records" in content
            or "100 kernel-checked records" in content
            or "100 kernel-checked theorems" in content
            or "30 kernel-checked theorems" in content
            or "17 kernel-checked theorems" in content
        )

    def test_ai_portal_reports_dunaev_injectivity(self):
        content = self.contents[CANONICAL_PAGE]
        self.assertIn("proofDunaevPairInjectivity", content)
        self.assertIn("dunaev_pair_injective", content)
        self.assertIn("dunaev_cartesian_elim", content)
        self.assertIn("[A, B]_D", content)

    def test_ai_portal_reports_trusted_checker(self):
        content = self.contents[CANONICAL_PAGE]
        self.assertIn("PCheat_prf", content)
        self.assertIn("ThmWithPrf.cheat", content)
        self.assertIn("free class variables", content)

    def test_ai_portal_reports_epistemic_counts(self):
        content = self.contents[CANONICAL_PAGE]
        self.assertTrue("77 derived proofs" in content or "67 derived proofs" in content or "42 derived proofs" in content)
        self.assertIn("16 conservative definitions", content)
        self.assertIn("7 irreducible MK axioms", content)

    def test_ai_portal_reports_lightweight_offline_proof_checking(self):
        """Ticket 6025: Verify <50 MB RAM lightweight offline proof checking documentation."""
        content = self.contents[CANONICAL_PAGE]
        self.assertIn("Lightweight Offline Proof Checking", content)
        self.assertIn("50 MB RAM", content)


if __name__ == "__main__":
    unittest.main()
