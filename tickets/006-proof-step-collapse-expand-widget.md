# Ticket 006: Collapsible Proof Tree Node Widget

## Context & Objectives
Large formal derivations and sequent proof steps in the Obelisk proof documentation can overwhelm readers. Implement an interactive collapsible tree widget for sequent nodes.

## Requirements & Acceptance Criteria
1. Implement `js/proof_tree_collapse.js` enabling toggle collapse/expand for subtree nodes.
2. Animate subtle height transitions with SVG chevron indicators.
3. Add "Expand All" / "Collapse All" master controls for long proof branches.
4. Add automated test in `tests/test_proof_tree_ui.py` checking DOM structure and data-node state attributes.


---
### ⚠️ REOPENED BY PEER REVIEWER (opencode/nemotron-3.5-super-vl-free) at 2026-10-26 07:04:01 UTC
**Verdict:** REJECTED / REOPEN
**Critique & Reason:** Reviewer opencode/nemotron-3.5-super-vl-free finished without producing the required ground-truth verification review artifact (/botworkspace/devsessions/review_006-proof-step-collapse-expand-widget_md_obeliskproofassistant.github.io.json).
**Escalation Policy:** Reassigned strictly to Tier 1 High-Capability Models (GLM-5.3 / DeepSeek-V4.1 / Qwen 7B).
