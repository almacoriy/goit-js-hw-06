const refs = {
  rangeInput: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.rangeInput.addEventListener("input", onRangeChange);

function onRangeChange(event) {
  const { value } = event.target;

  refs.text.style.fontSize = `${value}px`;
}
