export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelector(menu);
    this.tabContent = document.querySelector(content);
    this.activeClass = "active";
  }
  activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });
    tabContent[index].classList.add("active", tabContent[index].dataset.anime);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeClass(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
