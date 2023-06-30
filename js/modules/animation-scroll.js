export default class AnimationScroll {
  constructor(anime) {
    this.sections = document.querySelectorAll(anime);
    this.windowHalf = window.innerHeight * 0.6;
    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  init() {
    this.scrollAnimation();
    window.addEventListener('scroll', this.scrollAnimation);
  }
}
