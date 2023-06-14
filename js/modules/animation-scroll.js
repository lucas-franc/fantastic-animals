export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  function scrollAnimation() {
    const windowHalf = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }
  if (sections.length) {
    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}
