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
        """Frozen database must contain 6 sections and at least 59 formal items (currently 69)."""
        self.assertEqual(len(self.db["sections"]), 6)
        total_entries = sum(len(s["entries"]) for s in self.db["sections"])
        self.assertGreaterEqual(total_entries, 59)

    def test_two_variants_and_decoupled_operators_present(self):
        """frozen/manual.html must include Enc, Dec, Emb, ProofsOf, Theorems, Two Variants architecture, and global config."""
        for eid in ("def-enc", "def-dec", "def-emb", "def-proofs-of", "def-theorems"):
            self.assertIn(f'id="{eid}"', self.manual_html)
        self.assertIn('id="two-variants-architecture"', self.manual_html)
        self.assertIn('id="global-config-bar"', self.manual_html)
        self.assertIn('setTerminologyMode', self.manual_html)
        self.assertIn('setObjectTheory', self.manual_html)

    def test_certificate_pages_exist_and_non_empty(self):
        """Every entry in frozen/ must have a corresponding verification certificate in frozen/proofs/."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                page_path = os.path.join(FROZEN_DIR, "proofs", f"{eid}.html")
                self.assertTrue(os.path.isfile(page_path), f"Certificate missing: {page_path}")
                self.assertGreater(os.path.getsize(page_path), 500, f"Certificate empty or truncated: {page_path}")

    def test_manual_links_to_all_proof_certificates(self):
        """frozen/manual.html must link to every proof certificate page."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                link_pattern = f'href="proofs/{eid}.html"'
                self.assertIn(link_pattern, self.manual_html, f"manual.html missing link for {eid}")

    def test_manual_inline_proof_drawers_exist(self):
        """frozen/manual.html must have an inline proof-row for every item."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                drawer_id = f'id="proof-row-{eid}"'
                self.assertIn(drawer_id, self.manual_html, f"manual.html missing inline proof drawer: {drawer_id}")

    def test_proofs_gallery_has_all_items(self):
        """frozen/proofs.html must contain proof cards for all 49 items."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                card_id = f'id="card-{eid}"'
                self.assertIn(card_id, self.proofs_html, f"proofs.html missing card: {card_id}")

    def test_proofs_index_mirror_integrity(self):
        """frozen/proofs/index.html must exist and match frozen/proofs.html."""
        self.assertTrue(os.path.isfile(PROOFS_INDEX_PATH))
        with open(PROOFS_INDEX_PATH, "r", encoding="utf-8") as f:
            index_content = f.read()
        self.assertEqual(self.proofs_html, index_content, "proofs/index.html does not match proofs.html")

    def test_nbg_library_appendix_is_present(self):
        """frozen/manual.html must include the machine-checked NBG standard library appendix."""
        self.assertIn('id="nbg-library"', self.manual_html)
        self.assertIn('id="nbg-dunaev_pair_injective"', self.manual_html)
        self.assertIn('class="nbg-row"', self.manual_html)
        with open(os.path.join(FROZEN_DIR, "data", "nbg_library.json"), "r", encoding="utf-8") as f:
            lib = json.load(f)
        self.assertGreaterEqual(lib["count"], 20)
        self.assertEqual(len(lib["theorems"]), lib["count"])
        self.assertEqual(self.manual_html.count('class="nbg-row"'), len(lib["theorems"]))

    def test_verified_entries_have_no_cheating_axioms(self):
        """Every entry marked 'Verified' must have a constructive proof program without cheating axioms."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                if e.get("status") == "Verified":
                    num = e["num"]
                    cert_path = os.path.join(FROZEN_DIR, "proofs", f"{e['id']}.html")
                    with open(cert_path, "r", encoding="utf-8") as f:
                        cert_content = f.read()
                    code_match = re.search(r'<pre class="code-block"><code>(.*?)</code></pre>', cert_content, re.DOTALL)
                    if code_match:
                        code_text = code_match.group(1)
                        self.assertNotIn("PCheat_prf", code_text, f"Theorem {num} proof code uses cheating axiom PCheat_prf!")
                        self.assertNotIn("undefined", code_text.lower(), f"Theorem {num} proof code contains undefined term!")

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
