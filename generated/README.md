<!--
  AUTO-GENERATED FILE — DO NOT EDIT BY HAND (User Directives #6 & #17).
  Source: set_theory_prover/program/export_certificates_and_bundles.ML
  Generator: Poly/ML batch exporter (set_theory_prover/program/export_certificates_and_bundles.ML)
  Regenerate: cd /hostramdisk/set_theory_prover/program && poly -q --use export_certificates_and_bundles.ML </dev/null
-->

# Generated Formal Reference, Proof Certificates & Export Bundles (`generated/`)

**Policy (User Directives #6 & #17):**

- Every file inside `obeliskproofassistant.github.io/generated/` is produced **exclusively** by running Standard ML (`.ML`) generator scripts in `set_theory_prover/program/` via Poly/ML (`poly -q --use ...`).
- AI processes and human operators must **never** hand-edit or Python-generate files inside `generated/`.
- Every generated artifact carries an explicit User Directive #6 provenance header stating its `.ML` source file, generator script, and exact regeneration command.

## Strict MKTD1 / MKTD2 Taxonomy (User Directives #15 & #19)

Across all generated specifications, proof certificates, and symbol pages, Obelisk uses the strict two-tier nomenclature:

1. **Logical Frameworks**: `MKTD1-framework`, `MKTD2-framework`
2. **Proof Assistant Systems / Provers**: `MKTD1-system` (`MKTD1-prover`), `MKTD2-system` (`MKTD2-prover`)
3. **Theories**: `MKTD1-theory`, `MKTD2-theory`

## Regeneration Commands

Run from `/hostramdisk/set_theory_prover/program`:

```bash
# 1. Generate manual.html, variant1.html, variant2.html, symbols.html, index.html, and symbols/*.html
poly -q --use html_generator.ML </dev/null

# 2. Generate MKTD2-system proof showcase (nbg_propositions_as_types.html) and proofpages/*.html
poly -q --use nbg_html_generator.ML </dev/null

# 3. Generate proof certificates, Lean 4 export, unfolded SML'97 bundle, and this README.md
poly -q --use export_certificates_and_bundles.ML </dev/null
```

## Directory Contents

- `index.html`: Master directory of all SML-generated HTML pages, proof certificates, and export bundles.
- `manual.html`: Complete unified reference for `MKTD1-system` and `MKTD2-system` with clickable Unicode, LaTeX, and ANSII formula rows.
- `variant1.html`: Dedicated `MKTD1-system` (`MKTD1-theory` / `MKTD1-framework`) sequent calculus and typed AST reference.
- `variant2.html`: Dedicated `MKTD2-system` (`MKTD2-theory` / `MKTD2-framework`) propositions-as-types and constructive lambda-term reference.
- `symbols.html` & `symbols/*.html`: Complete clickable symbol registry and 81 dedicated personal symbol reference pages.
- `nbg_propositions_as_types.html` & `proofpages/*.html`: Interactive step-by-step proof explorer for `MKTD1-system` and `MKTD2-system` theorems.
- `certificates/nbg_propositions_as_types.lp`: Lambdapi / Dedukti proof certificate for the 20 core `MKTD2-system` set-theoretic theorems.
- `certificates/recursion_theorem_zf.cert.json`: Cryptographically sealed JSON proof certificate for the Dedekind-Peano recursion theorem.
- `export/ObeliskTheorems.lean`: Lean 4 exported theorem library cross-checked against the Obelisk SML kernel.
- `export/obelisk_unfolded.ML`: Dependency-ordered monolithic SML'97 kernel and prover bundle compatible with Poly/ML and CakeML.
