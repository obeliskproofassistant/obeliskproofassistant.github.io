# Local Development Context for `about.html`

> **Parent Ruleset**: Read `/botworkspace/AGENTS.md` and `PROJECT.dev.md` first. This file documents only `about.html`-local invariants and exceptions.

## File-Local Invariants & Exceptions

- **`[INV:CROSS_SITE_DOUBLE_EXCLAMATION]`**:
  - **Context**: The red double exclamation mark symbol (`‼️`, U+203C) near the cross-site link from `obeliskproofassistant.github.io/about.html` to `https://georgydunaev.github.io/` is an intentional visual highlight chosen by the author.
  - **Exception to Global Emoji Prohibition**: Although U+203C lies in a Unicode symbol/emoji block, it is explicitly preserved here by user directive (`FACTBOOK.md#fact-13`). Automated sanitizers and AI agents should keep `‼️` intact near the `georgydunaev.github.io` link while enforcing the global no-emoji rule everywhere else.
- **`[INV:NICE_MARKDOWN_DOC_LINKS]`**:
  - Links to documentation dossiers in `docs/` should point to formatted HTML views (or `md_viewer.html`) so human visitors do not land on unformatted raw `.md` source text.
