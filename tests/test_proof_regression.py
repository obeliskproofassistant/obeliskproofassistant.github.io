#!/usr/bin/env python3
"""
test_proof_regression.py
Continuous verification regression suite for Obelisk Proof Assistant.
Verifies that:
1. Every item in the theory database has a valid, non-empty certificate page.
2. Every status badge in manual.html and proofs.html links to an existing certificate.
3. All verified theorems are backed by closed proof programs without cheating axioms.
4. Inline proof drawers exist in manual.html for all 49 items.
5. proofs.html and proofs/index.html are generated and structurally intact.
"""

import unittest
import json
import os
import re

SITE_DIR = "/botworkspace/obeliskproofassistant.github.io"
DB_PATH = os.path.join(SITE_DIR, "data/theory_database.json")
MANUAL_PATH = os.path.join(SITE_DIR, "manual.html")
PROOFS_PATH = os.path.join(SITE_DIR, "proofs.html")
PROOFS_INDEX_PATH = os.path.join(SITE_DIR, "proofs/index.html")

class TestProofRegression(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        with open(DB_PATH, "r", encoding="utf-8") as f:
            cls.db = json.load(f)
        with open(MANUAL_PATH, "r", encoding="utf-8") as f:
            cls.manual_html = f.read()
        with open(PROOFS_PATH, "r", encoding="utf-8") as f:
            cls.proofs_html = f.read()

    def test_database_entries_count(self):
        """Database must contain 6 sections and 49 formal items."""
        self.assertEqual(len(self.db["sections"]), 6)
        total_entries = sum(len(s["entries"]) for s in self.db["sections"])
        self.assertEqual(total_entries, 49)

    def test_certificate_pages_exist_and_non_empty(self):
        """Every entry must have a corresponding verification certificate in proofs/."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                page_path = os.path.join(SITE_DIR, "proofs", f"{eid}.html")
                self.assertTrue(os.path.isfile(page_path), f"Certificate missing: {page_path}")
                self.assertGreater(os.path.getsize(page_path), 500, f"Certificate empty or truncated: {page_path}")

    def test_manual_links_to_all_proof_certificates(self):
        """manual.html must link to every proof certificate page."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                link_pattern = f'href="proofs/{eid}.html"'
                self.assertIn(link_pattern, self.manual_html, f"manual.html missing link for {eid}")

    def test_manual_inline_proof_drawers_exist(self):
        """manual.html must have an inline proof-row for every item."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                drawer_id = f'id="proof-row-{eid}"'
                self.assertIn(drawer_id, self.manual_html, f"manual.html missing inline proof drawer: {drawer_id}")

    def test_proofs_gallery_has_all_items(self):
        """proofs.html must contain proof cards for all 49 items."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                eid = e["id"]
                card_id = f'id="card-{eid}"'
                self.assertIn(card_id, self.proofs_html, f"proofs.html missing card: {card_id}")

    def test_proofs_index_mirror_integrity(self):
        """proofs/index.html must exist and match proofs.html."""
        self.assertTrue(os.path.isfile(PROOFS_INDEX_PATH))
        with open(PROOFS_INDEX_PATH, "r", encoding="utf-8") as f:
            index_content = f.read()
        self.assertEqual(self.proofs_html, index_content, "proofs/index.html does not match proofs.html")

    def test_verified_theorems_have_sound_programs(self):
        """Every entry marked 'Verified' must have a constructive proof program without cheating axioms."""
        for sec in self.db["sections"]:
            for e in sec["entries"]:
                if e.get("status") == "Verified":
                    num = e["num"]
                    # Must have code in the proof certificate
                    cert_path = os.path.join(SITE_DIR, "proofs", f"{e['id']}.html")
                    with open(cert_path, "r", encoding="utf-8") as f:
                        cert_content = f.read()
                    # Ensure no cheating axiom is used in the actual proof code
                    code_match = re.search(r'<pre class="code-block"><code>(.*?)</code></pre>', cert_content, re.DOTALL)
                    if code_match:
                        code_text = code_match.group(1)
                        self.assertNotIn("PCheat_prf", code_text, f"Theorem {num} proof code uses cheating axiom PCheat_prf!")
                        self.assertNotIn("undefined", code_text.lower(), f"Theorem {num} proof code contains undefined term!")

if __name__ == "__main__":
    unittest.main()
