import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(button, items, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(items);
    if (events == undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add('active');
    this.menuList.classList.add('active');
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }

  init() {
    if (this.menuButton) {
      this.events.forEach((event) =>
        this.menuButton.addEventListener(event, this.openMenu),
      );
    }
    return this;
  }
}
