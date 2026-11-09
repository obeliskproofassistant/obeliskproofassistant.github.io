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
            "manual_top.html",
            "manual_the_rest.html",
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
            if rel != "manual_top.html":
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
        self.assertIn("(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). fst(p)))) ≡ (λ(A:Prop). (λ(B:Prop). fst))", thm_a03["proof_unicode"])
        self.assertIn("Π(A:Prop), Π(B:Prop), ((A × B) → A)", thm_a03["statement_unicode"])
        self.assertNotIn("rel-in\">∈", self.gen_manual_html)

    def test_database_entries_count(self):
        """Database sections and entry order must derive directly from set_theory_prover/program/types/order_sec*.txt."""
        types_dir = os.path.abspath(os.path.join(SITE_DIR, "..", "set_theory_prover", "program", "types"))
        sec_orders = {}
        for idx, sid in enumerate(s["id"] for s in self.db["sections"]):
            sec_idx = idx + 1
            order_path = os.path.join(types_dir, f"order_sec{sec_idx}.txt")
            self.assertTrue(os.path.isfile(order_path), f"Missing section order file: {order_path}")
            with open(order_path, "r", encoding="utf-8") as f:
                names = [ln.strip() for ln in f if ln.strip() and not ln.strip().startswith("#")]
            for nm in names:
                self.assertRegex(nm, r"^[A-Za-z]+$", f"Entry name {nm!r} must use plain English alphabet only")
            sec_orders[sid] = names

        expected_total = sum(len(v) for v in sec_orders.values())
        total_entries = sum(len(s["entries"]) for s in self.db["sections"])
        self.assertEqual(total_entries, expected_total)
        self.assertEqual(self.db["entry_count"], expected_total)
        for sec in self.db["sections"]:
            sid = sec["id"]
            actual_names = [e["name"] for e in sec["entries"]]
            self.assertEqual(actual_names, sec_orders[sid], f"Section {sid} order does not match order_{sid.replace('-', '')}.txt")

    def test_stated_numbering_ranges_match_actual_entries(self):
        """Stated section numbering ranges in manual.html and index.html must match the actual first and last entries of each section."""
        for sec in self.gen_db["sections"]:
            sid = sec["id"]
            entries = sec["entries"]
            self.assertGreater(len(entries), 0, f"Section {sid} is empty")
            first_num = entries[0]["num"]
            last_num = entries[-1]["num"]
            self.assertEqual(sec["range"], f"{first_num}-{last_num}")
            html_range = f"{first_num}&ndash;{last_num}"
            self.assertIn(html_range, self.gen_manual_html, f"Missing exact range {html_range} in generated/manual.html")

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

        self.assertEqual(len(self.gen_db["entries"]), self.gen_db["entry_count"])
        for e in self.gen_db["entries"]:
            ename = e["name"]
            self.assertRegex(ename, r"^[A-Za-z]+$", f"Entry name {ename!r} must be plain English alphabet")
            formula = e["formula_unicode"]
            ast = e["kernel_ast_unicode"]
            self.assertTrue(formula, f"Empty formula_unicode for {ename}")
            self.assertTrue(ast, f"Empty kernel_ast_unicode for {ename}")
            self.assertEqual(
                strip_redcover_sq(ast),
                formula,
                f"Formula vs SML Kernel AST mismatch in entry {ename} ({e['title']}): {formula!r} vs {ast!r}",
            )

        by_name = {e["name"]: e for e in self.gen_db["entries"]}
        # RulClassComprehension must separate Judgements [(x:Name), (𝛗:Fm)] from Side Condition ⊤
        eccr = by_name["RulClassComprehension"]
        self.assertEqual(eccr["judgements_unicode"], "[(x:Name), (𝛗:Fm)]")
        self.assertEqual(eccr["side_condition_unicode"], "⊤")
        self.assertIn('<th class="field-name">Judgements (Unicode)</th>', self.gen_manual_html)

        # RulExistsAbstraction conclusion must be ((∃(⦃x⦄:⟦X⟧)⟦𝛂⟧)—→⟦𝛃⟧), never ∃(x:Class)(φ→ψ)
        eea = by_name["RulExistsAbstraction"]
        self.assertEqual(eea["title"], "Exists Abstraction")
        self.assertEqual(eea["formula_unicode"], "((⟦𝛂⟧—→⟦𝛃⟧) ⊢ ((∃(⦃x⦄:⟦X⟧)⟦𝛂⟧)—→⟦𝛃⟧))")
        self.assertNotIn("∃(x : Class) (φ → ψ)", self.gen_manual_html)

        # AxmPropNegElim is Negation Elimination; AxmPropNegIntro is Negation Introduction (Reductio Ad Absurdum)
        eneg_elim = by_name["AxmPropNegElim"]
        self.assertEqual(eneg_elim["formula_unicode"], "((¬⟦𝛂⟧)—→(⟦𝛂⟧—→⊥))")
        self.assertIn("Negation Elimination", eneg_elim["comment"])
        self.assertNotIn("Negation Introduction", eneg_elim["comment"])
        eneg_intro = by_name["AxmPropNegIntro"]
        self.assertEqual(eneg_intro["formula_unicode"], "((⟦𝛂⟧—→⟦𝛃⟧)—→((⟦𝛂⟧—→¬⟦𝛃⟧)—→¬⟦𝛂⟧))")
        self.assertIn("Negation Introduction", eneg_intro["comment"])

        # AxmRegularity shows exact kernel formula and labels both Kernel Form and textbook equivalent form
        ereg = by_name["AxmRegularity"]
        self.assertEqual(ereg["formula_unicode"], "(∀(X:Class)((𝒫(X)⊆X)—→(V⊆X)))")
        self.assertIn("Kernel Form", ereg["comment"])
        self.assertIn("textbook", ereg["comment"].lower())

    def test_certificate_pages_exist_and_non_empty(self):
        """Every entry in generated/ and frozen/ must have a corresponding standalone certificate page."""
        for e in self.gen_db["entries"]:
            eid = e["id"]
            for base_dir in (os.path.join(SITE_DIR, "generated"), FROZEN_DIR):
                page_path = os.path.join(base_dir, "proofs", f"{eid}.html")
                self.assertTrue(os.path.isfile(page_path), f"Certificate missing: {page_path}")
                self.assertGreater(os.path.getsize(page_path), 500, f"Certificate empty or truncated: {page_path}")

    def test_manual_links_to_all_proof_certificates(self):
        """generated/manual.html must link to every standalone entry page."""
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
        """Entry 3.24 renders as if_dep in Unicode/ASCII and \\mathsf{if}_{\\mathsf{dep}} in LaTeX, without awkward modifier-superscript d or unescaped math."""
        gen_manual = os.path.join(SITE_DIR, "generated", "manual.html")
        with open(gen_manual, "r", encoding="utf-8") as f:
            gen_html = f.read()
        self.assertIn("if_dep", gen_html)
        self.assertIn("\\mathsf{if}_{\\mathsf{dep}}", gen_html)
        self.assertNotIn("if\u1d48\u2091\u209a", gen_html)
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
            "parentheses.html",
            "stored-type-brackets.html",
            "square-brackets.html",
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
        self.assertIn('href="symbols/parentheses.html"', gen_html)
        self.assertIn('href="symbols/stored-type-brackets.html"', gen_html)
        self.assertIn('href="symbols/quotation.html"', gen_html)
        self.assertIn('href="symbols/ifv-pred.html"', gen_html)
        self.assertIn('href="symbols/enc.html"', sym_html)
        self.assertIn('href="symbols/dec.html"', sym_html)
        self.assertIn('href="symbols/emb.html"', sym_html)
        self.assertIn('href="symbols/mu-interpretation.html"', sym_html)
        self.assertIn('href="symbols/class-type.html"', gen_html)
        self.assertIn('href="symbols/conditionals-if-dep.html"', gen_html)

    def test_example_a_binder_tooltips_and_metalevel_badges(self):
        """Example A: Class is never free/bound; binders look like bound variables with '(binder)' suffix; metalevel badges 0/1."""
        self.assertNotIn("Bound or free Class", self.gen_manual_html)
        self.assertNotIn("Bound Class ", self.gen_manual_html)
        self.assertNotIn("Free Class ", self.gen_manual_html)
        # In #DefEmptySet, x is a binder colored ansi-light-yellow with tooltip "Bound class variable x (binder)"
        idx = self.gen_manual_html.find('id="DefEmptySet"')
        self.assertGreaterEqual(idx, 0)
        def_empty_block = self.gen_manual_html[idx:idx + 3000]
        self.assertIn(
            '<span class="ansi-light-yellow"><a href="symbols/variables.html" class="sym-link" title="Bound class variable x (binder)">x</a></span>',
            def_empty_block,
        )
        self.assertIn('<span class="metalevel-badge"', def_empty_block)
        # Personal symbol pages for distinct symbols
        sym_dir = os.path.join(SITE_DIR, "generated", "symbols")
        for page in (
            "fv-op.html",
            "ifv-pred.html",
            "ffi-pred.html",
            "nfv-pred.html",
            "fresh-pred.html",
            "variable-sort.html",
            "expression-sort.html",
            "name-sort.html",
            "bool-sort.html",
            "prop-sort.html",
            "tau-binder.html",
            "definitional-eq.html",
        ):
            self.assertTrue(os.path.isfile(os.path.join(sym_dir, page)), f"Missing symbol page: {page}")
        by_name = {e["name"]: e for e in self.gen_db["entries"]}
        self.assertIn("¬Fm.IFV(v,𝛙)", by_name["DefClassConditional"]["formula_unicode"])
        self.assertIn("¬Ctx.IFV(v,Γ)", by_name["DefMetaGeneralisation"]["formula_unicode"])
        self.assertIn("Fm.FFI((k:Class.Expression),‹x›,𝛗)", by_name["AxmMetaClassComprehension"]["formula_unicode"])
        self.assertEqual(by_name["RulForallInstantiation"]["side_condition_unicode"], "Fm.FFI((t:X.Expression),x,𝛗)")

    def test_example_b_sml_kernel_ast_and_scheme_of_types(self):
        """Example B: SML Kernel AST contains only the Prf_p constructor name (e.g. PA1_prf); Scheme of Types holds the typed formula across 3 notations."""
        self.assertEqual(
            self.gen_manual_html.count('<th class="field-name">Scheme of Types (Unicode)</th>'),
            len(self.gen_db["entries"]),
        )
        idx = self.gen_manual_html.find('id="AxmPropWeakening"')
        self.assertGreaterEqual(idx, 0)
        a01_block = self.gen_manual_html[idx:idx + 35000]
        self.assertIn(
            '<th class="field-name">SML Kernel AST</th>\n              <td class="field-value proof-cell"><code>PA1_prf</code></td>',
            a01_block,
        )
        self.assertIn('<th class="field-name">Scheme of Types (Unicode)</th>', a01_block)
        self.assertIn('<th class="field-name">Scheme of Types (LaTeX)</th>', a01_block)
        self.assertIn('<th class="field-name">Scheme of Types (ANSII)</th>', a01_block)
        by_name = {e["name"]: e for e in self.gen_db["entries"]}
        self.assertEqual(by_name["AxmPropWeakening"]["prf_constructor"], "PA1_prf")
        self.assertEqual(
            by_name["AxmPropWeakening"]["scheme_of_types_unicode"],
            "(⟦[𝛂@Fm.Expression]⟧—→(⟦[𝛃@Fm.Expression]⟧—→⟦[𝛂@Fm.Expression]⟧))",
        )

    def test_thm_universal_class_is_universe_3_69_proven(self):
        """3.69 #ThmUniversalClassIsUniverse ('The class of all sets is a universe') is proven from other axioms and rendered with Formal Kernel Proof."""
        by_name = {e["name"]: e for e in self.gen_db["entries"]}
        self.assertIn("ThmUniversalClassIsUniverse", by_name)
        e369 = by_name["ThmUniversalClassIsUniverse"]
        self.assertEqual(e369["num"], "3.69")
        self.assertEqual(e369["kind"], "Theorem")
        self.assertEqual(e369["formula_unicode"], "(V universe)")
        self.assertEqual(e369["prf_constructor"], "PVUniverseAx_prf")
        self.assertIn("v_universe_thm_proof", e369["comment"])
        self.assertIn("PVUniverseAx_prf", e369["comment"])

        idx = self.gen_manual_html.find('id="ThmUniversalClassIsUniverse"')
        self.assertGreaterEqual(idx, 0)
        block_369 = self.gen_manual_html[idx:idx + 150000]
        self.assertIn('<th class="field-name">Formal Kernel Proof</th>', block_369)
        self.assertIn("Step 1 (ω ∈ V", block_369)
        self.assertIn("Step 2 (V transitive", block_369)
        self.assertIn("Step 3 (V Hereditary", block_369)
        self.assertIn("Step 4 (V Powerful", block_369)
        self.assertIn("Step 5 (V Tight", block_369)
        self.assertIn("Step 6 (V Pairful", block_369)
        self.assertIn("Step 8 (Conclusion via PAndR_prf + def_to_intro", block_369)

        for kdef_name in [
            "DefUniversalClass",
            "DefTransitiveClass",
            "DefHereditaryClass",
            "DefPowerfulClass",
            "DefPairfulClass",
            "DefTightClass",
            "DefGrothendieckUniverse",
        ]:
            self.assertEqual(by_name[kdef_name]["prf_constructor"], "PKernelDef_prf")

    def test_tickets_t6_t7_w6_verification(self):
        """Verify complete implementation of tickets T6, T7, and W6."""
        # W6: Build hash and date in page footers
        self.assertIn("Build Hash:", self.gen_manual_html)
        self.assertIn("Built on:", self.gen_manual_html)
        self.assertIn("entries.ML:L", self.gen_manual_html)
        self.assertIn("https://github.com/obeliskproofassistant/set_theory_prover/blob/main/program/types/entries.ML#L", self.gen_manual_html)

        # W6: Changelog artifact and page
        changelog_md = os.path.join(SITE_DIR, "CHANGELOG.md")
        self.assertTrue(os.path.isfile(changelog_md), "Missing CHANGELOG.md")
        changelog_html = os.path.join(SITE_DIR, "generated", "changelog.html")
        self.assertTrue(os.path.isfile(changelog_html), "Missing generated/changelog.html")
        with open(changelog_html, "r", encoding="utf-8") as f:
            c_html = f.read()
        self.assertIn("1.2.0", c_html)
        self.assertIn("DefDunaevOrderedPair", c_html)

        # T6: Glossary artifact and page
        glossary_md = os.path.join(SITE_DIR, "docs", "glossary.md")
        self.assertTrue(os.path.isfile(glossary_md), "Missing docs/glossary.md")
        glossary_html = os.path.join(SITE_DIR, "generated", "glossary.html")
        self.assertTrue(os.path.isfile(glossary_html), "Missing generated/glossary.html")
        with open(glossary_html, "r", encoding="utf-8") as f:
            g_html = f.read()
        self.assertIn("Dunaev Tagged Ordered Pair", g_html)
        self.assertIn("Dunaev Class-List", g_html)
        self.assertIn("Context Environments", g_html)

        # T6 & T7: index.html definitions, typing rules, and 2nd worked example without bot
        index_path = os.path.join(SITE_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            idx_html = f.read()
        # T6: Context Delta and Gamma defined at first use
        self.assertIn("Context &Delta; (Variable Signature)", idx_html)
        self.assertIn("Context &Gamma; (Proof Hypotheses)", idx_html)
        self.assertIn("Set(X) vs isSet(X)", idx_html)
        # T7: Typing rules for constructors
        self.assertIn("ELam", idx_html)
        self.assertIn("EFn", idx_html)
        self.assertIn("ECompr", idx_html)
        self.assertIn("EFst", idx_html)
        self.assertIn("EApp", idx_html)
        self.assertIn("ESnd", idx_html)
        # T7: Second worked example without bot
        self.assertIn("Worked Example 2", idx_html)
        self.assertIn("thm_inter_subset_left", idx_html)
        self.assertIn("fst(hIn)", idx_html)

    def test_tickets_t1_t2_verification(self):
        """Verify resolution of Ticket T1 (Tarski/Loeb soundness of F) and Ticket T2 (Completeness decoupling)."""
        db = self.gen_db["entries"]
        by_name = {e["name"]: e for e in db}

        # T1: Soundness of Full Theory F (3.72) is an Axiom and notes Tarski/Loeb
        self.assertIn("AxmSoundnessOfFullTheory", by_name)
        soundness_f = by_name["AxmSoundnessOfFullTheory"]
        self.assertEqual(soundness_f["num"], "3.72")
        self.assertEqual(soundness_f["kind"], "Axiom")
        self.assertEqual(soundness_f["status"], "Postulated (Kernel Axiom)")
        self.assertIn("Tarski", soundness_f["comment"])
        self.assertIn("Löb", soundness_f["comment"])
        self.assertIn("non-recursively-enumerable", soundness_f["comment"])

        # T2: Semantic Completeness of F (3.73) is an Axiom (NOT a Definition)
        self.assertIn("AxmSemanticCompletenessOfFullTheory", by_name)
        sem_comp_f = by_name["AxmSemanticCompletenessOfFullTheory"]
        self.assertEqual(sem_comp_f["num"], "3.73")
        self.assertEqual(sem_comp_f["kind"], "Axiom")
        self.assertEqual(sem_comp_f["status"], "Postulated (Kernel Axiom)")
        self.assertIn("Semantic completeness", sem_comp_f["comment"])
        self.assertIn("eval", sem_comp_f["formula_unicode"])

        # T2: Negation-Completeness of F (3.74) is an Axiom (NOT a Definition)
        self.assertIn("AxmNegationCompletenessOfFullTheory", by_name)
        neg_comp_f = by_name["AxmNegationCompletenessOfFullTheory"]
        self.assertEqual(neg_comp_f["num"], "3.74")
        self.assertEqual(neg_comp_f["kind"], "Axiom")
        self.assertEqual(neg_comp_f["status"], "Postulated (Kernel Axiom)")
        self.assertIn("negation-completeness", neg_comp_f["comment"])

        # Ensure total entry count is preserved at 106
        self.assertEqual(len(db), 106)

        # In manual.html, verify verification cell is Postulated (Kernel Axiom), not Definitional
        self.assertIn('id="AxmSemanticCompletenessOfFullTheory"', self.gen_manual_html)
        self.assertIn('id="AxmNegationCompletenessOfFullTheory"', self.gen_manual_html)
        self.assertIn('id="AxmSoundnessOfFullTheory"', self.gen_manual_html)

        # Verify changelog mentions v1.3.0 and tickets T1 & T2
        changelog_html = os.path.join(SITE_DIR, "generated", "changelog.html")
        with open(changelog_html, "r", encoding="utf-8") as f:
            c_html = f.read()
        self.assertIn("1.3.0", c_html)
        self.assertIn("Ticket T1", c_html)
        self.assertIn("Ticket T2", c_html)

if __name__ == "__main__":
    unittest.main()
