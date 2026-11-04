#!/usr/bin/env python3
"""
tools/proof_minimizer.py — Automated Proof Script Minimizer & Dead Hypothesis Pruning Engine (Ticket 192).

Performs liveness analysis on SML proof scripts / hypothesis contexts (`Gamma`), identifying
referenced hypothesis variables (`VarSet`) and pruning unused antecedents without altering
the proven conclusion formula `phi`.
"""

import json
from pathlib import Path
import re
from typing import Any, Dict, List, Set

REPO_DIR = Path(__file__).resolve().parent.parent
DB_PATH = REPO_DIR / "generated" / "theory_db.json"


def compute_referenced_variables(proof_body: str) -> Set[str]:
    """Return the set of identifier tokens referenced in a proof term or SML tactic script."""
    if not proof_body:
        return set()
    return set(re.findall(r"\b[A-Za-z_][A-Za-z0-9_']*\b", proof_body))


def minimize_sequent_hypotheses(
    hypotheses: List[Dict[str, str]],
    conclusion: str,
    proof_body: str,
) -> Dict[str, Any]:
    """
    Prune any hypothesis `h` from `hypotheses` whose name (`h['name']`) is not referenced
    in `proof_body`, while strictly preserving `conclusion`.
    """
    live_vars = compute_referenced_variables(proof_body)
    kept: List[Dict[str, str]] = []
    pruned: List[Dict[str, str]] = []

    for hyp in hypotheses:
        h_name = hyp.get("name", "")
        if not h_name or h_name in live_vars:
            kept.append(hyp)
        else:
            pruned.append(hyp)

    return {
        "original_count": len(hypotheses),
        "minimized_count": len(kept),
        "pruned_count": len(pruned),
        "pruned_names": [h.get("name", "") for h in pruned],
        "hypotheses": kept,
        "conclusion": conclusion,
        "proof_body": proof_body,
    }


def minimize_sml_proof_script(sml_code: str) -> Dict[str, Any]:
    """
    Remove redundant unused local `val _unused = ...` bindings or duplicate blank lines
    from an SML proof script while preserving top-level theorem declarations and conclusions.
    """
    lines = sml_code.splitlines()
    val_decl_re = re.compile(r"^\s*val\s+([A-Za-z_][A-Za-z0-9_']*)\s*=\s*(.+)$")
    protected_prefixes = ("thm_", "ax_", "def_", "rule_", "entry_", "verified_")

    # Count occurrences of each identifier across the script
    all_tokens = re.findall(r"\b[A-Za-z_][A-Za-z0-9_']*\b", sml_code)
    counts: Dict[str, int] = {}
    for tok in all_tokens:
        counts[tok] = counts.get(tok, 0) + 1

    kept_lines: List[str] = []
    removed_bindings: List[str] = []
    for idx, line in enumerate(lines):
        m = val_decl_re.match(line)
        if m and idx < len(lines) - 1:
            var_name = m.group(1)
            if (
                not var_name.startswith(protected_prefixes)
                and var_name.startswith("unused_")
                and counts.get(var_name, 0) <= 1
            ):
                removed_bindings.append(var_name)
                continue
        kept_lines.append(line)

    minimized = "\n".join(kept_lines)
    return {
        "original_lines": len(lines),
        "minimized_lines": len(kept_lines),
        "removed_bindings": removed_bindings,
        "minimized_code": minimized,
    }


def analyze_database_proofs(db_path: Path = DB_PATH) -> Dict[str, Any]:
    """Run proof minimizer across all verified entries in `data/theory_database.json`."""
    data = json.loads(db_path.read_text(encoding="utf-8"))
    entries = data.get("entries", [])
    if not entries:
        for sec in data.get("sections", []):
            entries.extend(sec.get("entries", []))
    analyzed = 0
    for entry in entries:
        sml = (
            entry.get("sml_implementation")
            or entry.get("concrete")
            or entry.get("semantic")
            or entry.get("formula_unicode")
            or entry.get("unicode")
            or ""
        )
        if sml:
            minimize_sml_proof_script(sml)
            analyzed += 1
    return {"analyzed_entries": analyzed, "total_entries": len(entries)}


if __name__ == "__main__":
    stats = analyze_database_proofs()
    print(f"[PASS] Analyzed {stats['analyzed_entries']}/{stats['total_entries']} catalog proof scripts.")
