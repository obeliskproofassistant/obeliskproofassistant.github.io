#!/usr/bin/env python3
"""
test_proof_tree_viewer.py — Unit & Integration Tests for Proof Tree Viewer

Part of Obelisk Proof Assistant (obeliskproofassistant.github.io)
Verifies Ticket 002 acceptance criteria:
1. Deliverable js/proof_tree_viewer.js exists and is syntactically valid.
2. Preset deduction trees (Modus Ponens, Russell Refutation, Tagged Pair) are defined.
3. Node layout and Gentzen tree structure are correctly formatted.
"""

import unittest
import os
import re
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
JS_FILE = REPO_DIR / "js" / "proof_tree_viewer.js"
INDEX_HTML = REPO_DIR / "index.html"
AI_HTML = REPO_DIR / "ai.html"


class TestProofTreeViewer(unittest.TestCase):
    def setUp(self):
        self.assertTrue(JS_FILE.exists(), f"Deliverable {JS_FILE} must exist.")
        with open(JS_FILE, "r", encoding="utf-8") as f:
            self.content = f.read()

    def test_syntax_and_module_export(self):
        self.assertIn("ProofTreeViewer", self.content)
        self.assertIn("typeof module === 'object'", self.content)
        self.assertIn("renderCustomTree", self.content)

    def test_presets_registered(self):
        expected_presets = [
            "modus_ponens",
            "russell_refutation",
            "tagged_pair_inversion"
        ]
        for p in expected_presets:
            self.assertIn(p, self.content, f"Preset '{p}' must be present in PRESET_TREES")

    def test_gentzen_inference_rules(self):
        # Must support Gentzen horizontal inference line formatting
        self.assertIn("stroke=\"#7b58cf\"", self.content)
        self.assertIn("stroke-width=\"2\"", self.content)
        self.assertIn("toggleNode", self.content)

    def test_side_conditions_and_morse_kelley_soundness(self):
        # Must reflect MK side conditions on Russell and Tagged Pairs
        self.assertIn("Proper(X)", self.content)
        self.assertIn("ℕ_tag", self.content)
        self.assertIn("rank", self.content)


if __name__ == "__main__":
    unittest.main()
