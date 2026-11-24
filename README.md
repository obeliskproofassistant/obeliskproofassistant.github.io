# obeliskproofassistant.github.io

The public website of the Obelisk proof assistant: <https://obeliskproofassistant.github.io>.
The mathematics and the kernels live in the sibling repository `set_theory_prover`.

## What is here

| Path | Contents | Who writes it |
|---|---|---|
| `index.html`, `about.html`, `obelisk_ai.html`, `points_of_view.html`, `repl.html`, `embedding.html`, `classic.html`, `yoneda_ai.html`, `mymap.html` | hand-maintained site pages | people and agents (see `<page>.dev.md` where present) |
| `generated/` | the entity database, entry pages, symbol pages, JSON and text mirrors | **only** the SML generators in `set_theory_prover/program/` |
| `foundations.pdf` | the book, built from `/botworkspace/foundations/001_foundations.tex` | LaTeX build |
| `docs/` | a few explanatory documents rendered from Markdown (`docs/*.md` to `docs/*.html`) | `python3 /botworkspace/tools/render_site_markdown.py` |
| `js/`, `css/`, `assets/` | REPL, highlighter, styles | hand-maintained |
| `frozen/` | old hand-made pages, kept unchanged and unlinked | nobody |
| `tests/`, `tools/` | site tests and the link checker | hand-maintained |

The in-browser REPL (`repl.html`, `js/obelisk_engine.js`) is a **preview** checker written in
JavaScript. It is not the Obelisk kernel. What the kernels verified is recorded in
`generated/theory_db.json` and `generated/nbg_library.json`.

Definitions: `set_theory_prover/FACTBOOK.md`. Display rules:
`set_theory_prover/docs/PRESENTATION_RULES.md`. Removed files: `docs/REMOVED_DOCUMENTS.md`.
