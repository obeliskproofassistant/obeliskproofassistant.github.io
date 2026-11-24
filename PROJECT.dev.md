# PROJECT.dev.md: obeliskproofassistant.github.io

Workspace rules: `/botworkspace/AGENTS.md`. Display rules for generated pages:
`/botworkspace/set_theory_prover/docs/PRESENTATION_RULES.md`. This is a sensitive project: change
it only when the user names it or approves.

## Commands

| Task | Command |
|---|---|
| Regenerate `generated/` | in `set_theory_prover`: `cd program && poly -q --maxheap 3300 --use export_theory_db.ML </dev/null` (about 7 min, detached) |
| Render `docs/*.md` and `CHANGELOG.md` to HTML | `python3 /botworkspace/tools/render_site_markdown.py` |
| Check local links | `python3 tools/check_html_links.py` |
| Run the site tests | `for t in tests/test_*.py; do python3 -B -m unittest "$t"; done` (pytest is not installed) |
| Rebuild `foundations.pdf` | build `/botworkspace/foundations/001_foundations.tex` (see `foundations/PROJECT.dev.md`) and copy the PDF here |

## Rules for this repository

- Never edit `generated/` or `frozen/` by hand.
- When reading formulas, prefer the text mirrors `generated/*.txt` over the multi-megabyte HTML
  pages.
- Hand-written pages must not state counts or "verified" status; link to generated pages instead.
- Commit generated output separately from hand-written changes, naming the `set_theory_prover`
  commit it was generated from.
