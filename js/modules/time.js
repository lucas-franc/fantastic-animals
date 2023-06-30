export default class Expedient {
  constructor(expedient, activeClass) {
    this.expedient = document.querySelector(expedient);
    this.activeClass = activeClass;
  }

  expedientData() {
    this.weekdays = this.expedient.dataset.week.split(',').map(Number);
    this.weekExpedient = this.expedient.dataset.time.split(',').map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const openWeek = this.weekdays.indexOf(this.dayNow) !== -1;
    const openDay =
      this.timeNow >= this.weekExpedient[0] &&
      this.timeNow <= this.weekExpedient[1];
    return openWeek && openDay;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.expedient.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.expedient) {
      this.expedientData();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
