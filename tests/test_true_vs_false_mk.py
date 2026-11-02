#!/usr/bin/env python3
"""
test_true_vs_false_mk.py

Ticket 699 — Unit Tests for js/obelisk_engine.js Preset Library Parity

Runs the actual browser-side Obelisk NBG compiler (via Node.js) against every
preset in OBELISK_PRESETS and verifies the propositions-as-types contract:

  * 6/6 TRUE MK/NBG presets must compile (`status == "COMPILED"`).
  * 6/6 FALSE MK/NBG presets must be rejected (`status == "REJECTED"`), and
    they must be rejected by the *type checker*, not by a parser accident
    (`error` must not start with `ParseError`).

This replaces the previous documentation-only test which recorded two parser
failures for `true_empty_no_elements` and `true_mk_impredicative`.
"""

import json
import os
import shutil
import subprocess
import unittest

REPO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ENGINE_JS = os.path.join(REPO_DIR, "js", "obelisk_engine.js")

TRUE_PRESETS = [
    "true_empty_no_elements",
    "true_russell_not_set",
    "true_univ_and_inter",
    "true_succ_and_dunaev",
    "true_cantor_diagonal",
    "true_mk_impredicative",
]

FALSE_PRESETS = [
    "false_formula_as_proof",
    "false_pack_russell_as_set",
    "false_every_class_is_set",
    "false_univ_in_univ",
    "false_membership_sym",
    "false_impredicative_in_nbg",
]


def compile_all_presets() -> dict:
    """Compile every preset with the real JS engine and return the results."""
    node = shutil.which("node")
    if node is None:
        raise unittest.SkipTest("Node.js is not available for the JS engine tests")

    script = """
global.window = global;
require(process.argv[1]);
const Compiler = global.ObeliskNBGCompiler;
const presets = global.OBELISK_PRESETS;
const out = {};
for (const [name, preset] of Object.entries(presets)) {
  try {
    const result = new Compiler().compileSource(preset.source);
    out[name] = {
      status: result.status,
      ok: result.status === "COMPILED",
      error: result.error || "",
      verified_theorems: (result.verified_theorems || []).map(t => t.name),
    };
  } catch (e) {
    out[name] = { status: "THREW", ok: false, error: String(e), verified_theorems: [] };
  }
}
process.stdout.write(JSON.stringify(out));
"""
    proc = subprocess.run(
        [node, "-e", script, ENGINE_JS],
        cwd=REPO_DIR,
        capture_output=True,
        text=True,
        timeout=60,
    )
    if proc.returncode != 0:
        raise AssertionError(
            f"Node engine invocation failed ({proc.returncode}):\n{proc.stderr}"
        )
    return json.loads(proc.stdout)


class TestPresetLibraryParity(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.results = compile_all_presets()

    def test_all_six_true_presets_compile(self):
        for name in TRUE_PRESETS:
            with self.subTest(name=name):
                result = self.results.get(name)
                self.assertIsNotNone(result, f"Preset {name} is missing from engine")
                self.assertEqual(
                    result["status"],
                    "COMPILED",
                    f"True preset '{name}' was not compiled: {result['error']}",
                )

    def test_all_six_false_presets_are_rejected_by_typechecker(self):
        for name in FALSE_PRESETS:
            with self.subTest(name=name):
                result = self.results.get(name)
                self.assertIsNotNone(result, f"Preset {name} is missing from engine")
                self.assertEqual(
                    result["status"],
                    "REJECTED",
                    f"False preset '{name}' unexpectedly compiled",
                )
                # A parser error would reject everything, including valid
                # proofs; the negative presets must fail for a logical reason.
                self.assertFalse(
                    result["error"].startswith("ParseError"),
                    f"False preset '{name}' was rejected by the parser rather "
                    f"than the kernel: {result['error']}",
                )

    def test_true_and_false_presets_are_disjoint(self):
        self.assertEqual(len(TRUE_PRESETS), 6)
        self.assertEqual(len(FALSE_PRESETS), 6)
        self.assertTrue(set(TRUE_PRESETS).isdisjoint(FALSE_PRESETS))

    def test_guide_parity_intersection_and_dunaev_theorems(self):
        inter_thms = self.results["true_univ_and_inter"]["verified_theorems"]
        self.assertIn("thm_inter_comm", inter_thms)
        self.assertIn("thm_inter_assoc", inter_thms)
        self.assertIn("thm_inter_distrib_union", inter_thms)

        dunaev_thms = self.results["true_succ_and_dunaev"]["verified_theorems"]
        self.assertIn("thm_dunaev_pair_projections", dunaev_thms)
        self.assertIn("thm_dunaev_pair_first_proj", dunaev_thms)
        self.assertIn("thm_dunaev_pair_second_proj", dunaev_thms)


if __name__ == "__main__":
    unittest.main()
