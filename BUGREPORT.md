# Obelisk Proof Assistant & Workspace Bug Report

**Date:** 2026-10-28  
**Auditor:** Antigravity AI Pair Programmer  
**Target Projects:** `set_theory_prover`, `obeliskproofassistant.github.io`, `mybot`  
**Compliance Standards:** Morse–Kelley Class Theory, Zero-Downtime Blue/Green Architecture, Rule 5 (Zero Secrets), Rule 6 (Atomic Stage-and-Swap).

---

## Executive Summary

During systematic auditing of the Standard ML proof checker codebase, theory catalog generators, and web dashboard interfaces, several critical issues were identified and addressed. All verified bugs have been resolved, and deeper foundational architectural questions have been formally escalated to the user via the GitLab Dashboard interactive interface (`http://127.0.0.1:8929/questions`).

---

## 1. Resolved Bugs & Obvious Mistakes

### BUG-001: MathJax 3 LaTeX Syntax Error on Semantic Brackets (`\llbracket`, `\rrbracket`, `\rrbracket`)
- **Severity:** High (Visual / Documentation Integrity)
- **Subprojects:** `obeliskproofassistant.github.io`, `set_theory_prover`
- **Location:** `manual.html`, `metatheory.html`, `output.html`, and generated PDFs.
- **Symptom:** Semantic brackets around conditional definitions and denotations rendered as red slashes with raw command strings (`\llbracket \text{if} \dots \rrbracket`).
- **Root Cause:** MathJax 3 does not include the legacy LaTeX `stmaryrd` package by default. Furthermore, template strings contained occasional typos (`\rrbracket`).
- **Fix Applied:**
  1. Updated [`tools/systematic_catalog_generator.py`](file:///botworkspace/tools/systematic_catalog_generator.py) to configure MathJax with explicit Unicode math macros:
     ```javascript
     tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']],
       displayMath: [['$$', '$$'], ['\\[', '\\]']],
       macros: {
         llbracket: ["\\unicode{x27E6}"],
         rrbracket: ["\\unicode{x27E7}"],
         rrbracket: ["\\unicode{x27E7}"],
         lsemantic: ["\\unicode{x27E6}"],
         rsemantic: ["\\unicode{x27E7}"]
       }
     }
     ```
  2. Injected CSS fallback for font rendering:
     ```css
     .mjx-c27E6, .mjx-c27E7 {
       font-family: 'STIX Two Math', 'Cambria Math', 'DejaVu Sans', serif !important;
     }
     ```
  3. Recompiled all catalog HTML and PDF artifacts via `systematic_catalog_generator.py`.
- **Status:** **RESOLVED & VERIFIED**.

---

### BUG-002: Coupling of Conditional Expressions to Antiquotation Subsystem
- **Severity:** High (Mathematical & Language Architecture)
- **Subprojects:** `set_theory_prover`
- **Location:** `program/types/typetheory.ML:1360`, `program/newchecker.ML:1805`, `program/types/foundations.ML:3836`.
- **Symptom:** `(if _ then _ else _)` was modeled as a class antiquotation `EInject (HC (CpIf ...))` rather than a first-class syntactic constructor of terms parameterized by expressions (`'a_expression`).
- **Root Cause:** In the legacy ML grammar, `CpIf` was bound within `Class_p` (class anti-quotation) instead of being a generic constructor of `'a_expression`.
- **Fix Applied:**
  1. Added first-class constructor `| EIf of (Truth_Expre   sion * 'a_expre   sion * 'a_expre   sion)` to `'a_expre   sion` in [`program/types/typetheory.ML`](file:///botworkspace/set_theory_prover/program/types/typetheory.ML#L1360).
  2. Implemented pretty-printer arm in [`program/newchecker.ML`](file:///botworkspace/set_theory_prover/program/newchecker.ML#L1805):
     ```sml
     | sion_toString (EIf (p, t1, t2)) =
         "⟦IF " ^ (Truth_Expression_toString p) ^ " THEN " ^ (sion_toString t1) ^ " ELSE " ^ (sion_toString t2) ^ " FI⟧"
     ```
  3. Extended freeness checks (`sion_isFree`, `Class_Expression_isFree`) and capture-avoiding substitution traversals (`sion_simSubst`, `Class_Expression_simSubst`, `Truth_Expression_simSubst`).
  4. Updated `class_if_then_else_def_entry_fm` in [`program/types/foundations.ML`](file:///botworkspace/set_theory_prover/program/types/foundations.ML#L3836) to directly produce `EIf`.
  5. Verified against test suite in [`tests/test_curated_tickets.py`](file:///botworkspace/set_theory_prover/tests/test_curated_tickets.py).
- **Status:** **RESOLVED & VERIFIED**.

---

### BUG-003: `value_def_entry_fm` in `foundations.ML` Used Deprecated `CpIf`
- **Severity:** Medium (Consistency & PolyML Kernel Soundness)
- **Subprojects:** `set_theory_prover`
- **Location:** [`program/types/foundations.ML:3951`](file:///botworkspace/set_theory_prover/program/types/foundations.ML#L3948-L3955).
- **Symptom:** While `class_if_then_else_def_entry_fm` was refactored to `EIf`, `value_def_entry_fm` was still generating `EInject (HC (CpIf (con, valu, constV)))`.
- **Root Cause:** Overlooked during initial refactoring pass.
- **Fix Applied:** Refactored line 3951 to:
  ```sml
  (* Upgraded to first-class decoupled 'a_expression constructor EIf *)
  val kon = EIf (con, valu, constV);
  ```
  Verified via PolyML kernel evaluation without type or evaluation errors.
- **Status:** **RESOLVED & VERIFIED**.

---

### BUG-004: Dashboard Sentinel Button Non-Compliance with Design Spec
- **Severity:** Medium (UI/UX Branding & Workflow Consistency)
- **Subprojects:** `mybot`
- **Location:** [`mybot/local-gitlab/server.py:6018`](file:///botworkspace/mybot/local-gitlab/server.py#L6018) and `/dashboard`.
- **Symptom:** The Sentinel release button on the GitLab dashboard was rendered as a generic HTML text button ("RELEASE ALL SENTIENTS") instead of adhering to the visual graphic specification in `/botworkspace/design/SENTINEL_SPEC.md`.
- **Root Cause:** Initial placeholder implementation failed to link the dedicated graphical asset `/preview/design/assets/sentinels/release_the_sentinels_button.jpg`.
- **Fix Applied:**
  1. Replaced the generic HTML button with the unified single-picture button element:
     ```html
     <button class="sentinel-release-btn" onclick="releaseSentinels()" title="Awaken Autonomous Sentinels">
       <img src="/preview/design/assets/sentinels/release_the_sentinels_button.jpg" alt="Release The Sentinels" class="sentinel-button-img">
     </button>
     ```
  2. Applied custom responsive CSS with red glowing box shadow and smooth scale animations.
  3. Deployed via zero-downtime Blue/Green orchestrator (`python3 /botworkspace/mybot/local-gitlab/deploy_blue_green.py`).
- **Status:** **RESOLVED & VERIFIED**.

---

### BUG-005: 404 Route Error for `/api/planner/release-sentinels`
- **Severity:** Medium (API Integrity)
- **Subprojects:** `mybot`
- **Location:** [`mybot/local-gitlab/server.py:2764`](file:///botworkspace/mybot/local-gitlab/server.py#L2764).
- **Symptom:** Invoking `/api/planner/release-sentinels` returned HTTP 404 because the legacy endpoint was misspelled as `/api/planner/release-sentients`.
- **Root Cause:** Naming discrepancy between the UI trigger script and the backend HTTP handler.
- **Fix Applied:** Registered `/api/planner/release-sentinels` as an official first-class endpoint alias in `server.py` handling both GET and POST requests.
- **Status:** **RESOLVED & VERIFIED**.

---

## 2. Problematic Areas Identified & Formally Escalated

Per user instructions, deeper mathematical, architectural, and web inconsistencies have been structured into interactive multiple-choice questions on the GitLab Dashboard (`http://127.0.0.1:8929/questions`):

### Problem 1: Ordinal Induction ($\in$-Ind) Formulation (Question #19)
- **Location:** [`manual.html#3.32`](file:///botworkspace/obeliskproofassistant.github.io/manual.html#3.32) and [`program/newchecker.ML:9248`](file:///botworkspace/set_theory_prover/program/newchecker.ML#L9248).
- **Issue:** Ordinal induction is currently presented as an Axiom Schema (`PEpsIndAx_prf`). However, in Morse-Kelley class theory, the class of ordinals $On$ is a class object, not a syntactic type. Formulas with variables are standard formulas, whereas theorem schemata strictly imply witness proof programs. Since $\in$ is well-founded on sets by Foundation/Regularity, $\in$-induction can and should be formally derived as a theorem schema.
- **Escalated Question:** [Question #19 on Dashboard](http://127.0.0.1:8929/questions) (Recommended Option A: Formal derivation of Theorem Schema).

### Problem 2: Proper Classes & Pairing Soundness (Question #20)
- **Location:** [`program/newchecker.ML:5040`](file:///botworkspace/set_theory_prover/program/newchecker.ML#L5040).
- **Issue:** In Morse-Kelley class theory, proper classes cannot be elements of sets. Standard Kuratowski pairs $(a, b) = \{\{a\}, \{a, b\}\}$ fail when $a$ or $b$ are proper classes. Dunaev Tagged Ordered Pairs $(A, B)_D = (\{0\} \times A) \cup (\{1\} \times B)$ resolve this limitation. `CpOPair` in `newchecker.ML` does not currently delineate set-level Kuratowski pairs from class-level Dunaev pairs.
- **Escalated Question:** [Question #20 on Dashboard](http://127.0.0.1:8929/questions) (Recommended Option A: Delineate into `SetOPair` and `ClassOPair`).

### Problem 3: Incompleteness Section 6 Proof Derivation Gaps (Question #21)
- **Location:** [`program/newchecker.ML:12400`](file:///botworkspace/set_theory_prover/program/newchecker.ML#L12400).
- **Issue:** Section 6 (Löb's theorem 6.02, Gödel's second incompleteness theorem 6.03) contains the explicit comment: `"(WIP: too much known errors in this section)"` and lacks full witness proof derivations.
- **Escalated Question:** [Question #21 on Dashboard](http://127.0.0.1:8929/questions) (Recommended Option A: Isolate into `program/incompleteness.ML`).

### Problem 4: Web REPL Client-Side Lag vs Live PolyML Kernel (Question #22)
- **Location:** [`obeliskproofassistant.github.io/repl.html`](file:///botworkspace/obeliskproofassistant.github.io/repl.html) and [`js/obelisk_engine.js`](file:///botworkspace/obeliskproofassistant.github.io/js/obelisk_engine.js).
- **Issue:** The client-side JavaScript emulator lacks recent AST additions (such as `EIf`) and cannot evaluate multi-approach tactics available in PolyML. The local GitLab backend already hosts `/api/obelisk/compile`.
- **Escalated Question:** [Question #22 on Dashboard](http://127.0.0.1:8929/questions) (Recommended Option A: Hybrid architecture with live PolyML backend and offline fallback).

---

## 3. Active Daemon & System Supervision Verification

All required background supervisors and services have been verified active and operational:
1. **Local GitLab Reverse Proxy Router:** PID 51 (Port 8929, 0 downtime active).
2. **Local GitLab Blue/Green Backends:** PID 6030 (Port 8931) & PID 6073 (Port 8932).
3. **Autonomous Ticket Planner:** PID 6125 (Continuous free model orchestration with provider pacing).
4. **Autonomous Activity Watchdog:** PID 9680 (5-minute heartbeat monitor & self-healing).
5. **Autonomous Failover Supervisor:** PID 9681 (Standby supervisor with syntax auditing).
