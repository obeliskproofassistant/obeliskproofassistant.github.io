#!/usr/bin/env python3
"""
Unit test for mobile navigation button and cookie logo theme switching.
"""
import os
import re
import unittest

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

class TestMobileNavAndCookieTheme(unittest.TestCase):

    def test_mobile_theory_outline_button_is_normal_not_cookie(self):
        index_path = os.path.join(BASE_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Must not contain SVG biscuit markup
        self.assertNotIn("maria-biscuit-btn", content)
        self.assertNotIn("biscuitBake", content)
        self.assertNotIn("rimHighlight", content)
        self.assertNotIn("embossShadow", content)

        # Must contain normal mobile buttons
        self.assertIn('id="mobile-jump-theory-btn"', content)
        self.assertIn('id="mobile-jump-top-btn"', content)
        self.assertIn("Theory Outline", content)
        self.assertIn("About and Intro", content)

        # Rule check: No arrows in button text or titles
        for arrow in ["&darr;", "&uarr;", "→", "←", "↓", "↑", "&rarr;", "&larr;"]:
            self.assertNotIn(f"Theory Outline {arrow}", content)
            self.assertNotIn(f"About and Intro {arrow}", content)

    def test_cookie_consent_theme_css_rules(self):
        css_path = os.path.join(BASE_DIR, "assets", "silktide-consent-manager.css")
        with open(css_path, "r", encoding="utf-8") as f:
            css = f.read()

        # Must NOT hardcode body.indexbody into dark-mode rules
        self.assertNotIn("body.indexbody #stcm-icon .stcm-cookie-img.img-dark-mode", css)
        self.assertNotIn("body.indexbody #stcm-icon .stcm-cookie-img.img-light-mode", css)

        # Must have explicit light-mode display rules
        self.assertIn("html.light-mode #stcm-icon .stcm-cookie-img.img-light-mode", css)
        self.assertIn("html.light-mode #stcm-icon .stcm-cookie-img.img-dark-mode", css)

        # Must have explicit dark-mode display rules
        self.assertIn("html.dark-mode #stcm-icon .stcm-cookie-img.img-dark-mode", css)
        self.assertIn("html.dark-mode #stcm-icon .stcm-cookie-img.img-light-mode", css)

    def test_cookie_images_exist(self):
        light_img = os.path.join(BASE_DIR, "images", "galleta2.png")
        dark_img = os.path.join(BASE_DIR, "images", "galleta2_dark.png")
        self.assertTrue(os.path.isfile(light_img), "galleta2.png must exist in images/")
        self.assertTrue(os.path.isfile(dark_img), "galleta2_dark.png must exist in images/")
        self.assertGreater(os.path.getsize(light_img), 1000)
        self.assertGreater(os.path.getsize(dark_img), 1000)

    def test_theme_synchronization_wired(self):
        index_path = os.path.join(BASE_DIR, "index.html")
        about_path = os.path.join(BASE_DIR, "about.html")
        with open(index_path, "r", encoding="utf-8") as f:
            idx = f.read()
        with open(about_path, "r", encoding="utf-8") as f:
            abt = f.read()

        self.assertIn("LEFT_THEME_CHANGED", idx)
        self.assertIn("LEFT_THEME_CHANGED", abt)
        self.assertIn("applyObeliskTheme", idx)

if __name__ == "__main__":
    unittest.main()
