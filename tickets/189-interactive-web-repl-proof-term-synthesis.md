# Ticket 189: Interactive Web REPL Proof Term Synthesis & Step-by-Step Tactic Replay

**Project:** `obeliskproofassistant.github.io`  
**Category:** Interactive REPL & Compiler Workbench  
**Target Deliverable:** `js/obelisk_repl.js`, `repl.html`  
**Importance:** 8/10  
**Status:** `[OPEN]`  
**Date:** 2026-10-28  

---

## 1. Description & Technical Rationale
`repl.html` provides an in-browser propositions-as-types compiler workbench for Morse–Kelley and NBG set theory. Currently, presets load full static programs that compile in a single batch step. Users cannot observe intermediate goal sequents or step-by-step goal decomposition as tactics execute.

This ticket specifies the addition of an interactive tactic step-by-step replayer in `repl.html`. When executing a multi-step proof (e.g. `thm_5_04` with 6 tactic steps: `ImplR_tac THEN AllR_tac THEN ExistsL_tac THEN ExistsR_tac THEN AllL_tac THEN Ident_tac`), users can step forward and backward through each intermediate sequent state (`Goal list * Validation`).

---

## 2. Technical Specification & Defense Invariants
1. **Goal Decomposition State Machine:**
   - Model the LCF goal state as a pair `(subgoals: Sequent list, history: Step list)`.
   - Implement `stepForward()` and `stepBackward()` controls in the REPL editor toolbar.
2. **Visual Sequent Inspector:**
   - Display active hypotheses `[h1, h2, ...]` above the turnstile `⊢` and current conclusion below it.
   - Highlight the focused variable or term modified by the active tactic.
3. **Soundness & TCB Invariant:**
   - All tactic steps must validate against the trusted kernel rules; stepping cannot bypass side condition checks.

---

## 3. Acceptance Criteria
- [ ] Tactic replay bar (`Prev Step`, `Next Step`, `Reset`, `Run All`) added to `repl.html`.
- [ ] Intermediate subgoals visualized after each tactic execution.
- [ ] Supports elementary theorem derivations (`5.01`, `5.04`).
- [ ] Regression tested with `test_repl_theorems.py`.

---

## 4. Execution Plan
- Implement step evaluator in `js/obelisk_engine.js`.
- Add UI playback controls in `repl.html`.
- Validate with unit tests in `tests/test_highlighter.py` and `tests/test_repl_theorems.py`.
