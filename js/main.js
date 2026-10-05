(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};

  /* ---------- Contatos (config.js) ---------- */
  var waNumber = String(cfg.whatsapp || "").replace(/\D/g, "");
  var waMsg = encodeURIComponent(cfg.whatsappMensagem || "");
  var waLink = waNumber ? "https://wa.me/" + waNumber + "?text=" + waMsg : "#contato";

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.setAttribute("href", waLink);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-phone-text]").forEach(function (el) {
    el.textContent = cfg.telefone || "";
  });
  document.querySelectorAll("[data-phone-link]").forEach(function (el) {
    el.setAttribute("href", "tel:" + String(cfg.telefoneLink || "").replace(/[^\d+]/g, ""));
  });

  document.querySelectorAll("[data-email-text]").forEach(function (el) {
    el.textContent = cfg.email || "";
  });
  document.querySelectorAll("[data-email-link]").forEach(function (el) {
    el.setAttribute("href", "mailto:" + (cfg.email || ""));
  });

  document.querySelectorAll("[data-instagram-text]").forEach(function (el) {
    el.textContent = cfg.instagramHandle || "";
  });
  document.querySelectorAll("[data-instagram-link]").forEach(function (el) {
    if (!cfg.instagram) return;
    el.setAttribute("href", cfg.instagram);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  /* ---------- Ano no rodapé ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header com sombra ao rolar ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }
    if (menu) menu.setAttribute("aria-hidden", String(!open));
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Animações de entrada ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    group.querySelectorAll(".reveal").forEach(function (el, index) {
      el.style.setProperty("--delay", Math.min(index * 90, 450) + "ms");
    });
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Linhas de ECG (desenho animado) ---------- */
  document.querySelectorAll(".ecg").forEach(function (svg) {
    var path = svg.querySelector(".ecg-base") || svg.querySelector("path");
    if (!path) return;
    try {
      var length = Math.ceil(path.getTotalLength()) + 2;
      svg.style.setProperty("--len", length);
    } catch (error) {
      svg.style.setProperty("--len", 600);
    }
  });

  /* ---------- Fotos reais: use assets/img/hero.jpg e assets/img/sobre.jpg ----------
     Enquanto o arquivo não existir, o placeholder elegante permanece no ar. */
  document.querySelectorAll("img[data-real]").forEach(function (img) {
    var real = new Image();
    real.onload = function () {
      img.src = img.getAttribute("data-real");
      img.removeAttribute("data-real");
    };
    real.src = img.getAttribute("data-real");
  });
})();
