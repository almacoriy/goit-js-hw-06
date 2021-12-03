const refs = {
  input: document.querySelector("#validation-input"),
  data: document.querySelector('input[data-length="6"]'),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (refs.input.value.trim().length === Number(refs.data.dataset.length)) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
    return;
  }
  refs.input.classList.add("invalid");
  refs.input.classList.remove("valid");
}
