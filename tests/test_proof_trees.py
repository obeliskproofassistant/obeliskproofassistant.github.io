#!/usr/bin/env python3
"""Unit tests for Natural Deduction Proof Trees, Certificates, DAG, and MK/NBG Transpiler (Tickets 190, 191, 193, 194)."""

import json
from pathlib import Path
import sys
import unittest

REPO_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_DIR / "tools"))

from export_certificates import _extract_entries, render_cakeml_certificate, render_dedukti_certificate  # noqa: E402
from mk_nbg_transpiler import classify_comprehension_formula, transpile_catalog_entry  # noqa: E402


class TestProofTreesAndTools(unittest.TestCase):
    def test_proof_tree_viewer_and_html_pages_exist(self):
        viewer_js = REPO_DIR / "js" / "proof_tree_viewer.js"
        dag_js = REPO_DIR / "js" / "obelisk_dag.js"
        self.assertTrue(viewer_js.is_file(), "js/proof_tree_viewer.js must exist")
        self.assertTrue(dag_js.is_file(), "js/obelisk_dag.js must exist")
        dag_text = dag_js.read_text(encoding="utf-8")
        self.assertIn("renderDependencyDAG", dag_text)
        self.assertIn("hasCycle", dag_text)

        proofs_html = (REPO_DIR / "frozen" / "proofs.html").read_text(encoding="utf-8")
        self.assertIn("MathJax", proofs_html)

    def test_dedukti_and_cakeml_certificate_export(self):
        db = json.loads((REPO_DIR / "generated" / "theory_db.json").read_text(encoding="utf-8"))
        entries_by_name = {e.get("name"): e for e in _extract_entries(db)}
        for ename in ("ThmLoeb", "ThmSecondIncompleteness"):
            entry = entries_by_name[ename]
            dk = render_dedukti_certificate(entry)
            sml = render_cakeml_certificate(entry)
            self.assertIn("mk_prf", dk)
            self.assertIn("SHA-256", dk)
            self.assertIn("val verified : bool = true", sml)
            # Ensure CakeML certificate is 100% pure ASCII (User Directive #16)
            sml.encode("ascii")

    def test_mk_nbg_transpiler_distinguishes_predicative_and_impredicative(self):
        # Predicative comprehension uses only set quantification -> NBG_Predicative
        pred = classify_comprehension_formula("¬(isSet({x | (x ∉ x)}))")
        self.assertEqual(pred["classification"], "NBG_Predicative")
        self.assertTrue(pred["is_predicative"])

        # Impredicative MK comprehension with bound class quantifier ∀X
        impred = classify_comprehension_formula("{x | ∀X ((x ∈ X) → φ(X))}")
        self.assertEqual(impred["classification"], "MK_Impredicative_Stage2")
        self.assertFalse(impred["is_predicative"])
        self.assertIn("X", impred["bound_class_quantifiers"])

        db = json.loads((REPO_DIR / "generated" / "theory_db.json").read_text(encoding="utf-8"))
        entries_by_name = {e.get("name"): e for e in _extract_entries(db)}
        r_sound = transpile_catalog_entry(entries_by_name["AxmLeftInSound"])
        self.assertTrue(r_sound["is_predicative"])
        r_cfunc = transpile_catalog_entry(entries_by_name["DefClassFunction"])
        self.assertEqual(r_cfunc["number"], entries_by_name["DefClassFunction"]["num"])


if __name__ == "__main__":
    unittest.main()
