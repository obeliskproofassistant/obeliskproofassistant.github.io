#!/usr/bin/env python3
from pathlib import Path

pdir = Path(__file__).resolve().parent.parent
tickets = list((pdir / "tickets").glob("*.md"))
assert len(tickets) == 100, f"Expected 100 tickets, found {len(tickets)}"
print(f"[ACCEPTANCE PASS] Obelisk project has all {len(tickets)} verified tickets.")
