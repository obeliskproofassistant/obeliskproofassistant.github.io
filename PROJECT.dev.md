# Project Development Context (`obeliskproofassistant.github.io`)

> **Tier 0 Global Ruleset**: Read `/botworkspace/AGENTS.md` and `/botworkspace/FACTBOOK.md` first. Do not duplicate global rules here.

## Repository Scope & Boundaries
- **Site Shell (`index.html`, `about.html`, `obelisk_ai.html`, `repl.html`, `embedding.html`)**: Hand-maintained portal pages. Check `about.html.dev.md` for local invariants (such as preserving `‼️` near the cross-site link to `georgydunaev.github.io`).
- **Auto-Generated Directory (`generated/`)**: Produced exclusively by Standard ML generators in `set_theory_prover/program/` (`html_generator.ML`, `nbg_html_generator.ML`, `symbol_pages.ML`). AI agents should read `generated/*.txt` (`output.txt`, `manual.txt`, `nbg_library.txt`, `proofs.txt`, `symbols.txt`) rather than multi-MB `.html` files when inspecting mathematical formulas or theorems.
- **Frozen Reference Directory (`frozen/`)**: Archived legacy files kept unlinked from navigation and untouched by direct edits.
- **Rendered Documentation (`docs/*.html`, `CHANGELOG.html`, `BUGREPORT.html`)**: Generated from `docs/*.md` via `python3 /botworkspace/tools/render_site_markdown.py`.

## Verification Commands
```bash
python3 /hostramdisk/obeliskproofassistant.github.io/tools/check_html_links.py
```
