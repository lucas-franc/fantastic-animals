import initNumbersAnimation from "./numbers-animation.js";

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const animalsResponse = await fetch(url);
    const animalsJson = await animalsResponse.json();
    const gridNumbers = document.querySelector(".grid-numbers");
    animalsJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      gridNumbers.appendChild(divAnimal);
    });
    initNumbersAnimation();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  fetchAnimals("./animalsapi.json");
}
