import NumbersAnimation from "./numbers-animation.js";

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      const gridNumbers = document.querySelector(".grid-numbers");
      animalsJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        gridNumbers.appendChild(divAnimal);
      });
      const numbersAnimation = new NumbersAnimation(
        "[data-number]",
        ".numbers",
        "active"
      );
      numbersAnimation.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimals("./animalsapi.json");
}
