#!/usr/bin/env python3
"""
test_proof_tree_ui.py — Unit & DOM Structure Tests for Collapsible Proof Tree Widget
and Debounced requestAnimationFrame Proof Tree Rendering (Tickets 006 & 7503).
"""

import unittest
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
COLLAPSE_JS = REPO_DIR / "js" / "proof_tree_collapse.js"
VIEWER_JS = REPO_DIR / "js" / "proof_tree_viewer.js"
PROOFS_HTML = REPO_DIR / "proofs.html"


class TestProofTreeUI(unittest.TestCase):
    def setUp(self):
        self.assertTrue(COLLAPSE_JS.exists(), f"{COLLAPSE_JS} must exist")
        self.assertTrue(VIEWER_JS.exists(), f"{VIEWER_JS} must exist")
        self.assertTrue(PROOFS_HTML.exists(), f"{PROOFS_HTML} must exist")
        self.collapse_js = COLLAPSE_JS.read_text(encoding="utf-8")
        self.viewer_js = VIEWER_JS.read_text(encoding="utf-8")
        self.proofs_html = PROOFS_HTML.read_text(encoding="utf-8")

    def test_collapse_widget_exports_and_svg_chevron(self):
        self.assertIn("ProofTreeCollapse", self.collapse_js)
        self.assertIn("proof-chevron-svg", self.collapse_js)
        self.assertIn("<svg", self.collapse_js)
        self.assertIn("transition: max-height", self.collapse_js)

    def test_data_node_and_state_attributes(self):
        self.assertIn("data-node-state", self.collapse_js)
        self.assertIn("data-node", self.collapse_js)
        self.assertIn("aria-expanded", self.collapse_js)
        self.assertIn("toggleNode", self.collapse_js)
        self.assertIn("expandAll", self.collapse_js)
        self.assertIn("collapseAll", self.collapse_js)

    def test_proofs_html_integrates_master_controls_and_script(self):
        self.assertIn("js/proof_tree_collapse.js", self.proofs_html)
        self.assertIn("Expand All", self.proofs_html)
        self.assertIn("Collapse All", self.proofs_html)
        self.assertIn("ProofTreeCollapse.expandAll", self.proofs_html)
        self.assertIn("ProofTreeCollapse.collapseAll", self.proofs_html)

    def test_proof_tree_viewer_uses_request_animation_frame_and_debounce(self):
        self.assertIn("requestAnimationFrame", self.viewer_js)
        self.assertIn("scheduleRender", self.viewer_js)
        self.assertIn("_debounceTimer", self.viewer_js)


if __name__ == "__main__":
    unittest.main()
