# Obelisk Proof Assistant: Updated Improvement Tickets

*Review of obeliskproofassistant.github.io, updated after the site changed (8 November 2026).*

## Scope and caveats

The main change is that `obelisk_ai.html` is now a full "Modern Portal" with a hero, a meta description, a "Recent Kernel & Manual Advances" section (dated 2026-10-30) and a comparison table. The manual also now has per-section pages (`sections/sec-1…5`), per-entry standalone pages, and GitHub-linked source lines.

Limits on what could be checked:

- The root URL still returned the old Classic 2-pane page when fetched, so it is unclear which page is canonical.
- The JS-rendered "Theorem & Rule Inspector" came through empty.
- From Section 4 only entries 4.01 and 4.02 were read. Section 5 and the NBG library were not opened.

## Status of the earlier tickets

| Old ticket | Status | What changed |
| --- | --- | --- |
| T1 MK vs NBG | Partly done | The new page says MK with impredicative comprehension. "NBG" naming and "relative to MK/NBG consistency" remain. |
| T2 Soundness note | Open | Now also covers the "no cheat path" fixes. |
| T3 Axiom minimality | Open | Reworked; a 7-axiom count is now claimed. |
| T4 Propositional completeness | Open | Unchanged. |
| T5 Duplicate AST refs | Open, extended | 4.02 also uses `PForaR_prf`. |
| T6 Notation and binders | Open, extended | `Set` / `isSet` / `set` still differ; `⟦⟧`, `let…in`, `⟨⟩` and `μA` are new. |
| W1 Newcomer entry | Done on new page | Remaining work listed below. |
| W2 Nav clutter | Worse | See W2. |
| W3 Manual density | Partly done | Section pages exist; each page is still very heavy. |
| W4 Search | Open | Unchanged. |
| W5 Provenance | Partly done | Source lines link to GitHub, but to `main`, not a pinned commit. |
| W6 Dependency view | Open | Dedicated pages exist; per-theorem dependency lists unverified. |
| W7 Table wording | Done on new page | The Classic page still has the misleading column. |
| W8 Quality gates | Open | The site claims 36 web tests; no link or accessibility checks are mentioned. |

## Mathematical theory

### T1. Finish the MK/NBG story (revised)

**Problem:** The new page says MK, but the compiler is `NBGCompiler`, the library is "NBG", and the table still says "relative to MK/NBG consistency". The `ℰ` metatheory is chosen "from {IΣ1, 𝒯, NBG, MK}", which includes the object theory itself.

**Acceptance:** One page states the object theory (MK + Tarski universes) and what NBG refers to (a fragment? a sub-library?). It also states which theory the consistency claim is relative to, and how Variant 1 (MKTD1), Variant 2 (MKTD2) and the web compiler relate.

### T2. Soundness and trusted-base document (revised)

**Problem:** The "No Cheat Path" changes (`PCheat_prf` rejected, `PS1_prf` / `PHenkin_prf` failing, a closedness gate) are only described as news items.

**Acceptance:** A "Trusted base" page lists what the kernel trusts (checker, axioms, the CakeML step if claimed). It includes the soundness argument and a regression test for each rejected constructor. Verify `PHenkin_prf` against the Henkin-complete ℱ in T9.

### T3. Axiom accounting (revised)

**Problem:** The catalog audit says "7 irreducible MK axioms", but the Variant 1 manual alone postulates A01–A13, 2.01, 3.08, 4.01 and 4.02 (and more). The numbers don't obviously agree.

**Acceptance:** One table lists every postulated item by variant, marked independent, derivable or convenience, with reconciled totals. State whether equality is primitive: 3.08 is postulated, but the symbol index calls `=` "extensional equality".

### T4. Propositional completeness for A01–A13 + MP (unchanged)

**Problem:** The system is classical (A12 is excluded middle). It should say whether it is complete for classical propositional tautologies, and A09/A10/A11 should be checked for redundancy.

**Acceptance:** A one-page statement of completeness (with proof or reference). Derived rules such as (α→⊥)→¬α are shown as theorems.

### T5. Fix duplicate kernel-AST references (extended)

**Problem:** 2.04, 2.06 and now 4.02 (Generalisation, meta) all cite `PForaR_prf`. 3.07 and 3.06 share `PSubDef_prf`.

**Acceptance:** Each entry has its own proof term, or a note explains intentional sharing. A CI check flags duplicates.

### T6. Notation and binder semantics (extended)

**Problem:** Sethood is written `Set(X)`, `isSet(X)` and `X set`. FFI, NFV and IFV, the `⦃x⦄` brackets, `let … in` and the `⟨…⟩` quotation have no definitions in the manual.

**Acceptance:** The symbol index defines each with an example. One canonical sethood notation is chosen.

### T7 (new). Resolve the "WIP" axioms in the kernel

**Problem:** 4.01 "Instantiation(meta,WIP)" and 4.02 "Generalisation(meta,WIP)" are classified as postulated kernel axioms.

**Acceptance:** Each is derived, or explicitly excluded from the trusted base, or has a written justification and a removal plan. The manual should not present WIP items as final axioms.

### T8 (new). "Zero implicit computation" vs δ-equivalence

**Problem:** The page contrasts itself with βδι-reduction systems, but the table says `typeCheck` checks definitional α/β/δ equivalence.

**Acceptance:** Define precisely what the checker normalizes and what it does not. Reword the claim, or remove the δ/β step from the checker.

### T9 (new). The 4-theory hierarchy (𝒲, ℰ, 𝒯, ℱ) and Section 5

**Problem:** ℱ is a "non-r.e." sound extension, with Co-Necessitation (4.03) justified by Soundness (3.73). Löb and Gödel II (Section 5) normally require an r.e. theory and the HBL conditions.

**Acceptance:** For each statement in 5.01–5.02, state the exact hypotheses, which theory it applies to, and which HBL condition is used where. Verify against the Lean audit mentioned in the meta description.

### T10 (new). Claims on Dunaev pairs

**Problem:** "Minimal rank growth" and "full projection injectivity" are advertised. Only injectivity is listed as proved.

**Acceptance:** Rank bounds are stated as theorems with links, or the claim is softened.

## Web presentation

### W1. Newcomer entry point (revised)

**Done:** The hero, meta description and title are on `obelisk_ai.html`.

**Remaining:** Make that page the canonical root (the root URL fetched still served Classic). On the Classic page, footer links are still the bare text `about.html` and `embedding.html`. The "Live Demo" section on the new page is also just the bare text `embedding.html`.

### W2. Navigation clutter (revised, worse)

**Problem:** The new header has about nine links, followed by section cards and three repeated variant/manual link blocks. The manual link appears roughly six times. Classic, Modern, Frozen and a deprecated archive coexist.

**Acceptance:** One header (Learn / Browse / Try / Archive), no duplicated link blocks, a single canonical landing page, and redirects from superseded pages.

### W3. Make the manual readable (revised)

**Done:** The manual is now split into section pages.

**Remaining:** Each entry still shows three renderings of the formula, the scheme of types and the judgements, and every symbol has a hover tooltip and link. Collapse all but Unicode by default, lazy-render long sections, and add a sticky TOC. Check that the relative `../symbols/…` hrefs in the LaTeX resolve from `sections/*.html`.

### W4. Search and filters over the DB (unchanged)

**Problem:** `theory_db.json` exists but is not used for discovery.

**Acceptance:** Client-side search by name, number, symbol or formula text, with filters for Axiom / Definition / Theorem / Rule and verification status.

### W5. Provenance (revised)

**Done:** Source lines link to GitHub, and the footer shows a re-verification date.

**Remaining:** Pin links to a commit instead of `main`, show the commit hash on each generated page, and add a verification-status legend.

### W6. Dependency view (revised)

**Acceptance:** Each theorem page lists its axioms, definitions and lemmas, and its reverse dependencies, generated from the kernel AST. Verify whether the new Dependent Types and Metatheory pages already do this.

### W7. Terminology in the formula/theorem table (revised)

**Done:** The new page's "Epistemic Meaning" column is clear.

**Remaining:** The Classic page still has the column "Can a False MK Statement Pass?", which is confusing.

### W8. Quality gates (extended)

**Acceptance:** A CI link checker covering `symbols/`, `proofs/` and `sections/`. Accessibility and mobile checks, and print CSS. Confirm the inspector works without JavaScript or has a readable fallback.

### W9 (new). One source of truth for numbers

**Problem:** The pages give inconsistent counts: "69 core / 90 higher-order / 30 NBG" theorems, "100 NBG records", "77 derived + 16 definitions + 7 axioms", "(1.01–5.02)" and "3.01–3.78".

**Acceptance:** All counts are generated from `theory_db.json` at build time, with the breakdown labelled by variant.

### W10 (new). Fact-check the comparison table and trust claims

**Problem:** Isabelle/ZF is listed as "ZFC over Higher-Order Logic"; as far as I know it is built on Isabelle/FOL, so this needs checking. The kernel size (\~20k LOC), "verified down to silicon" via CakeML, and "Audited and verified in Lean 4" (meta description) have no linked evidence on the page.

**Acceptance:** Each claim gets a source or a repo link (LOC counts, CakeML pipeline status, the Lean audit). The table notes the date and basis.

### W11 (new). Release-note hygiene

**Problem:** "Latest Verified Changes · 2026-10-30" and the "115 tests / 36 tests" footer are hand-written.

**Acceptance:** Generate these from CI output with a changelog link, so stale dates and counts cannot drift.
