# Ticket 007: Web REPL Keyboard Shortcuts Cheat Sheet Modal

## Context & Objectives
Users interacting with the Obelisk Web REPL (`repl.html`) benefit from a quick modal displaying available keyboard shortcuts (e.g. `Ctrl+Enter` to evaluate, `Ctrl+L` to clear, `Alt+Up/Down` for history).

## Requirements & Acceptance Criteria
1. Implement `js/shortcuts_modal.js` triggered by clicking a "⌨️ Shortcuts" button or pressing `?`.
2. Responsive dialog with accessible focus trapping and `Escape` key close listener.
3. Clean styling matching `--bg-card` and purple proof assistant theme.
4. Add automated test in `tests/test_shortcuts_modal.py` validating modal markup and accessibility attributes.


---
### ⚠️ REOPENED BY PEER REVIEWER (opencode/beam-free) at 2026-10-26 07:05:18 UTC
**Verdict:** REJECTED / REOPEN
**Critique & Reason:** Reviewer opencode/beam-free finished without producing the required ground-truth verification review artifact (/botworkspace/devsessions/review_007-keyboard-shortcuts-cheat-sheet_md_obeliskproofassistant.github.io.json).
**Escalation Policy:** Reassigned strictly to Tier 1 High-Capability Models (GLM-5.3 / DeepSeek-V4.1 / Qwen 7B).
