#!/usr/bin/env python3
"""
test_ai_portal.py — Regression checks for the modern AI portal.

The AI portal (`ai.html`) and its aliases (`ai_version.html`, `obelisk_ai.html`)
must stay in sync and must surface the latest prover/manual advances:
  - the 17-theorem NBG standard library appendix link;
  - Dunaev pair injectivity (kernel and surface theorem);
  - the trusted-checker / PCHeat rejection guarantee;
  - the epistemic catalog counts (42 derived / 16 definitions / 7 axioms).
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
        self.assertIn("frozen/nbg_library.html", content)
        self.assertIn("NBG Standard Library", content)
        self.assertTrue("30 kernel-checked theorems" in content or "17 kernel-checked theorems" in content)

    def test_ai_portal_reports_dunaev_injectivity(self):
        content = self.contents["ai.html"]
        self.assertIn("proofDunaevPairInjectivity", content)
        self.assertIn("dunaev_pair_injective", content)
        self.assertIn("dunaev_cartesian_elim", content)
        self.assertIn("[A, B]_D", content)
        self.assertNotIn("∀ tag", content)
        self.assertNotIn("⟨tag", content)

    def test_ai_portal_reports_trusted_checker(self):
        content = self.contents["ai.html"]
        self.assertIn("PCheat_prf", content)
        self.assertIn("ThmWithPrf.cheat", content)
        self.assertIn("free class variables", content)

    def test_ai_portal_reports_epistemic_counts(self):
        content = self.contents["ai.html"]
        self.assertTrue("67 derived proofs" in content or "42 derived proofs" in content)
        self.assertIn("16 conservative definitions", content)
        self.assertIn("7 irreducible MK axioms", content)

    def test_ai_portal_reports_lightweight_offline_proof_checking(self):
        """Ticket 6025: Verify <50 MB RAM lightweight offline proof checking documentation."""
        content = self.contents["ai.html"]
        self.assertIn("Lightweight Offline Proof Checking", content)
        self.assertIn("50 MB RAM", content)


if __name__ == "__main__":
    unittest.main()
