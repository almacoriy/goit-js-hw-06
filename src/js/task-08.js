const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert("All fields must be filled");
    return;
  }
  console.log("formDataObject ->", { mail, password });
  formElements.email.value = "";
  formElements.password.value = "";
}
