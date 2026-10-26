/**
 * obelisk_code_copy.js — Code Copy Widget for Lean / SML
 * Provides one-click copy with language badge and formatting preservation.
 * Architect: Obelisk Proof Assistant Team
 */

(function(window) {
  'use strict';

  // --- Language modes ---
  const LANG_LEAN = 'lean';
  const LANG_SML = 'sml';

  // --- Language badges ---
  const LANG_BADGES = {
    [LANG_LEAN]: {
      name: 'Lean',
      class: 'lean-badge',
      tooltip: 'Lean theorem prover code',
      color: '#FF6F61'
    },
    [LANG_SML]: {
      name: 'SML',
      class: 'sml-badge',
      tooltip: 'Standard ML code',
      color: '#48C9F2'
    }
  };

  // --- Copy helper ---
  function copyToClipboard(text) {
    // Use modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback: use textarea element
    return new Promise((resolve, reject) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(textarea);
      }
    });
  }

  // --- Copy widget constructor ---
  class CodeCopyWidget {
    constructor(options = {}) {
      this.codeElement = options.codeElement;
      this.lang = options.lang || LANG_LEAN; // default to Lean
      this.onCopy = options.onCopy || function() {};

      if (!this.codeElement) {
        console.warn('CodeCopyWidget: No code element provided.');
        return;
      }

      this._renderBadge();
      this._attachEvents();
    }

    _renderBadge() {
      // Remove existing badge if present
      const existing = this.codeElement.parentNode.querySelector(`.${LANG_BADGES[this.lang].class}`);
      if (existing) {
        existing.remove();
      }

      const badge = document.createElement('span');
      badge.className = `code-copy-badge ${LANG_BADGES[this.lang].class}`;
      badge.title = LANG_BADGES[this.lang].tooltip;
      badge.style.cssText = `
        position: relative;
        float: left;
        margin-right: 6px;
        margin-bottom: 6px;
        background: ${LANG_BADGES[this.lang].color};
        color: white;
        padding: 3px 6px;
        border-radius: 3px;
        font-size: 0.65rem;
        font-weight: bold;
        line-height: 1;
        z-index: 1;
        white-space: nowrap;
      `;
      badge.textContent = LANG_BADGES[this.lang].name;

      // Insert badge after first child or before code element
      const insertNode = this.codeElement.parentNode.firstChild;
      if (insertNode) {
        this.codeElement.parentNode.insertBefore(badge, insertNode);
      } else {
        this.codeElement.parentNode.appendChild(badge);
      }
    }

    _attachEvents() {
      const btn = this.codeElement.closest('.code-copy-btn');
      if (btn) {
        btn.addEventListener('click', (e) => this._handleClick(e));
        return;
      }

      // Create copy button if none exists
      const wrapper = this.codeElement.parentElement;
      if (wrapper && !wrapper.querySelector('.code-copy-btn')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'code-copy-btn';
        btn.ariaLabel = `Copy ${LANG_BADGES[this.lang].name} code`;
        btn.innerHTML = '<span class="visually-hidden">Copy</span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard" fill="currentColor"><path d="M4 1.5H3a1 1 0 0 0-1 1V3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2h-1V1.5zm16-2H1c-.586 0-1 .414-1 1v12c0 .586.414 1 1 1h14c.586 0 1-.414 1-1V1c-.586 0-1-.414-1-1zm-11 .5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-13 .5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H.5zm-1 13H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>';
        btn.addEventListener('click', (e) => this._handleClick(e));
        wrapper.appendChild(btn);
      }
    }

    _handleClick(event) {
      const codeText = this.codeElement.textContent || this.codeElement.innerText || '';
      const cleanText = codeText
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>');

      copyToClipboard(cleanText).then(() => {
        this._showCopiedFeedback();
        this.onCopy(cleanText, this.lang);
      }).catch(err => {
        console.error('Code copy failed:', err);
        // Fallback: show original text attempt
        this._showErrorFeedback();
      });
    }

    _showCopiedFeedback() {
      // Remove any existing feedback
      const existing = document.querySelector('.code-copy-toast');
      if (existing) {
        existing.remove();
      }

      const toast = document.createElement('div');
      toast.className = 'code-copy-toast';
      toast.innerHTML = '✓ Copied';
      toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 0.875rem;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2000);
    }

    _showErrorFeedback() {
      const existing = document.querySelector('.code-copy-toast');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.className = 'code-copy-toast';
      toast.innerHTML = '✗ Copy failed';
      toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f87171;
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 0.875rem;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2000);
    }
  }

  // --- Public API ---
  function initCodeCopy(codeElements, lang) {
    const elements = Array.isArray(codeElements) ? codeElements : [codeElements];
    return elements.map(el => new CodeCopyWidget({ codeElement: el, lang }));
  }

  function setLanguage(lang) {
    LANG_LEAN === lang ? (window.currentCopyLang = LANG_LEAN) : (window.currentCopyLang = LANG_SML);
  }

  window.Obelisk = window.Obelisk || {};
  window.Obelisk.CodeCopy = {
    init: initCodeCopy,
    setLanguage: setLanguage,
    LANG_LEAN,
    LANG_SML
  };

})(window);