# Removed documents and files

Removed from the website on 2026-11-24 (see `/botworkspace/workspace_config/CLARITY_PLAN_2026-11-24.md`).
Restore any of them with

    git -C /botworkspace/obeliskproofassistant.github.io log --diff-filter=D --format=%h -1 -- <path>
    git -C /botworkspace/obeliskproofassistant.github.io show <hash>^:<path>

| Path | Why |
|---|---|
| `TICKETS_SUMMARY.md`, `Obelisk Proof Assistant Updated Improvement Tickets.md` | ticket dumps; issues live in GitLab (project 6) |
| `instructions.txt`, `.cursorrules`, `question_from_another_ai_process/` | agent notes and rule copies; rules are in `/botworkspace/AGENTS.md` |
| `BUGREPORT.md`, `BUGREPORT.html` | October 2026 report of resolved items; unlinked |
| `canvas.html` | unrelated HTML5 canvas demo |
| `docs/axioms/`, `docs/audit/`, `docs/theorems/`, `docs/axioms_catalog.*`, `docs/DEMO_THEOREMS_COMPLETE_PROOFS.*` | unlinked hand-written copies of catalogue entries with hand-written "Verified" labels; the generated pages under `generated/` are the source |
| `docs/TERMINOLOGY_AND_SEMANTICS.*`, `docs/glossary.*` | copies of set_theory_prover documents; the glossary is published as `generated/glossary.html` |
| `docs/ORD_ON_STEP_BY_STEP_PROOF_AND_VERIFICATION.*` | hand-written verification status ("62/62") long out of date; the proof of Ord(On) is on its generated entry page |
| `docs/ARGON_ARCHITECTURAL_BLUEPRINT_AND_ROADMAP.*` | an AI-written internal roadmap, not documentation for readers |

## 2026-11-28: mirrored Markdown copies

`docs/ORDINAL_THEOREMS_PROOFS.md`, `docs/COMPILER_SEMANTICS_NON_COMPUTATIONAL.md` and
`docs/QUOTATION_AND_ANTIQUOTATION_IN_OBELISK.md` were hand-made copies of
`set_theory_prover/formal/ORDINAL_THEOREMS_PROOFS.md` and `set_theory_prover/docs/*.md` and had
drifted from them. The `.html` pages are now rendered straight from the sources by
`/botworkspace/tools/render_site_markdown.py`.
