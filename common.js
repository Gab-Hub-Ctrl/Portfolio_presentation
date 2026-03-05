/**
 * common.js IT Dashboard / Presentation
 * Scripts partages : modal navigation, modal Important, accordeons, chatbot simule
 * Gabriel ROULON 2026
 */

(function () {
  'use strict';

  /* ============================================================
   * initNavModal — modal "Navigation" injecte dynamiquement
   * ============================================================ */
  function initNavModal() {
    var btn = document.getElementById('btn-nav-modal');
    if (!btn) return;

    var overlay = document.createElement('div');
    overlay.id = 'nav-modal';
    overlay.className = 'modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'nav-modal-title');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="modal-card">' +
      '<button class="modal-close" id="nav-modal-close" aria-label="Fermer">&times;</button>' +
      '<div class="modal-title" id="nav-modal-title">Navigation</div>' +
      '<div class="modal-body">' +
      '<p>Ce site est organise par <strong style="color:var(--text)">profils de lecture</strong>.' +
      ' Pour une experience optimale, commencez par selectionner votre vue depuis la page d\'accueil.</p>' +
      '<p style="margin-top:16px;margin-bottom:5px"><strong style="color:var(--text)">RH / Recruteur</strong></p>' +
      '<p style="margin:0 0 12px;color:var(--text-secondary);font-size:0.90em">Profil personnel, CV, lettres de motivation, contact et presentation synthetique du projet.</p>' +
      '<p style="margin-bottom:5px"><strong style="color:var(--text)">Jury ecole</strong></p>' +
      '<p style="margin:0 0 12px;color:var(--text-secondary);font-size:0.90em">Profil, lettre de motivation ecole, contact, IT Dashboard complet et realisations finance.</p>' +
      '<p style="margin-bottom:5px"><strong style="color:var(--text)">Technicien</strong></p>' +
      '<p style="margin:0 0 16px;color:var(--text-secondary);font-size:0.90em">Profil, contact, IT Dashboard, standards, documentation technique, infrastructure et systemes.</p>' +
      '<p>En selectionnant une vue, les ressources non pertinentes sont <strong style="color:var(--text)">masquees</strong>' +
      ' pour simplifier la lecture. La vue peut etre reinitialisee a tout moment en cliquant a nouveau sur le bouton actif.</p>' +
      '<p style="margin-top:14px;padding-top:12px;border-top:1px solid var(--border);color:var(--text-secondary);font-size:0.87em">' +
      'Pour revenir a l\'accueil depuis n\'importe quelle page, utilisez le <strong style="color:var(--text)">fil d\'Ariane</strong>' +
      ' affiche en haut du contenu de chaque page.</p>' +
      '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var card = overlay.querySelector('.modal-card');
    var closeBtn = document.getElementById('nav-modal-close');
    var lastFocus = null;

    function openModal() {
      lastFocus = document.activeElement;
      overlay.style.display = 'flex';
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }
    function closeModal() {
      overlay.style.display = '';
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }

    btn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (!card.contains(e.target)) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false') closeModal();
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
    var btn = document.querySelector('.btn-chatbot-fab') || document.querySelector('.btn-chatbot');
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
            statusEl.textContent = 'Resume complet';
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

    btn.addEventListener('click', function () { isOpen ? close() : open(); });
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
    initNavModal();
    initModal();
    initAccordions();
    initChatbot();
  });

})();

/* ============================================================
 * Navigation filtree par profil
 * Filtre les cartes index selon le profil actif (localStorage).
 * Expose window.applyProfileToNav pour index.html.
 * ============================================================ */
(function () {
  'use strict';

  var NAV_PROFILES = {
    rh:    ['profil', 'cv', 'lettre-entreprise', 'contact', 'synthese'],
    ecole: ['profil', 'lettre-ecole', 'contact', 'synthese', 'init', 'poc', 'standards',
            'doc-financiere', 'pea-document', 'simulation-pea'],
    tech:  ['profil', 'contact', 'synthese', 'init', 'poc', 'standards',
            'doc-technique', 'maintenance', 'laboratoire']
  };

  /* Fonction vide conservee pour compatibilite avec index.html inline script */
  function applyProfileToNav() {}

  window.applyProfileToNav = applyProfileToNav;

})();
