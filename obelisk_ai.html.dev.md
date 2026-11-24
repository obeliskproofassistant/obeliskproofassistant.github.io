# `obelisk_ai.html.dev.md`: Purpose and Invariants for `obelisk_ai.html`

Read `/botworkspace/AGENTS.md`, `/botworkspace/set_theory_prover/FACTBOOK.md`,
`/botworkspace/set_theory_prover/docs/PRESENTATION_RULES.md`, and `PROJECT.dev.md` first.

## Purpose

`obelisk_ai.html` (the target of redirects `ai.html` and `ai_version.html`) is the single-page
technical reference for developers, mathematicians, and automated agents working on Obelisk. It
summarises:

1. The two formal systems (`MKTD1` and `MKTD2`) from `FACTBOOK.md` §1.
2. The boundary between trusted SML kernels (`program/newchecker/` and
   `program/dependent_typechecker.ML` + `dependent_eval.ML`), the separate `.nbg` surface checker
   (`program/nbg_compiler.ML`, GitLab #8092), the statement bridge (`program/variant_bridge.ML`),
   and untrusted previews (`repl.html` / `js/obelisk_engine.js`, `obelisk_kernel.py`,
   `program/lcf.ML`).
3. Core mathematical and syntactic distinctions from `FACTBOOK.md` §2–§10 (four theories `𝘛 𝘍 𝘌 𝘞`,
   `Fm₀` stratification, syntax vs. semantics, variable kinds, binder vs. occurrence, metalevels
   `0` and `+1`, Dunaev tagged pairs `(A, B) = mark(A, 1) ∪ mark(B, 2)` vs. set-only Kuratowski
   pairs `opairK(a, b) = {{a}, {a, b}}`, the four arrows `—→`, `→`, `⟹`, `f : A → B`, and 3-tier
   SML constructor naming).
4. A worked `.nbg` surface language walkthrough (`NBGCompiler.typeCheck`, contexts `Δ` and `Γ`,
   and constructor rules `ELam`, `EFn`, `ECompr`, `EFst`, `ESnd`, `EApp`).
5. Links to generated reports (`generated/manual.html`, `generated/nbg_library.html`,
   `generated/theory_db.json`, `generated/nbg_library.json`) and verification commands.

## Invariants

- **No hand-written counts or unbased "verified" claims (`AGENTS.md` §1 & §2.4, `PROJECT.dev.md`):**
  Never hardcode entry counts, theorem counts, or test counts in `obelisk_ai.html`. Live counts may
  only be loaded dynamically at runtime from `generated/theory_db.json` and
  `generated/nbg_library.json` with a non-numeric link fallback.
- **No marketing hype:** Keep language plain, precise, and factual. State architectural limitations
  and known debt (such as #8092) explicitly.
- **Strict presentation compliance (`PRESENTATION_RULES.md`):**
  - Zero emojis anywhere in the file.
  - Zero directional arrows (`→ ← ↑ ↓` or HTML entities) inside `<a>`, `<button>`, `<title>`,
    `<h1>`–`<h4>`, or `title` attributes.
  - Link text inside `<a>` tags must be concise (`<= 70` characters) and use `MKTD1` / `MKTD2`
    rather than obsolete labels.
  - Never wrap side conditions or sequents in antiquotation brackets `⟦…⟧`.
