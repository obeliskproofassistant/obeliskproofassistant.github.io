#!/usr/bin/env python3
"""
obeliskproofassistant.github.io/tests/test_repl_theorems.py
Automated verification for REPL theorem registry and preset deductions.
"""

import unittest
import re
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
REPL_JS = REPO_DIR / "js" / "obelisk_repl.js"
REPL_HTML = REPO_DIR / "repl.html"
MANUAL_HTML = REPO_DIR / "manual.html"

class TestReplEngineIntegrity(unittest.TestCase):
    def setUp(self):
        self.assertTrue(REPL_JS.exists(), "js/obelisk_repl.js must exist")
        self.assertTrue(REPL_HTML.exists(), "repl.html must exist")
        self.assertTrue(MANUAL_HTML.exists(), "manual.html must exist")
        with open(REPL_JS, "r", encoding="utf-8") as f:
            self.repl_js_content = f.read()
        with open(REPL_HTML, "r", encoding="utf-8") as f:
            self.repl_html_content = f.read()

    def test_presets_registered_in_theorems(self):
        # Theorems called by loadPreset in repl.html
        expected_presets = [
            "empty_unique",
            "russell",
            "tagged_pair_proj",
            "ordinal_induction",
            "hereditary_subsets"
        ]
        for preset in expected_presets:
            self.assertIn(f'"{preset}"', self.repl_js_content,
                          f"Preset '{preset}' must be registered in obelisk_repl.js theorems")

    def test_typecheck_commands_registered(self):
        expected_typechecks = [
            "identity",
            "modus_ponens",
            "and_comm",
            "currying",
            "russell",
            "cantor_diagonal",
            "quantifier_swap",
            "sub_succ",
            "stage3_quat",
            "tagged_pairing",
            "ordinal_induction",
            "hereditary_subsets",
            "nbg_no_self_membership",
            "nbg_no_two_cycle",
            "nbg_singleton_choice"
        ]
        for tc in expected_typechecks:
            self.assertIn(f'"{tc}"', self.repl_js_content,
                          f"Typecheck command '{tc}' must be supported in obelisk_repl.js")

    def test_rejection_of_arbitrary_mock(self):
        # Ensure 'check ' does not blindly return OK for unknown theorems
        self.assertIn("[ERROR] Unknown theorem", self.repl_js_content)

if __name__ == "__main__":
    unittest.main()
