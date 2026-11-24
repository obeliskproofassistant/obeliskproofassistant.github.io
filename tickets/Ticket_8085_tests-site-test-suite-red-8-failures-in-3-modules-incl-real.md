# Ticket 8085 — [Tests] Site test suite red: 8 failures in 3 modules, incl. real double-escaped \\unicode MathJax bug

**Project:** obeliskproofassistant.github.io
**Importance:** 7/10
**State:** opened
**Labels:** audit-2026-11-24, P8, tests, latex, priority:medium

## Description
## Problem
`python3 -m unittest tests/<module>.py` (pytest is not installed in the container), 2026-11-24:
- `test_latex_rendering` (2): `μ_` missing in the four-theory hierarchy section; HTML contains double-escaped `\\unicode` (MathJax will show raw text). The second is a real rendering bug.
- `test_proof_regression` (5): `Fm.FFI((k:Class.Expression),‹x›,𝛗)` quoting form changed; `[(x:Variable), (𝛗:Fm)]` vs expected `[(x:Name), ...]`; NBG subpage count 239 vs 225; 3.69 proof constructor now `v_universe_thm (...)` instead of `PVUniverseAx_prf` (expected, and consistent with the STP soundness ticket); "Löb" text missing in Henkin-theory section.
- `test_site_shell_invariants` (1): informal "First-order" wording at `points_of_view.html:298`.
All other 11 modules pass.

## Plan
Triage each failure as generator bug vs stale expectation; fix generator bugs in set_theory_prover SML; update expectations only with a one-line reason in the test. Install pytest or document `unittest` as the runner in PROJECT.dev.md.


---
Source: cross-repo audit 2026-11-24, full evidence in `set_theory_prover/docs/AUDIT_2026-11-24_CROSS_REPO_TOP_PROBLEMS.md (commit 4bf75ef)`.
Baseline: set_theory_prover@c4ed8b7, obeliskproofassistant.github.io@2beb2f5, foundations@2cbbc9c.

