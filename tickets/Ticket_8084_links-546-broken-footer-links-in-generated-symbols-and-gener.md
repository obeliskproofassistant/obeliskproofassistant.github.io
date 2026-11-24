# Ticket 8084 — [Links] 546 broken footer links in generated/symbols and generated/proofs (symbol_pages.ML uses root footer) + 7 dead links in points_of_view.html

**Project:** obeliskproofassistant.github.io
**Importance:** 9/10
**State:** opened
**Labels:** audit-2026-11-24, P7, links, generator, priority:high

## Description
## Problem (confirmed by a local link scan of all non-frozen HTML)
1. `set_theory_prover/program/symbol_pages.ML` lines 2673, 2833, 2931 append `html_footer` (`make_html_footer ""`, html_generator.ML:3588) to pages written into subdirectories. They need `html_footer_sub` (`make_html_footer "../"`). Affected: 150 pages in `generated/symbols/` and 32 in `generated/proofs/` (16 `item-F.*`, 16 `Form*`); each has 3 dead links (`changelog.html`, `symbols.html`, `glossary.html`) = 546.
2. `points_of_view.html` (hand-maintained) links 7 pages that are not generated: `generated/proofs/{AxmGoedelCodingRoundtrip, DefFiniteOrdinalsOmega, DefIsFamily, DefIsFunction, DefKuratowskiOrderedPair, DefTransfiniteRecursionOperator, ThmDunaevOpairInjective}.html`. Either point them to existing anchors or make the generator emit those pages.
3. `BUGREPORT.html` (14) and other docs contain `file:///botworkspace/...` links; `docs/*.html` links `../program/...` and `../tests/...` which do not exist in the site repo.
4. `PROJECT.dev.md` names `tools/check_html_links.py` as the verification command; it does not exist. `tests/test_web_links_and_anchors.py` passes, so it does not cover subdirectory pages.

## Plan
Fix in the SML generator (never edit `generated/` directly), regenerate with `export_theory_db.ML`, add (or restore) `tools/check_html_links.py` that walks every HTML file except `frozen/`, and make it part of the test suite.

## Acceptance
Link scan reports 0 broken local links outside `frozen/` and `archive/`.


---
Source: cross-repo audit 2026-11-24, full evidence in `set_theory_prover/docs/AUDIT_2026-11-24_CROSS_REPO_TOP_PROBLEMS.md (commit 4bf75ef)`.
Baseline: set_theory_prover@c4ed8b7, obeliskproofassistant.github.io@2beb2f5, foundations@2cbbc9c.

