let counterValue = 0;
let counter = 0;

const refs = {
  decrement: document.querySelector("#counter button[data-action='decrement']"),
  increment: document.querySelector("#counter button[data-action='increment']"),
  value: document.querySelector("#value"),
};

refs.decrement.addEventListener("click", () => changeValue(-1));
refs.increment.addEventListener("click", () => changeValue(+1));
refs.value.textContent = counter;

function changeValue(counterValue) {
  counter += counterValue;
  refs.value.textContent = counter;
}
