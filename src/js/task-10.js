function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  div: document.querySelector("#boxes"),
};

let amount;
let sizeDiv = 30;

refs.input.addEventListener("input", onInputChange);
refs.buttonCreate.addEventListener("click", () => createBoxes(amount));
refs.buttonDestroy.addEventListener("click", () => destroyBoxes());
refs.div.style.display = "flex";
refs.div.style.flexWrap = "wrap";

function onInputChange() {
  amount = refs.input.value;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement("div");
    sizeDiv = sizeDiv + 10;

    element.style.marginTop = "30px";
    element.style.marginRight = "10px";
    element.style.width = sizeDiv + "px";
    element.style.height = sizeDiv + "px";
    element.style.backgroundColor = getRandomHexColor();
    refs.div.append(element);
  }
}

function destroyBoxes() {
  refs.div.innerHTML = "";
  refs.input.value = "";
  sizeDiv = 30;
  amount = 0;
}
