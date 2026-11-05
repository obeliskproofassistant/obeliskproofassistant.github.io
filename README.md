# Obelisk Proof Assistant Web Portal (`obeliskproofassistant.github.io`)

## Mandatory Step 0 for AI Agents (Read Before Any Task)

Before modifying any file or generator for `obeliskproofassistant.github.io` or `set_theory_prover`, **always visit `/botworkspace/` and specifically `/botworkspace/catalog/` first**:

1. `/botworkspace/catalog/index.html` — AI Long-Term Memory Root Index
2. `/botworkspace/catalog/rules/index.html` — Hierarchical Rules Cache (Level 0–3 invariants)
3. `/botworkspace/catalog/user_directives.html` — Prioritized Cognitive Directives
4. `/botworkspace/catalog/repos/set_theory_prover/index.html` — Obelisk Proof Assistant Core Memory Map
5. `/botworkspace/catalog/repos/web/obelisk_web.html` — Obelisk Web Portal Memory Map

Visiting `/botworkspace/catalog/` first prevents context decay and ensures all mathematical and architectural rules are honored.

## Core Invariants for `obeliskproofassistant.github.io`

1. **Pure ML Generation of `generated/` (No Hand-Editing or CSS Tricks)**:
   - Every file in `generated/` (`manual.html`, `variant1.html`, `variant2.html`, `nbg_library.html`, `symbols.html`, `proofs.html`, `dependent_types.html`, `metatheory.html`, `sections/*.html`, `proofs/item-*.html`, `symbols/*.html`, `theory_db.json`, `nbg_library.json`, `output.txt`) is emitted exclusively by Standard ML scripts in `/ramdisk/set_theory_prover/program/` (`html_generator.ML` and `nbg_html_generator.ML`).
   - Never use CSS or JS hacks to hide or alter `:` vs `∈`. All formula structure and notation (`:` for typing, `∈` for object-level membership, Unicode subscripts like `ifᵈₑₚ` vs LaTeX `\mathsf{if}_{\mathsf{dep}}`) must be computed in ML.
2. **100% Clickable Formula Symbols & Personal Symbol Pages**:
   - Every variable, constant, operator, Greek metavariable (`𝛂`, `𝛃`, `𝛄`, `𝛗`, `𝛙`, `chi`), quotation/antiquotation bracket (`⟨`, `⟩`, `⟦`, `⟧`, `⦃`, `⦄`, `⟪`, `⟫`), encoding/decoding/embedding operator (`Enc`, `Dec`, `Emb`, `μ_A`, `ᶜᵒᵈᵉ`, `eval`), binder, and parenthesis must be clickable and link to its exact canonical definition and personal symbol explanation page.
3. **Default Theory Variants (`MKTD1` & `MKTD2`)**:
   - Out of the 12+6 theory/assistant variants (`NBG1`, `NBGT1`, `NBGTD1`, `MK1`, `MKT1`, `MKTD1`; `NBG2`, `NBGT2`, `NBGTD2`, `MK2`, `MKT2`, `MKTD2`; plus shared `*` variants `NBG*`..`MKTD*`), active development concentrates on **`MKTD1`** (Morse–Kelley + Tarski + Dunaev, Variant 1) and **`MKTD2`** (Morse–Kelley + Tarski + Dunaev, Variant 2).
4. **Automatic 15-Minute Checkpointing & Sync**:
   - Commit generated files to `obeliskproofassistant.github.io` and synchronize `/ramdisk` <-> Local GitLab (`http://127.0.0.1:8929`) <-> `/botworkspace` via `/botworkspace/scripts/ramdisk_workspace.sh`.
