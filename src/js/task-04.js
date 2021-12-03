let counterValue = 0;

const refs = {
  decrement: document.querySelector("#counter button[data-action='decrement']"),
  increment: document.querySelector("#counter button[data-action='increment']"),
  value: document.querySelector("#value"),
};

refs.decrement.addEventListener("click", () => changeValue(-1));
refs.increment.addEventListener("click", () => changeValue(+1));

function changeValue(counterValue) {
  value.textContent = parseInt(value.textContent, 10) + counterValue;
}
