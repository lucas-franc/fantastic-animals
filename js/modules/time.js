export default function initTime() {}

const expedient = document.querySelector("[data-week]");
const weekdays = expedient.dataset.week.split(",").map(Number);
const weekExpedient = expedient.dataset.time.split(",").map(Number);
const dateNow = new Date();
const dayNow = dateNow.getDay();
const timeNow = dateNow.getHours();

const openWeek = weekdays.indexOf(dayNow) !== -1;
let openDay = timeNow >= weekExpedient[0] && timeNow <= weekExpedient[1];

if (openDay && openWeek) {
  expedient.classList.add("open");
}

console.log(weekExpedient);
