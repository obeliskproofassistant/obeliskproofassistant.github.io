# Ticket 191: Interactive Visual Proof Dependency DAG and Lemma Inheritance Visualizer

**Project:** `obeliskproofassistant.github.io`  
**Category:** Visualization & Graph Theory  
**Target Deliverable:** `proofs.html`, `js/obelisk_dag.js`  
**Importance:** 7/10  
**Status:** `[OPEN]`  
**Date:** 2026-10-28  

---

## 1. Description & Technical Rationale
The Obelisk catalog contains intricate dependencies: Propositional axioms (Section 1) and Quantifier rules (Section 2) ground the Class theory axioms (Section 3), which in turn justify Elementary theorems (Section 5) and Ordinal induction (3.32).

This ticket specifies the addition of an interactive SVG/Canvas directed acyclic graph (DAG) viewer in `proofs.html`. The DAG allows users to select any theorem (e.g. `thm-ord-ind`) and visually trace its ancestor prerequisites down to primitive axioms.

---

## 2. Technical Specification & Defense Invariants
1. **Graph Model:**
   - Nodes represent catalog items `item-X-YY`.
   - Edges represent prerequisite justifications (`e1 -> e2` where `e1` is used to justify `e2`).
   - Color coded by classification: Axioms (Purple), Theorems (Green), Inference Rules (Gold), Definitions (Blue).
2. **Interactive Capabilities:**
   - Pan and zoom with mouse wheel and drag gestures.
   - Click node to highlight its transitive dependency cone.
   - Tooltip displaying formula, number, and verification status.
3. **Performance:**
   - Lightweight pure SVG/Canvas implementation under 20KB without heavy external graph libraries.

---

## 3. Acceptance Criteria
- [ ] Dependency JSON exported by `build_theory_database.py`.
- [ ] Interactive DAG viewer embedded as a toggleable view in `proofs.html`.
- [ ] Verified rendering without performance degradation on mobile viewports.
- [ ] Zero unescaped circular dependencies detected in the DAG.

---

## 4. Execution Plan
- Extract explicit dependency relations from SML proof programs in `theory_database.json`.
- Implement topological layout generator in `js/obelisk_dag.js`.
- Add tab switcher ("Card View" vs. "Dependency Graph") in `proofs.html`.
