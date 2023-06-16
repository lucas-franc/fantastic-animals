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
    if (event.target === this) this.eventToggleModal(event);
  }
  addEventModal() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutCloseModal);
  }
  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addEventModal();
    }
  }
}
