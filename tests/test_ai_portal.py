#!/usr/bin/env python3
"""
test_ai_portal.py — Regression checks for the modern AI portal.

The AI portal (`ai.html`) and its aliases (`ai_version.html`, `obelisk_ai.html`)
must stay in sync and must surface the latest prover/manual advances:
  - the 16-theorem NBG standard library appendix link;
  - Dunaev pair injectivity (kernel and surface theorem);
  - the trusted-checker / PCHeat rejection guarantee;
  - the epistemic catalog counts (41 derived / 16 definitions / 7 axioms).
"""

import hashlib
import os
import unittest

REPO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
AI_PAGES = ["ai.html", "ai_version.html", "obelisk_ai.html"]


class TestAIPortal(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contents = {}
        for name in AI_PAGES:
            with open(os.path.join(REPO_DIR, name), "r", encoding="utf-8") as f:
                cls.contents[name] = f.read()

    def test_ai_aliases_are_identical(self):
        hashes = {
            name: hashlib.sha256(content.encode("utf-8")).hexdigest()
            for name, content in self.contents.items()
        }
        self.assertEqual(len(set(hashes.values())), 1, f"AI portal aliases diverged: {hashes}")

    def test_ai_portal_links_nbg_library(self):
        content = self.contents["ai.html"]
        self.assertIn("manual.html#nbg-library", content)
        self.assertIn("NBG Standard Library", content)
        self.assertIn("17 kernel-checked theorems", content)

    def test_ai_portal_reports_dunaev_injectivity(self):
        content = self.contents["ai.html"]
        self.assertIn("proofDunaevPairInjectivity", content)
        self.assertIn("dunaev_pair_injective", content)
        self.assertIn("[A, B]_D", content)

    def test_ai_portal_reports_trusted_checker(self):
        content = self.contents["ai.html"]
        self.assertIn("PCheat_prf", content)
        self.assertIn("ThmWithPrf.cheat", content)

    def test_ai_portal_reports_epistemic_counts(self):
        content = self.contents["ai.html"]
        self.assertIn("41 derived proofs", content)
        self.assertIn("16 conservative definitions", content)
        self.assertIn("7 irreducible MK axioms", content)


if __name__ == "__main__":
    unittest.main()
