/**
 * common.js IT Dashboard / Presentation
 * Scripts partages : nav dropdown, modal, accordeons, chatbot simule
 * Gabriel ROULON 2026
 */

(function () {
  'use strict';

  /* ============================================================
   * initNavDropdown menu deroulant de navigation
   * ============================================================ */
  function initNavDropdown() {
    var toggle = document.querySelector('.nav-dropdown-toggle');
    var menu = document.querySelector('.nav-dropdown-menu');
    if (!toggle || !menu) return;

    function open() {
      toggle.setAttribute('aria-expanded', 'true');
      menu.removeAttribute('aria-hidden');
      var first = menu.querySelector('a');
      if (first) first.focus();
    }
    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }

    toggle.addEventListener('click', function () {
      toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
    });
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); toggle.focus(); }
    });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); toggle.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) close();
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', close);
    });
  }

  /* ============================================================
   * initModal modal "Important" ou "Lecture rapide"
   * ============================================================ */
  function initModal() {
    var overlay = document.getElementById('quick-read-modal');
    if (!overlay) return;

    var card = overlay.querySelector('.modal-card');
    var closeBtn = overlay.querySelector('.modal-close');
    var openBtn = document.querySelector('.btn-important') || document.querySelector('.btn-quick-read');
    var lastFocus = null;

    function getFocusable() {
      return Array.from(overlay.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )).filter(function (el) { return !el.disabled; });
    }

    function openModal() {
      lastFocus = document.activeElement;
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var focusable = getFocusable();
      if (focusable.length) focusable[0].focus();
    }

    function closeModal() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (!card.contains(e.target)) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    overlay.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ============================================================
   * initAccordions sections accordeon
   * ============================================================ */
  function initAccordions() {
    var headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function (header) {
      var accordion = header.closest('.accordion');
      if (!accordion) return;

      var content = accordion.querySelector('.accordion-content');
      if (content) {
        var id = content.id || ('acc-' + Math.random().toString(36).slice(2, 8));
        content.id = id;
        header.setAttribute('aria-controls', id);
        header.setAttribute('aria-expanded', accordion.classList.contains('active') ? 'true' : 'false');
      }

      function toggle() {
        var willOpen = !accordion.classList.contains('active');
        if (willOpen) {
          document.querySelectorAll('.accordion.active').forEach(function (other) {
            if (other !== accordion) {
              other.classList.remove('active');
              var h = other.querySelector('.accordion-header');
              if (h) h.setAttribute('aria-expanded', 'false');
            }
          });
        }
        accordion.classList.toggle('active');
        header.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      }

      header.addEventListener('click', toggle);
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  /* ============================================================
   * initChatbot chatbot simule avec animation de frappe
   * ============================================================ */
  function initChatbot() {
    var btn = document.querySelector('.btn-chatbot');
    var panel = document.getElementById('chatbot-panel');
    if (!btn || !panel) return;

    var summary = btn.getAttribute('data-summary') || '';
    var msgEl = panel.querySelector('.chatbot-msg');
    var thinkEl = panel.querySelector('.chatbot-think');
    var closeBtn = panel.querySelector('.chatbot-close-btn');
    var statusEl = panel.querySelector('.chatbot-status');
    var isOpen = false;
    var typeTimer = null;
    var thinkTimer = null;

    /* Vitesse : 6-7 secondes pour le summary complet */
    function calcDelay(text) {
      return Math.max(10, Math.min(32, 6000 / Math.max(text.length, 1)));
    }

    function typeText(text, el, onDone) {
      el.innerHTML = '';
      var cursor = document.createElement('span');
      cursor.className = 'chatbot-cursor-blink';
      el.appendChild(cursor);
      var i = 0;
      var delay = calcDelay(text);

      function step() {
        if (i < text.length) {
          if (text[i] === '\n') {
            el.insertBefore(document.createElement('br'), cursor);
          } else {
            el.insertBefore(document.createTextNode(text[i]), cursor);
          }
          i++;
          typeTimer = setTimeout(step, delay);
        } else {
          cursor.remove();
          panel.classList.remove('typing');
          panel.classList.add('done');
          if (statusEl) {
            statusEl.textContent = 'Résumé complet';
            statusEl.classList.add('done');
          }
          if (onDone) onDone();
        }
      }
      step();
    }

    function open() {
      if (isOpen) return;
      isOpen = true;
      panel.classList.add('open', 'typing');
      panel.classList.remove('done');
      btn.classList.add('active');

      if (msgEl) msgEl.innerHTML = '';
      if (statusEl) { statusEl.textContent = 'Analyse en cours...'; statusEl.classList.remove('done'); }
      if (thinkEl) thinkEl.classList.remove('hidden');

      /* Délai "réflexion" avant frappe */
      thinkTimer = setTimeout(function () {
        if (thinkEl) thinkEl.classList.add('hidden');
        typeText(summary, msgEl);
      }, 900);
    }

    function close() {
      if (!isOpen) return;
      isOpen = false;
      panel.classList.remove('open', 'typing', 'done');
      btn.classList.remove('active');
      if (typeTimer) clearTimeout(typeTimer);
      if (thinkTimer) clearTimeout(thinkTimer);
      if (msgEl) msgEl.innerHTML = '';
      if (thinkEl) thinkEl.classList.remove('hidden');
      if (statusEl) { statusEl.textContent = ''; statusEl.classList.remove('done'); }
    }

    btn.addEventListener('click', function () {
      isOpen ? close() : open();
    });

    if (closeBtn) closeBtn.addEventListener('click', close);

    document.addEventListener('click', function (e) {
      if (isOpen && !panel.contains(e.target) && !btn.contains(e.target)) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) close();
    });
  }

  /* ============================================================
   * Auto-init
   * ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initNavDropdown();
    initModal();
    initAccordions();
    initChatbot();

    /* aria-current sur le lien de la page courante */
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-dropdown-menu a').forEach(function (link) {
      if (link.getAttribute('href') === currentPage) {
        link.setAttribute('aria-current', 'page');
      }
    });
  });

})();
