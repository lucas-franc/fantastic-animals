import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdownMenus = document.querySelectorAll(dropdown);
    this.activeClass = 'active';

    if (events == undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, ['touchstart', 'click'], () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      menu.addEventListener('click', this.activeDropdownMenu);
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
