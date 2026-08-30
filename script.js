(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var burger = document.getElementById("navBurger");
  var navLinks = document.getElementById("navLinks");

  if (!header || !burger || !navLinks) return;

  function closeMenu() {
    header.classList.remove("nav-open");
    burger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    var isOpen = header.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close the mobile menu after choosing a link.
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close when clicking outside the menu.
  document.addEventListener("click", function (e) {
    if (!header.classList.contains("nav-open")) return;
    if (header.contains(e.target)) return;
    closeMenu();
  });

  // Close on Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Close automatically if the viewport grows past the mobile breakpoint.
  var mq = window.matchMedia("(min-width: 901px)");
  function handleBreakpointChange(e) {
    if (e.matches) closeMenu();
  }
  if (mq.addEventListener) mq.addEventListener("change", handleBreakpointChange);
  else if (mq.addListener) mq.addListener(handleBreakpointChange);
})();
