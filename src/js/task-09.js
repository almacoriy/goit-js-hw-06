function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onClick);

function onClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();
}
