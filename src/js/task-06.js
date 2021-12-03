const refs = {
  input: document.querySelector("#validation-input"),
  data: document.querySelector('input[data-length="6"]'),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (refs.input.value.trim().length === Number(refs.data.dataset.length)) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
    return;
  }
  refs.input.classList.remove("valid");
  refs.input.classList.add("invalid");
}
