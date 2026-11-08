# Changelog — Obelisk Proof Assistant & Entity Database

All notable changes to the formal kernel, entity database, proof compilers, and presentation catalogs of the Obelisk Proof Assistant (`MKTD1` and `MKTD2`) are documented in this file.

---

## [1.3.0] — 2026-11-08

### Changed & Refined
- **T1: Tarski/Löb Risk Resolution in Soundness Axioms:**
  - Resolved Tarski undefinability and Gödel-Löb self-referential reflection risk by restricting soundness exclusively to the non-r.e. Henkin completion $\mathcal{F}$ (`AxmSoundnessOfFullTheory` 3.72: $(\mathcal{F}, [] \vdash \varphi) \rightarrow \mathrm{eval}(\varphi)$).
  - Omitted the base theory $\mathcal{T}$ soundness axiom from the active theory sequence to prevent inconsistent reflection ($(\mathcal{T} \vdash \varphi) \rightarrow \varphi$) in an r.e. theory.
  - Documented the stratification: evaluation operator $\mathrm{eval}$ lives in the $+1$ metalogic on the base formula sublanguage $\mathrm{Fm}_0$ without self-referential truth predicate internalization, escaping Tarski's undefinability obstruction.
- **T2: Decoupled Semantic Completeness & Negation-Completeness:**
  - Split entry 3.74 into two distinct axiomatic entries:
    - `AxmSemanticCompletenessOfFullTheory` (3.73): $\forall \varphi:\mathrm{Fm}.\; \mathrm{eval}(\varphi) \rightarrow (\mathcal{F}, [] \vdash \varphi)$, establishing together with Soundness that $(\mathcal{F}, [] \vdash \varphi) \leftrightarrow \mathrm{eval}(\varphi)$ (so $\mathcal{F}$ coincides with $\mathrm{Th}(\mathcal{M})$).
    - `AxmNegationCompletenessOfFullTheory` (3.74): $\forall \varphi:\mathrm{Fm}.\; \neg(\mathcal{F}, [] \vdash \neg\varphi) \rightarrow (\mathcal{F}, [] \vdash \varphi)$, formalizing syntactic negation-completeness $(\mathcal{F} \vdash \varphi) \lor (\mathcal{F} \vdash \neg\varphi)$.
  - Corrected entry classifications from `Definition` (`YDef`) to `Axiom` (`YAxm`), and verification tags to `Postulated (Kernel Axiom)`.
  - Documented the semantic link: in the bivalent background model $\mathcal{M}$ ($\mathrm{eval}(\varphi) \lor \mathrm{eval}(\neg\varphi)$), negation-completeness is logically entailed by semantic completeness and soundness.

---

## [1.2.0] — 2026-11-08

### Added
- **Build Provenance in Every Footer (W6):** Every generated page footer now renders the build commit hash (`918ea9f`), timestamp (`2026-11-08 20:10:00 UTC`), generator script provenance, and links to source lines and changelog.
- **Source Line Linking (W6):** Every kernel entry in `manual.html`, `output.html`, `variant1.html`, and `proofs/*.html` links directly to its source definition line in `set_theory_prover/program/types/entries.ML`.
- **Worked Proof-Term Examples (T7):**
  - Expanded Step-by-Step Walkthrough with exact typing rules for each constructor (`ELam`, `EFn`, `ECompr`, `EFst`, `EApp`, `ESnd`).
  - Added Worked Example 2: Intersection Left Inclusion `thm_inter_subset_left : ∀(A:Class) ∀(B:Class) ∀(x:Class) ((x ∈ (A ∩ B)) → x ∈ A)` without falsum ($\bot$).
- **Disambiguation Matrix & Context Definitions (T6):**
  - Added rigorous definitions of Signature Context $\Delta$ and Proof Hypothesis Context $\Gamma$ at first use.
  - Added notation disambiguation matrix distinguishing `⟦ ⟧` (antiquotation vs model evaluation), `[ ]` (relational image vs Dunaev class-lists vs premise lists), and `Set(X)` vs `isSet(X)`.
  - Added Glossary entries for **Dunaev Pair** (`(A, B)_D`) and **Dunaev Class-List** in `docs/glossary.md` and `NOTATION.txt`.
- **Decoupled Manual Components:**
  - `generated/manual_top.html`: Standalone header, formula toggles, and TOC component.
  - `generated/manual_the_rest.html`: Standalone body sections 1–5 without duplicate header.
  - `#DefIsProperClass` direct URL targeting inside embedded portal.

### Fixed
- **LaTeX Math Mode `#` Macro Parameter Error:** Removed TeX `\color{#...}` commands from math mode; styled hyperlinked tokens natively via CSS `.formula-latex a, mjx-container a { color: #60a5fa !important; }`.
- **Portal Embedding Recursion:** Replaced recursive "Back to Obelisk Portal" nesting in embedded iframes with smart parent-aware toolbar navigation.

---

## [1.1.0] — 2026-10-24

### Added
- **Dunaev Tagged Ordered Pairs (Section 3, 3.76–3.78):**
  - `DefDunaevOrderedPair` (3.76): Ordered pair for arbitrary classes $(A, B)_D = (\operatorname{mark}(A, 1) \cup \operatorname{mark}(B, 2))$.
  - `ThmDunaevFirstProjection` (3.77): First projection $\pi_1((A, B)_D) = A$.
  - `ThmDunaevSecondProjection` (3.78): Second projection $\pi_2((A, B)_D) = B$.
- **Dunaev Class-Lists (Section 3, 3.39):**
  - `DefClassLists` (3.39): Inductive sequence representation for classes using iterated tagged pairs.
- **Variant 2 (MKTD2 Formulas-as-Types):**
  - 100 mechanically type-checked constructive lambda-term records: 77 Derived Theorems + 16 Conservative Definitions + 7 Irreducible MK/NBG Axioms in `generated/nbg_library.html` and `generated/variant2.html`.

### Renumbered
- Renumbered entries 3.76–3.78 to append Dunaev tagged ordered pairs cleanly after Tarski-Grothendieck Universes (3.66) and Metatheoretic Reflection (3.72–3.75).
- Shifted Metalogical Laws (Section 4) to 4.01–4.06 and Incompleteness Statements (Section 5) to 5.01–5.02.

---

## [1.0.0] — 2026-09-15

### Initial Release
- **Section 1: Propositional Logic (1.01–1.14):** Axioms A01–A13 and Modus Ponens.
- **Section 2: Predicate Logic (2.01–2.06):** Specialisation, Distribution, Existential/Universal Abstraction, and Generalisation.
- **Section 3: Set/Class Foundations (3.01–3.75):** Extensionality, Impredicative Class Comprehension, Sethood, Subclass, Heredity, Exponents, Regularity, Limitation of Size, Ordinals, Cardinals, and Tarski Universes.
- **Section 4: Metalogical Reflection (4.01–4.06):** Instantiation, Generalisation, Conecessitation, Uniqueness Binders, Meta-Class Comprehension.
- **Section 5: Incompleteness (5.01–5.02):** Löb's Theorem (`ThmLoeb`) and Gödel's Second Incompleteness Theorem (`ThmSecondIncompleteness`).
