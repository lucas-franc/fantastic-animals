import debounce from './debounce.js';

export default class AnimationScroll {
  constructor(anime) {
    this.sections = document.querySelectorAll(anime);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 25);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.windowHalf,
      };
    });
  }

  checkDistance() {
    console.log('teste');
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
