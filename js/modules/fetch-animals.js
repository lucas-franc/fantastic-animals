import NumbersAnimation from "./numbers-animation.js";

export default function fetchAnimals(url, target) {
  const gridNumbers = document.querySelector(target);
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    gridNumbers.appendChild(divAnimal);
  }

  function animationAnimalNumber() {
    const numbersAnimation = new NumbersAnimation(
      "[data-number]",
      ".numbers",
      "active"
    );
    numbersAnimation.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();

      animalsJson.forEach((animal) => {
        fillAnimals(animal);
      });
      animationAnimalNumber();
    } catch (error) {
      console.log(error);
    }
  }
  return createAnimals();
}
