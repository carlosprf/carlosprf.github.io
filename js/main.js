(function () {
  "use strict";

  /* ---------- Theme (claro/oscuro) ---------- */
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  }

  themeToggle.addEventListener("click", function () {
    const current =
      document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Idioma (ES / EN) ---------- */
  const langToggle = document.getElementById("lang-toggle");
  const langOptions = langToggle.querySelectorAll("[data-lang-option]");
  const i18nElements = document.querySelectorAll("[data-i18n]");
  const originalContent = new Map();

  i18nElements.forEach(function (el) {
    originalContent.set(el, el.innerHTML);
  });

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    langOptions.forEach(function (el) {
      el.classList.toggle("lang-active", el.getAttribute("data-lang-option") === lang);
    });

    i18nElements.forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (lang === "es") {
        el.innerHTML = originalContent.get(el);
      } else if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  const storedLang = localStorage.getItem("lang") || "es";
  if (storedLang === "en") applyLanguage("en");

  langToggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("lang") || "es";
    const next = current === "es" ? "en" : "es";
    applyLanguage(next);
    localStorage.setItem("lang", next);
  });

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Año en footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
