#!/usr/bin/env python3
"""
test_shortcuts_modal.py — Unit & Accessibility Tests for Web REPL Keyboard Shortcuts Modal
and <obelisk-code-editor> Custom Element (Tickets 007 & 7502).
"""

import unittest
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
MODAL_JS = REPO_DIR / "js" / "shortcuts_modal.js"
REPL_JS = REPO_DIR / "js" / "obelisk_repl.js"
REPL_HTML = REPO_DIR / "repl.html"


class TestShortcutsModalAndEditorComponent(unittest.TestCase):
    def setUp(self):
        self.assertTrue(MODAL_JS.exists(), f"{MODAL_JS} must exist")
        self.assertTrue(REPL_JS.exists(), f"{REPL_JS} must exist")
        self.assertTrue(REPL_HTML.exists(), f"{REPL_HTML} must exist")
        self.modal_js = MODAL_JS.read_text(encoding="utf-8")
        self.repl_js = REPL_JS.read_text(encoding="utf-8")
        self.repl_html = REPL_HTML.read_text(encoding="utf-8")

    def test_modal_accessibility_and_markup(self):
        self.assertIn('role="dialog"', self.modal_js)
        self.assertIn('aria-modal="true"', self.modal_js)
        self.assertIn('aria-labelledby="shortcuts-modal-title"', self.modal_js)
        self.assertIn("--bg-card", self.modal_js)
        self.assertIn("Escape", self.modal_js)
        self.assertIn("trapFocus", self.modal_js)

    def test_shortcuts_documented(self):
        self.assertIn("Ctrl + Enter", self.modal_js)
        self.assertIn("Ctrl + L", self.modal_js)
        self.assertIn("Alt + Up / Down", self.modal_js)
        self.assertIn("?", self.modal_js)

    def test_repl_html_integrates_shortcuts_button_and_custom_editor(self):
        self.assertIn("Shortcuts", self.repl_html)
        self.assertIn("js/shortcuts_modal.js", self.repl_html)
        self.assertIn("<obelisk-code-editor", self.repl_html)
        self.assertIn("ObeliskCodeEditorElement", self.repl_js)
        self.assertIn("customElements.define('obelisk-code-editor'", self.repl_js)


if __name__ == "__main__":
    unittest.main()
