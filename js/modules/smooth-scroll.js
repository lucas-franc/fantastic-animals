export default function initSmoothScroll() {
  const internLinks = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  internLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
