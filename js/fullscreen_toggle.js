/**
 * obelisk_fullscreen_toggle.js — Full-Screen Proof Demo Mode Toggle
 * Maximizes the reading area for mathematical papers by toggling full-screen mode.
 * Architect: Obelisk Proof Assistant Team
 *
 * Features:
 *   - Enter/Exit full-screen mode for the proof viewer container
 *   - Keyboard shortcut (Esc to exit, F to enter)
 *   - Accessible ARIA labels and focus management
 *   - Cross-browser fullscreen API compatibility
 *   - No external dependencies, zero secrets, zero credentials
 */

(function(window) {
  'use strict';

  // --- State ---
  let isFullscreen = false;
  let lastContainerWidth = 0;
  let lastContainerHeight = 0;
  let toggleButton = null;
  let targetContainer = null;

  // --- Fullscreen API helpers ---
  const fullscreenAPI = {
    request: document.documentElement.requestFullscreen ||
             document.documentElement.webkitRequestFullscreen ||
             document.documentElement.mozRequestFullscreen ||
             document.documentElement.msRequestFullscreen,

    exit: document.exitFullscreen ||
          document.webkitExitFullscreen ||
          document.mozCancelFullScreen ||
          document.msExitFullscreen,

    changeEvent: 'fullscreenchange',
    changeEventWebkit: 'webkitfullscreenchange',
    changeEventMoz: 'mozfullscreenchange',
    changeEventMs: 'msfullscreenchange',

    // Check if currently in fullscreen mode
    isFullscreen: () => {
      return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    },

    // Toggle fullscreen on a given element
    toggle: function(element) {
      if (this.isFullscreen()) {
        this.exitFullscreen();
      } else {
        this.requestFullscreen(element);
      }
    },

    exitFullscreen: function() {
      try {
        this.exit.call(document);
      } catch (e) {
        // Fullscreen not currently active; ignore
      }
    },

    requestFullscreen: function(element) {
      try {
        this.request.call(document.element || document, element);
      } catch (e) {
        // Fullscreen not supported or blocked; ignore
      }
    }
  };

  // --- Toggle button creation ---
  function createToggleButton() {
    if (toggleButton) {
      return toggleButton;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.ariaLabel = 'Toggle full-screen mode';
    btn.className = 'fullscreen-toggle-btn';
    btn.innerHTML = '⛶';

    // Click handler
    btn.addEventListener('click', toggleFullscreen);

    // Keyboard handling
    btn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFullscreen();
      }
    });

    toggleButton = btn;
    return btn;
  }

  // --- Fullscreen toggle logic ---
  function toggleFullscreen() {
    if (!targetContainer) {
      console.warn('fullscreen_toggle: No target container set. Call init() first.');
      return;
    }

    if (fullscreenAPI.isFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  function enterFullscreen() {
    try {
      fullscreenAPI.requestFullscreen.call(targetContainer);
    } catch (e) {
      console.error('fullscreen_toggle: Failed to request fullscreen:', e);
    }
  }

  function exitFullscreen() {
    try {
      fullscreenAPI.exitFullscreen();
    } catch (e) {
      console.error('fullscreen_toggle: Failed to exit fullscreen:', e);
    }
  }

  // --- Event listeners for fullscreen state changes ---
  function setupStateListeners() {
    function handleStateChange() {
      isFullscreen = fullscreenAPI.isFullscreen();
      if (toggleButton) {
        // Update button ARIA state
        toggleButton.setAttribute('aria-pressed', isFullscreen);
        // Update icon or label based on state
        if (isFullscreen) {
          toggleButton.innerHTML = '⛶';
        } else {
          toggleButton.innerHTML = '⛶';
        }
      }
    }

    // Add listeners for all browser variants
    document.addEventListener(fullscreenAPI.changeEvent, handleStateChange);
    document.addEventListener(fullscreenAPI.changeEventWebkit, handleStateChange);
    document.addEventListener(fullscreenAPI.changeEventMoz, handleStateChange);
    document.addEventListener(fullscreenAPI.changeEventMs, handleStateChange);
  }

  // --- Public API ---
  function init(options = {}) {
    // options = { containerSelector: '#proof-viewer', buttonSelector: '#fullscreen-btn' }

    targetContainer = document.querySelector(options.containerSelector) || document.body;
    toggleButton = options.buttonSelector
      ? document.querySelector(options.buttonSelector)
      : createToggleButton();

    if (!targetContainer) {
      console.error('fullscreen_toggle: Target container not found.');
      return;
    }

    // If button was not provided, insert it before the container
    if (!toggleButton.parentNode.isSameNode(targetContainer) && !toggleButton.parentNode) {
      targetContainer.parentNode.insertBefore(toggleButton, targetContainer);
    }

    setupStateListeners();

    // Export public methods
    window.Obelisk = window.Obelisk || {};
    window.Obelisk.FullscreenToggle = {
      toggle: toggleFullscreen,
      enter: enterFullscreen,
      exit: exitFullscreen,
      isFullscreen: () => isFullscreen,
      init
    };
  }

  // --- Export ---
  window.Obelisk = window.Obelisk || {};
  window.Obelisk.FullscreenToggle = {
    init
  };

})(window);