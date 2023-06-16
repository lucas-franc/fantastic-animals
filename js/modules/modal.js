export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open);
    this.closeButton = document.querySelector(close);
    this.containerModal = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutCloseModal = this.clickOutCloseModal.bind(this);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal() {
    this.containerModal.classList.toggle("active");
  }
  clickOutCloseModal(event) {
    if (event.target === this) toggleModal(event);
  }
  addEventModal() {
    this.openButton.addEventListener("click", toggleModal);
    this.closeButton.addEventListener("click", toggleModal);
    this.containerModal.addEventListener("click", clickOutCloseModal);
  }
  init() {
    if (openButton && closeButton && containerModal) {
      this.addEventModal();
    }
  }
}
