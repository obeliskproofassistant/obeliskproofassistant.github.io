#!/usr/bin/env python3
"""Unit tests for tools/proof_minimizer.py (Ticket 192)."""

from pathlib import Path
import sys
import unittest

REPO_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_DIR / "tools"))

from proof_minimizer import (  # noqa: E402
    analyze_database_proofs,
    minimize_sequent_hypotheses,
    minimize_sml_proof_script,
)


class TestProofMinimizer(unittest.TestCase):
    def test_prunes_dead_hypotheses_without_altering_conclusion(self):
        hyps = [
            {"name": "h_used", "formula": "(A = B)"},
            {"name": "h_dead_1", "formula": "(C = D)"},
            {"name": "h_dead_2", "formula": "(x ∈ V)"},
        ]
        conclusion = "(B = A)"
        proof_body = "Sym_rule (PIdent h_used)"
        res = minimize_sequent_hypotheses(hyps, conclusion, proof_body)
        self.assertEqual(res["original_count"], 3)
        self.assertEqual(res["minimized_count"], 1)
        self.assertEqual(res["pruned_names"], ["h_dead_1", "h_dead_2"])
        self.assertEqual(res["conclusion"], conclusion)

    def test_minimizes_unused_sml_bindings_and_scans_database(self):
        sml = "\n".join([
            "val unused_lem = Truth_intro",
            "val thm_5_01 = Imp_intro (fn h => h)",
        ])
        res = minimize_sml_proof_script(sml)
        self.assertEqual(res["removed_bindings"], ["unused_lem"])
        self.assertIn("val thm_5_01", res["minimized_code"])

        db_stats = analyze_database_proofs()
        self.assertGreaterEqual(db_stats["analyzed_entries"], 59)


if __name__ == "__main__":
    unittest.main()
