# Ticket 194: Dual Translation Layer between Morse–Kelley Class Logic and NBG First-Order Proofs

**Project:** `obeliskproofassistant.github.io`  
**Category:** Mathematical Metatheory & Compilers  
**Target Deliverable:** `tools/mk_nbg_transpiler.py`, `manual.html`, `proofs.html`  
**Importance:** 8/10  
**Status:** `[OPEN]`  
**Date:** 2026-10-28  

---

## 1. Description & Technical Rationale
The user established two foundational interpretations:
1. **Meaning in Model inside NBG:** Pure set/class universe where quantification is over sets $\forall (x \in V)$ or classes $\forall X$, where $\mathrm{isSet}(x)$ holds, strictly prohibiting pseudo-membership statements like $x \in \mathrm{Class}$ or $\phi \in \mathrm{Theory}$.
2. **Checkable or Executable Code in CakeML and Poly/ML:** Standard ML AST expressions (`Class_Expre`, `Fm_Expre`, `Theory_Expre`) where side conditions are executable boolean functions.

This ticket specifies the automated dual translation bridge that translates Morse–Kelley class proofs into first-order NBG theorems when formulas are predicative, and conversely identifies strictly impredicative MK steps that require second-order comprehension.

---

## 2. Technical Specification & Defense Invariants
1. **Predicativity Checker:**
   - Scan comprehension formulas $\phi$ in class terms $\{x \mid \phi\}$.
   - If $\phi$ contains no bound class variables (only set variables $x, y \in V$), tag the formula as `NBG_Predicative`.
   - If $\phi$ contains bound class quantifiers $\forall X$ or $\exists X$, tag as `MK_Impredicative_Stage2`.
2. **First-Order Elimination:**
   - For predicative formulas, transpile the proof into a sequence of NBG elementary set algebra operations using the 7 Gödel class operations.
3. **Web Dual Presentation:**
   - The "Interpretation" toggle button (`🌐 NBG Model` vs. `⚡ Executable SML`) displays the corresponding translation in all proof cards and verification pages.

---

## 3. Acceptance Criteria
- [ ] Transpiler algorithm implemented in `tools/mk_nbg_transpiler.py`.
- [ ] Distinguishes between predicative NBG steps and impredicative MK steps.
- [ ] Validated on Russell's theorem (`3.08`) and Ordinal induction (`3.32`).
- [ ] Integrated into `theory_database.json` and web output generators.

---

## 4. Execution Plan
- Implement AST classifier in `tools/mk_nbg_transpiler.py`.
- Add test coverage in `tests/test_true_vs_false_mk.py`.
- Reflect the dual proof steps in `proofs.html` and `proofs/item-*.html`.
