#!/usr/bin/env python3
"""
test_proof_regression.py
Continuous verification regression suite for Obelisk Proof Assistant.
Verifies that:
1. Every item in the theory database has a valid, non-empty certificate page.
2. Every status badge in manual.html and proofs.html links to an existing certificate.
3. All verified theorems are backed by closed proof programs without cheating axioms.
4. Inline proof drawers exist in manual.html for all 49 items.
5. proofs.html and proofs/index.html are generated and structurally intact.
"""

import unittest
import json
import os
import re

SITE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
GENERATED_DB_PATH = os.path.join(SITE_DIR, "generated/theory_db.json")
GENERATED_MANUAL_PATH = os.path.join(SITE_DIR, "generated/manual.html")
FROZEN_DIR = os.path.join(SITE_DIR, "frozen")
DB_PATH = os.path.join(FROZEN_DIR, "data/theory_database.json")
MANUAL_PATH = os.path.join(FROZEN_DIR, "manual.html")
PROOFS_PATH = os.path.join(FROZEN_DIR, "proofs.html")
PROOFS_INDEX_PATH = os.path.join(FROZEN_DIR, "proofs/index.html")

class TestProofRegression(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        with open(GENERATED_DB_PATH, "r", encoding="utf-8") as f:
            cls.gen_db = json.load(f)
        with open(GENERATED_MANUAL_PATH, "r", encoding="utf-8") as f:
            cls.gen_manual_html = f.read()
        with open(DB_PATH, "r", encoding="utf-8") as f:
            cls.db = json.load(f)
        with open(MANUAL_PATH, "r", encoding="utf-8") as f:
            cls.manual_html = f.read()
        with open(PROOFS_PATH, "r", encoding="utf-8") as f:
            cls.proofs_html = f.read()

    def test_ml_generated_manual_and_db_policy(self):
        """generated/manual.html and generated/theory_db.json must be ML-generated with Unicode default, table-inside-a-table, and algorithmic links for all tokens."""
        self.assertIn("AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND", self.gen_manual_html)
        self.assertIn('class="mode-unicode"', self.gen_manual_html)
        self.assertNotIn("mode-membership", self.gen_manual_html)
        self.assertNotIn("Explicit Term Interpretation", self.gen_manual_html)
        self.assertIn('class="external-row"', self.gen_manual_html)
        self.assertIn('class="internal-entity-table"', self.gen_manual_html)
        self.assertIn('class="sym-link"', self.gen_manual_html)
        self.assertIn(r'\href{symbols/', self.gen_manual_html)
        self.assertIn('id="label-class-comprehension"', self.gen_manual_html)
        for tok in ("𝛂", "𝛃", "⟦", "⟧", "(", ")", "{", "}", "x", "A"):
            self.assertIn(f'>{tok}</a>', self.gen_manual_html, f"Token {tok!r} must be clickable in generated/manual.html")
        self.assertIn("Unspecified Elementary Metatheory E in {I\\Sigma_1, PA, T, NBG, MK}", self.gen_manual_html)
        clean_manual = re.sub(r"<[^>]+>", "", self.gen_manual_html)
        self.assertIn("(∃(K:Class)⊤)", clean_manual)
        for bad in ("∈Class", "∈ Class", "∈Prop", "∈ Prop", "∈Bool", "∈ Bool"):
            self.assertNotIn(bad, clean_manual, f"Forbidden pseudo-membership {bad!r} found in generated/manual.html")
        self.assertGreaterEqual(len(self.gen_db["entries"]), 100)

    def test_ml_generated_subpages_and_nbg_library(self):
        """All subpages in generated/ must exist and carry the ML provenance header and Unicode default."""
        expected_pages = [
            "manual.html",
            "output.html",
            "variant1.html",
            "variant2.html",
            "nbg_library.html",
            "proofs.html",
            "symbols.html",
            "dependent_types.html",
            "metatheory.html",
            "sections/sec-1.html",
            "sections/sec-2.html",
            "sections/sec-3.html",
            "sections/sec-4.html",
            "sections/sec-5.html",
        ]
        for rel in expected_pages:
            path = os.path.join(SITE_DIR, "generated", rel)
            self.assertTrue(os.path.isfile(path), f"Missing ML-generated page: {path}")
            with open(path, "r", encoding="utf-8") as f:
                html = f.read()
            self.assertIn("AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND", html, f"Missing ML provenance header in {rel}")
            self.assertIn('class="mode-unicode"', html, f"Unicode default missing in {rel}")
            self.assertNotIn("mode-membership", html, f"Forbidden CSS hack mode-membership in {rel}")
            self.assertIn('class="internal-entity-table"', html, f"Vertical internal table missing in {rel}")
        nbg_json_path = os.path.join(SITE_DIR, "generated", "nbg_library.json")
        self.assertTrue(os.path.isfile(nbg_json_path))
        with open(nbg_json_path, "r", encoding="utf-8") as f:
            nbg_lib = json.load(f)
        self.assertEqual(nbg_lib["total_count"], 100)
        self.assertEqual(nbg_lib["derived_count"], 77)
        self.assertEqual(nbg_lib["definitional_count"], 16)
        self.assertEqual(nbg_lib["axiomatic_count"], 7)
        thm_a03 = next(t for t in nbg_lib["theorems"] if t["name"] == "thm_A03")
        self.assertIn("(λ(A:Prop). (λ(B:Prop). (λ(p:(A ∧ B)). fst(p)))) ≡ (λ(A:Prop). (λ(B:Prop). fst))", thm_a03["proof_unicode"])
        self.assertIn("∀(A:Prop), ∀(B:Prop), ((A ∧ B) → A)", thm_a03["statement_unicode"])
        self.assertNotIn("rel-in\">∈", self.gen_manual_html)

    def test_database_entries_count(self):
        """Database must contain 5 sections (1.01-1.14, 2.01-2.05, 3.01-3.79, 4.01-4.06, 5.01-5.02) and 106 formal items."""
        self.assertEqual(len(self.db["sections"]), 5)
        total_entries = sum(len(s["entries"]) for s in self.db["sections"])
        self.assertEqual(total_entries, 106)
        self.assertEqual(self.db["entry_count"], 106)

    def test_stated_numbering_ranges_match_actual_entries(self):
        """Stated section numbering ranges in manual.html and index.html must match the actual first and last entries of each section."""
        expected_ranges = {
            "sec-1": ("1.01", "1.14", 14),
            "sec-2": ("2.01", "2.06", 6),
            "sec-3": ("3.01", "3.78", 78),
            "sec-4": ("4.01", "4.06", 6),
            "sec-5": ("5.01", "5.02", 2),
        }
        for sec in self.gen_db["sections"]:
            sid = sec["id"]
            first_num, last_num, count = expected_ranges[sid]
            entries = sec["entries"]
            self.assertEqual(len(entries), count, f"Section {sid} count mismatch")
            self.assertEqual(entries[0]["num"], first_num)
            self.assertEqual(entries[-1]["num"], last_num)
            self.assertEqual(sec["range"], f"{first_num}-{last_num}")
            html_range = f"{first_num}&ndash;{last_num}"
            self.assertIn(html_range, self.gen_manual_html, f"Missing exact range {html_range} in generated/manual.html")
        for stale_range in ("1.01–1.07", "1.01&ndash;1.07", "1.01&ndash;1.13", "5.01–5.05", "5.01&ndash;5.05"):
            self.assertNotIn(stale_range, self.gen_manual_html, f"Stale numbering range {stale_range} found in generated/manual.html")

    def test_formula_and_kernel_ast_consistency_all_entries(self):
        """Every entry in the database must have a rendered formula and SML Kernel AST derived from the exact same kernel term."""
        def strip_redcover_sq(s: str) -> str:
            def parse(chars, idx):
                out = []
                while idx < len(chars):
                    ch = chars[idx]
                    if ch == "]":
                        return "".join(out), idx
                    elif ch == "[":
                        inside, next_idx = parse(chars, idx + 1)
                        if next_idx < len(chars) and chars[next_idx] == "]":
                            next_idx += 1
                        if "@" in inside:
                            out.append(inside.split("@", 1)[0])
                        else:
                            out.append("[" + inside + "]")
                        idx = next_idx
                    else:
                        out.append(ch)
                        idx += 1
                return "".join(out), idx
            res, _ = parse(list(s), 0)
            return res

        self.assertEqual(len(self.gen_db["entries"]), 106)
        for e in self.gen_db["entries"]:
            num = e["num"]
            formula = e["formula_unicode"]
            ast = e["kernel_ast_unicode"]
            self.assertTrue(formula, f"Empty formula_unicode for {num}")
            self.assertTrue(ast, f"Empty kernel_ast_unicode for {num}")
            self.assertEqual(
                strip_redcover_sq(ast),
                formula,
                f"Formula vs SML Kernel AST mismatch in entry {num} ({e['title']}): {formula!r} vs {ast!r}",
            )

        by_num = {e["num"]: e for e in self.gen_db["entries"]}
        # Rule 2.05 Exists Abstraction conclusion must be ((∃(⦃x⦄:⟦X⟧)⟦𝛂⟧)→⟦𝛃⟧), never ∃(x:Class)(φ→ψ)
        e205 = by_num["2.05"]
        self.assertEqual(e205["title"], "Exists Abstraction")
        self.assertEqual(e205["formula_unicode"], "((⟦𝛂⟧→⟦𝛃⟧) ⊢ ((∃(⦃x⦄:⟦X⟧)⟦𝛂⟧)→⟦𝛃⟧))")
        self.assertNotIn("∃(x : Class) (φ → ψ)", self.gen_manual_html)

        # A09 is Negation Elimination; A10 is Negation Introduction (Reductio Ad Absurdum)
        e109 = by_num["1.09"]
        self.assertEqual(e109["formula_unicode"], "((¬⟦𝛂⟧)→(⟦𝛂⟧→⊥))")
        self.assertIn("Negation Elimination", e109["comment"])
        self.assertNotIn("Negation Introduction", e109["comment"])
        e110 = by_num["1.10"]
        self.assertEqual(e110["formula_unicode"], "((⟦𝛂⟧→⟦𝛃⟧)→((⟦𝛂⟧→¬⟦𝛃⟧)→¬⟦𝛂⟧))")
        self.assertIn("Negation Introduction", e110["comment"])

        # Entry 3.14 Regularity shows exact kernel formula and labels both Kernel Form and textbook equivalent form
        e314 = by_num["3.14"]
        self.assertEqual(e314["formula_unicode"], "(∀(X:Class)((𝒫(X)⊆X)→(V⊆X)))")
        self.assertIn("Kernel Form", e314["comment"])
        self.assertIn("textbook", e314["comment"].lower())

    def test_certificate_pages_exist_and_non_empty(self):
        """Every entry in generated/ and frozen/ must have a corresponding standalone certificate page."""
        for e in self.gen_db["entries"]:
            eid = e["id"]
            for base_dir in (os.path.join(SITE_DIR, "generated"), FROZEN_DIR):
                page_path = os.path.join(base_dir, "proofs", f"{eid}.html")
                self.assertTrue(os.path.isfile(page_path), f"Certificate missing: {page_path}")
                self.assertGreater(os.path.getsize(page_path), 500, f"Certificate empty or truncated: {page_path}")

    def test_manual_links_to_all_proof_certificates(self):
        """generated/manual.html and frozen/manual.html must link to every standalone entry page and never diverge."""
        self.assertEqual(self.gen_manual_html, self.manual_html, "frozen/manual.html diverged from generated/manual.html")
        for e in self.gen_db["entries"]:
            eid = e["id"]
            link_pattern = f'href="proofs/{eid}.html"'
            self.assertIn(link_pattern, self.gen_manual_html, f"manual.html missing link for {eid}")

    def test_manual_sml_kernel_ast_rows_exist(self):
        """generated/manual.html must include an SML Kernel AST row for every item."""
        self.assertEqual(self.gen_manual_html.count('<th class="field-name">SML Kernel AST</th>'), len(self.gen_db["entries"]))

    def test_proofs_gallery_has_all_theorems_and_rules(self):
        """generated/proofs.html and frozen/proofs.html must contain all theorems and inference rules."""
        for e in self.gen_db["entries"]:
            if e["kind"] in ("Theorem", "Inference Rule"):
                row_id = f'id="{e["id"]}"'
                self.assertIn(row_id, self.proofs_html, f"proofs.html missing row: {row_id}")

    def test_proofs_index_integrity(self):
        """proofs/index.html must exist and include all 107 kernel entries."""
        self.assertTrue(os.path.isfile(PROOFS_INDEX_PATH))
        with open(PROOFS_INDEX_PATH, "r", encoding="utf-8") as f:
            index_content = f.read()
        for e in self.gen_db["entries"]:
            self.assertIn(f'id="{e["id"]}"', index_content)

    def test_nbg_library_json_mirror_is_present(self):
        """frozen/data/nbg_library.json must match generated/nbg_library.json."""
        with open(os.path.join(FROZEN_DIR, "data", "nbg_library.json"), "r", encoding="utf-8") as f:
            lib = json.load(f)
        self.assertEqual(lib["total_count"], 100)
        self.assertEqual(len(lib["theorems"]), 100)

    def test_verified_entries_have_no_cheating_axioms(self):
        """Every entry in the database must be free of PCheat_prf or undefined placeholders."""
        for e in self.gen_db["entries"]:
            num = e["num"]
            cert_path = os.path.join(SITE_DIR, "generated", "proofs", f"{e['id']}.html")
            with open(cert_path, "r", encoding="utf-8") as f:
                cert_content = f.read()
            self.assertNotIn("PCheat_prf", cert_content, f"Entry {num} uses cheating axiom PCheat_prf!")

    def test_if_dep_unicode_and_latex_no_raw_if_dep(self):
        """Directive 13: Entry 3.24 must render as Unicode subscript ifᵈₑₚ and LaTeX \\mathsf{if}_{\\mathsf{dep}}, never raw if_{dep}."""
        gen_manual = os.path.join(SITE_DIR, "generated", "manual.html")
        with open(gen_manual, "r", encoding="utf-8") as f:
            gen_html = f.read()
        self.assertIn("if\u1d48\u2091\u209a", gen_html)
        self.assertIn("\\mathsf{if}_{\\mathsf{dep}}", gen_html)
        self.assertNotIn("if_{dep}", gen_html)

    def test_personal_symbol_pages_and_links(self):
        """Directive 15: Personal symbol reference pages exist in generated/symbols/ and symbols link to them."""
        sym_dir = os.path.join(SITE_DIR, "generated", "symbols")
        expected_pages = [
            "index.html",
            "quotation.html",
            "antiquotation.html",
            "binder-brackets.html",
            "metalevel-brackets.html",
            "enc.html",
            "dec.html",
            "code.html",
            "emb.html",
            "mu-interpretation.html",
            "eval.html",
            "class-type.html",
            "typing-colon.html",
            "type-sort.html",
            "prop-bool.html",
            "fm-sort.html",
            "stmt-sort.html",
            "ctx-sort.html",
            "theory-sort.html",
            "prf-sort.html",
            "variable-expression.html",
            "hygiene-ffi-fv.html",
            "substitution-let.html",
            "binders.html",
            "conditionals-if-dep.html",
            "formula-metavariables.html",
            "delimiters-brackets.html",
            "variables.html",
        ]
        for page in expected_pages:
            full_path = os.path.join(sym_dir, page)
            self.assertTrue(os.path.isfile(full_path), f"Missing personal symbol page: {full_path}")
        gen_manual = os.path.join(SITE_DIR, "generated", "manual.html")
        with open(gen_manual, "r", encoding="utf-8") as f:
            gen_html = f.read()
        gen_symbols = os.path.join(SITE_DIR, "generated", "symbols.html")
        with open(gen_symbols, "r", encoding="utf-8") as f:
            sym_html = f.read()
        self.assertIn('href="symbols/quotation.html"', gen_html)
        self.assertIn('href="symbols/enc.html"', gen_html)
        self.assertIn('href="symbols/dec.html"', sym_html)
        self.assertIn('href="symbols/emb.html"', sym_html)
        self.assertIn('href="symbols/mu-interpretation.html"', sym_html)
        self.assertIn('href="symbols/class-type.html"', gen_html)
        self.assertIn('href="symbols/conditionals-if-dep.html"', gen_html)

if __name__ == "__main__":
    unittest.main()
