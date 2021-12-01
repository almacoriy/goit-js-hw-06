const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const createListElement = (options) => {
  return options.map((option) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = option;

    return listEl;
  });
};

// console.log(ingredientsEl);
const elements = createListElement(ingredients);
ingredientsEl.append(...elements);
