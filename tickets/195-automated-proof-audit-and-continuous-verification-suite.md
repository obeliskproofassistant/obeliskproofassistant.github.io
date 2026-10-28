# Ticket 195: Master Proof Audit & Continuous Verification Regression Runner

**Project:** `obeliskproofassistant.github.io`  
**Category:** Quality Assurance & Continuous Integration  
**Target Deliverable:** `tests/test_proof_regression.py`, `build.sh`  
**Importance:** 10/10  
**Status:** `[COMPLETED]`  
**Date:** 2026-10-28  

---

## 1. Description & Technical Rationale
User Directive #3 mandates: "If something is written as 'Verified', then 'Verified' should be clickable and lead to a page that is generated automatically for each theorem from database, where a proof term is displayed, or a program that produces it and checker indeed confirms that it proves the statement. Do not use 'verified' lightly, always make it clickable and explanation of what was verified and how, and with which method must be displayed there."

This ticket establishes a continuous regression test suite verifying that every claim of "Verified (Kernel)" across `manual.html`, `proofs.html`, and `proofs/item-*.html` is backed by an executable PolyML proof program without cheating axioms (`PCheat_prf`), and that all status badges correctly link to their respective certificate pages.

---

## 2. Technical Specification & Defense Invariants
1. **Verification Soundness Gate:**
   - Scan `data/theory_database.json` and ensure every entry marked with status `"Verified"` has a valid non-empty `code` or `program` in verification metadata.
   - Assert that no theorem uses unchecked axioms or invalid variable bindings.
2. **HTML Anchor and Link Soundness:**
   - Verify that every status badge `<a class="status-badge ...">` in `manual.html` and `proofs.html` links to an existing, non-empty HTML file in `proofs/`.
   - Verify that all back-links to `manual.html#X.YY` point to valid IDs.
3. **Integration into Build Pipeline:**
   - Integrated into `build.sh` stage 4 and stage 5.

---

## 3. Acceptance Criteria
- [x] Test suite `tests/test_proof_regression.py` implemented.
- [x] All 49 verification badges confirmed to link to valid existing certificate subpages.
- [x] Zero cheating axioms (`PCheat_prf`) used in verified theorems.
- [x] Build script Stage 4 & 5 executes regression checks on every compile.

---

## 4. Execution Log
- **Implementation:** Added automated verification suite in `tests/test_proof_regression.py` and integrated into `build.sh`.
- **Verification Result:** PASS (All 49 entries validated, 100% link soundness).
- **Commit Date:** 2026-10-28
- **Resolved By:** Gemini 3.8 Flash & Georgy Dunaev
