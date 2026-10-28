# Ticket 193: Natural Deduction Proof Tree Typesetting via MathJax Inference Rules

**Project:** `obeliskproofassistant.github.io`  
**Category:** Typesetting & LaTeX Enhancements  
**Target Deliverable:** `tools/systematic_catalog_generator.py`, `proofs/*.html`  
**Importance:** 8/10  
**Status:** `[OPEN]`  
**Date:** 2026-10-28  

---

## 1. Description & Technical Rationale
Standard ML proof scripts (`val thm = prove (...)`) represent operational derivations, but mathematicians frequently prefer Gentzen-style sequent trees or Gentzen/Prawitz natural deduction inference figures (`\frac{A \quad B}{A \land B}`).

This ticket specifies the integration of natural deduction tree typesetting into verification pages using MathJax's `bussproofs` or AMS `\inferrule` syntax.

---

## 2. Technical Specification & Defense Invariants
1. **Derivation-to-Tree Transpiler:**
   - Map LCF inference tactics to 2D tree structures:
     - `AndR_tac` -> `\AxiomC{...} \AxiomC{...} \BinaryInfC{...}`
     - `ImplR_tac` -> `\AxiomC{...} \UnaryInfC{...}`
     - `ModusPonens_tac` -> `\AxiomC{A \to B} \AxiomC{A} \BinaryInfC{B}`
2. **MathJax Integration:**
   - Enable `bussproofs` extension in `window.MathJax` configuration.
   - Render horizontal inference bars with rule labels (`(\to I)`, `(\land E_R)`, `(MP)`).
3. **Responsive Display:**
   - Enclose proof trees in horizontally-scrollable containers (`overflow-x: auto`) with high-contrast font styling.

---

## 3. Acceptance Criteria
- [ ] MathJax `bussproofs` extension enabled in `MATHJAX_CONFIG_SNIPPET`.
- [ ] Sequent trees generated for Sections 1, 2, and 5 theorems.
- [ ] Visual verification confirms clean tree layout without line breaks or clipping.
- [ ] Fallback to raw text representation when JavaScript or MathJax is unavailable.

---

## 4. Execution Plan
- Implement tree generator function in `tools/systematic_catalog_generator.py`.
- Add test verifying LaTeX validity in `tests/test_proof_trees.py`.
- Deploy to `proofs/item-5-01.html`, `proofs/item-5-04.html`, and `proofs.html`.
