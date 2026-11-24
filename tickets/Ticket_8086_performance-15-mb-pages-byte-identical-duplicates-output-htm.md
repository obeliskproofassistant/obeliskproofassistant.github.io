# Ticket 8086 — [Performance] 15 MB pages, byte-identical duplicates (output.html = manual.html), 131 MB generated/ churn

**Project:** obeliskproofassistant.github.io
**Importance:** 7/10
**State:** opened
**Labels:** audit-2026-11-24, P9, performance, repo-health, priority:medium

## Description
## Problem
- `generated/variant2.html` 15.4 MB, `generated/nbg_library.html` 15.4 MB, `generated/proofs/index.html` 7.7 MB, `output.html` and `manual.html` 7.5 MB each and byte-identical (same md5), `variant1.html` 7.5 MB, `manual_the_rest.html` 7.5 MB, `sections/sec-3.html` 6.2 MB.
- `generated/` is 131 MB, `frozen/` 48 MB, `.git` 67 MB and grows with every full regeneration (build stamps change every file).
Multi-MB single pages are slow on mobile and in MathJax.

## Plan
1. One canonical page per content; replace duplicates with a small redirect page (`output.html` to `manual.html`).
2. Paginate by section (the `sections/` split exists; make the large pages thin indexes).
3. Put the build stamp in one file (`generated/BUILD.json`) instead of every page so unchanged pages stay byte-identical across regenerations.
All changes go through the SML generators.


---
Source: cross-repo audit 2026-11-24, full evidence in `set_theory_prover/docs/AUDIT_2026-11-24_CROSS_REPO_TOP_PROBLEMS.md (commit 4bf75ef)`.
Baseline: set_theory_prover@c4ed8b7, obeliskproofassistant.github.io@2beb2f5, foundations@2cbbc9c.

