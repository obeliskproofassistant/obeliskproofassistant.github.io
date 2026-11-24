#!/usr/bin/env python3
"""
test_ai_portal.py — Regression checks for the canonical technical reference page (`obelisk_ai.html`).

Invariants (`obelisk_ai.html.dev.md`, `PROJECT.dev.md`, `FACTBOOK.md`):
  - `ai.html` and `ai_version.html` redirect to `obelisk_ai.html`;
  - `obelisk_ai.html` links to the SML-generated catalogs and JSON reports
    (`generated/manual.html`, `generated/nbg_library.html`, `generated/theory_db.json`,
    `generated/nbg_library.json`) and contains zero hardcoded stale theorem/entry counts;
  - `obelisk_ai.html` accurately distinguishes MKTD1 (`program/newchecker/`) and MKTD2
    (`program/dependent_typechecker.ML`, classical via `ax_dneg_elim` and `ax_peirce`) from
    the separate `.nbg` surface checker (`NBGCompiler.typeCheck`, `program/nbg_compiler.ML`)
    and untrusted previews (`repl.html` / `js/obelisk_engine.js`).
"""

import os
import re
import unittest

REPO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CANONICAL_PAGE = "obelisk_ai.html"
DEV_DOC = "obelisk_ai.html.dev.md"
REDIRECT_PAGES = ["ai.html", "ai_version.html"]


class TestAIPortal(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.contents = {}
        for name in [CANONICAL_PAGE, DEV_DOC] + REDIRECT_PAGES:
            with open(os.path.join(REPO_DIR, name), "r", encoding="utf-8") as f:
                cls.contents[name] = f.read()

    def test_legacy_aliases_redirect_to_canonical_obelisk_ai(self):
        for alias in REDIRECT_PAGES:
            content = self.contents[alias]
            self.assertIn('http-equiv="refresh"', content)
            self.assertIn("url=obelisk_ai.html", content)
            self.assertIn('href="obelisk_ai.html"', content)
            self.assertLess(len(content), 1500, f"{alias} must be a lightweight redirect")

    def test_canonical_portal_links_generated_reports_without_hardcoded_counts(self):
        content = self.contents[CANONICAL_PAGE]
        for target in (
            "generated/manual.html",
            "generated/nbg_library.html",
            "generated/theory_db.json",
            "generated/nbg_library.json",
            "generated/symbols.html",
            "generated/glossary.html",
        ):
            self.assertIn(target, content)

        # Must not contain hardcoded stale counts (AGENTS.md section 1 & PROJECT.dev.md)
        forbidden_stale_counts = [
            r"\b106 verified entries\b",
            r"\b100 type-checked records\b",
            r"\b100 machine-checked\b",
            r"\b77 derived proofs\b",
            r"\b16 conservative definitions\b",
            r"\b7 irreducible MK axioms\b",
            r"\bProver suite:\s*\d+\s*tests\b",
            r"\bWeb suite:\s*\d+\s*tests\b",
        ]
        for pat in forbidden_stale_counts:
            self.assertIsNone(
                re.search(pat, content, re.IGNORECASE),
                f"obelisk_ai.html must not contain hardcoded count matching {pat!r}",
            )

    def test_ai_portal_reports_dunaev_and_kuratowski_distinction(self):
        content = self.contents[CANONICAL_PAGE]
        self.assertIn("DefDunaevOrderedPair", content)
        self.assertIn("mark(A, 1)", content)
        self.assertIn("mark(B, 2)", content)
        self.assertIn("thm_3_77_dunaev_pr1_sub", content)
        self.assertIn("thm_3_78_dunaev_pr2_sub", content)
        self.assertIn("thm_dunaev_opair_injective", content)
        self.assertIn("proofDunaevPairInjectivity", content)
        self.assertIn("dunaev_pair_injective", content)
        self.assertIn("dunaev_cartesian_elim", content)
        self.assertIn("opairK(a, b) = {{a}, {a, b}}", content)

    def test_ai_portal_reports_trusted_kernels_and_architectural_boundaries(self):
        content = self.contents[CANONICAL_PAGE]
        # MKTD1 kernel facts
        self.assertIn("ThmWithPrf", content)
        self.assertIn("THM_KERNEL", content)
        self.assertIn("PCheat_prf", content)
        self.assertIn("ThmWithPrf.cheat", content)
        self.assertIn("free class variables", content)
        self.assertIn("v_universe_thm", content)
        self.assertIn("is_object_level_fm0", content)
        # MKTD2 classical dependent type checker vs separate .nbg surface compiler
        self.assertIn("dependent_typechecker.ML", content)
        self.assertIn("dependent_eval.ML", content)
        self.assertIn("verified_theorems.ML", content)
        self.assertIn("ax_dneg_elim", content)
        self.assertIn("ax_peirce", content)
        self.assertIn("nbg_compiler.ML", content)
        self.assertIn("NBGCompiler.typeCheck", content)
        self.assertIn("variant_bridge.ML", content)

    def test_dev_md_exists_and_documents_invariants(self):
        dev_md = self.contents[DEV_DOC]
        self.assertIn("FACTBOOK.md", dev_md)
        self.assertIn("PRESENTATION_RULES.md", dev_md)
        self.assertIn("theory_db.json", dev_md)


if __name__ == "__main__":
    unittest.main()
