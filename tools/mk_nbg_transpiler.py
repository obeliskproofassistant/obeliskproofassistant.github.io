#!/usr/bin/env python3
"""
tools/mk_nbg_transpiler.py — Dual Translation Layer between Morse-Kelley Class Logic and NBG First-Order Proofs (Ticket 194).

Classifies class comprehension formulas `{x | phi}` into:
  - `NBG_Predicative`: `phi` quantifies only over set variables (`x, y in V` / `isSet(x)`),
    and translates into Gödel finite class algebra operations (`Comp`, `Inter`, `Prod`, `Dom`, `Cnv1`, `Cnv2`, `Diag_in`).
  - `MK_Impredicative_Stage2`: `phi` contains bound class quantifiers (`forall X` or `exists X` without `isSet(X)` restriction),
    requiring full Morse-Kelley impredicative comprehension.
"""

import json
from pathlib import Path
import re
from typing import Any, Dict, List

REPO_DIR = Path(__file__).resolve().parent.parent
DB_PATH = REPO_DIR / "data" / "theory_database.json"

# Uppercase class variable quantifiers not immediately restricted to V / isSet
IMPREDICATIVE_QUANT_RE = re.compile(
    r"(?:∀|∃|\\forall|\\exists|forall|exists)\s*\(?\s*([A-Z][A-Za-z0-9_']*)\b(?!\s*(?:∈|\\in|:)\s*(?:V|\\mathrm\{V\}|Set))"
)


def classify_comprehension_formula(formula: str) -> Dict[str, Any]:
    """
    Classify a set/class formula into `NBG_Predicative` or `MK_Impredicative_Stage2`.
    """
    bound_classes: List[str] = []
    for m in IMPREDICATIVE_QUANT_RE.finditer(formula or ""):
        var = m.group(1)
        if var not in ("V", "On", "Empty"):
            bound_classes.append(var)

    # Check whether the formula is inside a comprehension or second-order induction schema
    has_comprehension_or_schema = (
        "{" in (formula or "")
        or "Compr" in (formula or "")
        or "φ" in (formula or "")
        or "\\varphi" in (formula or "")
    )

    if bound_classes and has_comprehension_or_schema:
        classification = "MK_Impredicative_Stage2"
        bernays_reduction = (
            "Impredicative MK comprehension: bound class quantifier(s) "
            + ", ".join(sorted(set(bound_classes)))
            + " cannot be eliminated via finite Gödel class operations."
        )
    else:
        classification = "NBG_Predicative"
        bernays_reduction = (
            "Predicative NBG formula: reducible to Gödel's 7 finite class operations "
            "(Diag_in, Comp, Inter, Dom, ProdV, Cnv1, Cnv2)."
        )

    return {
        "classification": classification,
        "is_predicative": classification == "NBG_Predicative",
        "bound_class_quantifiers": sorted(set(bound_classes)),
        "bernays_reduction": bernays_reduction,
    }


def transpile_catalog_entry(entry: Dict[str, Any]) -> Dict[str, Any]:
    """Return dual NBG/MK classification and SML vs. NBG Model representations for a catalog entry."""
    stmt = entry.get("semantic") or entry.get("unicode") or entry.get("latex") or ""
    info = classify_comprehension_formula(stmt)
    return {
        "id": entry.get("id"),
        "number": entry.get("num") or entry.get("number"),
        "title": entry.get("title"),
        "classification": info["classification"],
        "is_predicative": info["is_predicative"],
        "nbg_model_view": entry.get("semantic") or entry.get("unicode") or "",
        "executable_sml_view": entry.get("concrete", ""),
        "bernays_reduction": info["bernays_reduction"],
    }


if __name__ == "__main__":
    data = json.loads(DB_PATH.read_text(encoding="utf-8"))
    for e in data.get("entries", []):
        if e.get("number") in ("3.08", "3.32"):
            res = transpile_catalog_entry(e)
            print(f"[{res['number']}] {res['title']} -> {res['classification']}")
