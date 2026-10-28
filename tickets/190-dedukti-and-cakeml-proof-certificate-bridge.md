# Ticket 190: Dual Dedukti and CakeML Proof Certificate Generation and Export

**Project:** `obeliskproofassistant.github.io`  
**Category:** Interoperability & External Soundness  
**Target Deliverable:** `tools/export_certificates.py`, `proofs/*.html`  
**Importance:** 9/10  
**Status:** `[OPEN]`  
**Date:** 2026-10-28  

---

## 1. Description & Technical Rationale
The Obelisk Proof Assistant adheres to User Directive #16: dual compatibility with CakeML (`v2000+`) and Poly/ML (`v5.8+`). While proofs are certified natively by the PolyML kernel, independent third-party verification is essential for high epistemic assurance.

This ticket specifies the generation of downloadable Dedukti (`.dk`) and CakeML-compatible Standard ML certificate files for each of the 49 catalog items. Verification subpages (`proofs/item-*.html`) will feature direct download buttons for `.dk` and `.sml` proof objects.

---

## 2. Technical Specification & Defense Invariants
1. **Dedukti Encoding of Morse–Kelley:**
   - Map `Class` to a Dedukti type `mk.class : Type`.
   - Map `isSet` and `in` to Dedukti constants `mk.in : mk.class -> mk.class -> Prop`.
   - Encode LCF proofs as lambda-terms in LF modulo rewrite rules.
2. **CakeML Verification Runner:**
   - Generate standalone SML files compilable under both CakeML and PolyML without non-ASCII bytes.
   - Embed cryptographic SHA-256 digests into certificate headers.
3. **Web Interface Integration:**
   - Add "Download Dedukti Certificate (.dk)" and "Download CakeML Proof (.sml)" buttons to `proofs/item-*.html`.

---

## 3. Acceptance Criteria
- [ ] Certificate exporter script `tools/export_certificates.py` implemented.
- [ ] Sample theorems (`5.01`, `5.04`) successfully export to valid Dedukti terms.
- [ ] Download buttons added to verification pages in `systematic_catalog_generator.py`.
- [ ] Verified under `cake --eval` and `poly -q`.

---

## 4. Execution Plan
- Implement Dedukti AST serializer in Python/SML.
- Integrate export pipeline into `build.sh` stage 1/2.
- Verify certificate integrity with automated checksum regression suite.
