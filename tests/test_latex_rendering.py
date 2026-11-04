import glob
import json
import os
import re
import unittest

SITE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(SITE_DIR, "generated", "theory_db.json")

MATH_BLOCK_RE = re.compile(r"(\\\(.*?\\\)|\\\[.*?\\\]|\$\$.*?\$\$)", re.S)
DOUBLE_BACKSLASH_CMD_RE = re.compile(r"\\\\[a-zA-Z]+")
STRAY_TEX_CMD_RE = re.compile(
    r"\\(?:frac|forall|exists|in|subseteq|cup|cap|times|iff|implies|to|mapsto|"
    r"llbracket|rrbracket|langle|rangle|vdash|models|mathcal|mathbf|mathrm|"
    r"mathsf|operatorname|alpha|beta|gamma|phi|psi|circ|Rightarrow|equiv|"
    r"neq|leq|geq|neg|land|lor|top|bot|emptyset|longleftrightarrow|longrightarrow)\b"
)


class TestLatexRendering(unittest.TestCase):
    def test_theory_database_has_no_double_escaped_latex(self):
        with open(DB_PATH, "r", encoding="utf-8") as f:
            db = json.load(f)

        offenders = []

        def check_obj(obj, path=""):
            if isinstance(obj, dict):
                for k, v in obj.items():
                    check_obj(v, f"{path}.{k}")
            elif isinstance(obj, list):
                for i, v in enumerate(obj):
                    check_obj(v, f"{path}[{i}]")
            elif isinstance(obj, str) and "latex" in path.lower():
                if DOUBLE_BACKSLASH_CMD_RE.search(obj):
                    offenders.append((path, obj))

        check_obj(db)
        self.assertEqual(
            offenders,
            [],
            f"Found double-escaped LaTeX commands in theory_database.json: {offenders[:5]}",
        )

    def test_html_pages_have_no_double_escaped_latex_or_missing_mathjax(self):
        html_files = sorted(glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True))
        self.assertGreater(len(html_files), 40)

        for path in html_files:
            if "/.git/" in path:
                continue
            rel = os.path.relpath(path, SITE_DIR)
            with open(path, "r", encoding="utf-8") as f:
                txt = f.read()

            body = re.sub(r"<(script|style)\b[^>]*>.*?</\1>", "", txt, flags=re.S | re.I)

            # 1. No double-escaped LaTeX commands like \\alpha or \\to in HTML body
            dbl = DOUBLE_BACKSLASH_CMD_RE.findall(body)
            self.assertEqual(
                dbl,
                [],
                f"{rel} contains double-escaped LaTeX commands (renders as line breaks): {dbl[:10]}",
            )

            # 2. If page has math blocks, it must load MathJax and configure window.MathJax
            blocks = MATH_BLOCK_RE.findall(body)
            if blocks:
                self.assertIn(
                    "window.MathJax",
                    txt,
                    f"{rel} contains {len(blocks)} math blocks but is missing window.MathJax config",
                )
                self.assertIn(
                    "tex-mml-chtml.js",
                    txt,
                    f"{rel} contains {len(blocks)} math blocks but is missing MathJax script tag",
                )
                self.assertNotIn(
                    "polyfill.io",
                    txt,
                    f"{rel} references deprecated polyfill.io script",
                )

                # 3. Every math block must have balanced braces
                for blk in blocks:
                    depth = 0
                    for ch in blk:
                        if ch == "{":
                            depth += 1
                        elif ch == "}":
                            depth -= 1
                        self.assertGreaterEqual(
                            depth, 0, f"{rel} has unbalanced closing brace in math block: {blk}"
                        )
                    self.assertEqual(
                        depth, 0, f"{rel} has unbalanced braces in math block: {blk}"
                    )

            # 4. No stray TeX commands outside math blocks (excluding code/pre blocks)
            body_no_code = re.sub(r"<(code|pre)\b[^>]*>.*?</\1>", "", body, flags=re.S | re.I)
            outside_math = MATH_BLOCK_RE.sub("", body_no_code)
            outside_tags = re.sub(r"<[^>]+>", " ", outside_math)
            stray = STRAY_TEX_CMD_RE.findall(outside_tags)
            self.assertEqual(
                stray,
                [],
                f"{rel} has raw LaTeX commands outside math mode: {stray[:10]}",
            )

            # 5. No inline MathJax delimiters \(...\) inside <code> tags (skipped by skipHtmlTags)
            code_blocks = re.findall(r"<code\b[^>]*>.*?</code>", body, flags=re.S | re.I)
            code_with_mathjax = [c for c in code_blocks if r"\(" in c or r"\[" in c]
            self.assertEqual(
                code_with_mathjax,
                [],
                f"{rel} has MathJax delimiters inside <code> tags (skipped by skipHtmlTags): {code_with_mathjax[:5]}",
            )

    def test_output_html_has_zero_leaked_ansi_escape_codes(self):
        output_html = os.path.join(SITE_DIR, "generated", "output.html")
        with open(output_html, "r", encoding="utf-8") as f:
            txt = f.read()
        self.assertNotIn("\x1b[", txt)
        leaked = re.findall(r"\[(?:0|1)?;\d+m", txt)
        self.assertEqual(
            leaked,
            [],
            f"generated/output.html contains leaked ANSI CSI color codes: {leaked[:10]}",
        )

    def test_embedding_html_wires_mathjax_and_format_toggles(self):
        embedding_html = os.path.join(SITE_DIR, "embedding.html")
        with open(embedding_html, "r", encoding="utf-8") as f:
            txt = f.read()
        self.assertIn("window.MathJax", txt)
        self.assertIn("tex-mml-chtml.js", txt)
        self.assertIn("setRelMode", txt)
        self.assertIn("setFormatMode", txt)
        self.assertIn("typesetPromise", txt)

    def test_four_theory_hierarchy_mu_interpretation_and_deprecated_banners(self):
        manual_html = os.path.join(SITE_DIR, "generated", "manual.html")
        with open(manual_html, "r", encoding="utf-8") as f:
            mtxt = f.read()
        self.assertIn(r"\mathcal{E}", mtxt)
        self.assertIn(r"\mathcal{F}", mtxt)
        self.assertIn(r"\mu_{", mtxt)
        self.assertIn("Bezboruah", mtxt)
        self.assertIn("Co-Necessitation", mtxt)

        for dep_rel in [
            "embedding_anti.html",
            "archive/index.html",
            "archive/manual_polyml_legacy.html",
            "archive/ai_2026_10_30.html",
            "archive/classic_portal.html",
        ]:
            dep_path = os.path.join(SITE_DIR, dep_rel)
            with open(dep_path, "r", encoding="utf-8") as f:
                dtxt = f.read()
            self.assertIn("(deprecated)", dtxt, f"{dep_rel} missing (deprecated) marker")
            self.assertIn("generated/", dtxt, f"{dep_rel} missing link to canonical generated/ replacement")


if __name__ == "__main__":
    unittest.main()
