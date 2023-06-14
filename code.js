const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

nameInput.addEventListener("input", validateInput);
emailInput.addEventListener("input", validateInput);
phoneInput.addEventListener("input", validateInput);

function validateInput() {
  if (this.value === "") {
    this.classList.remove("success");
    this.classList.add("error");
  } else {
    this.classList.remove("error");
    this.classList.add("success");
  }
}

function validatePhoneNumber() {
  const phoneInput = document.getElementById("phone");
  const phoneNumber = phoneInput.value.trim();

  if (phoneNumber.length !== 10) {
    phoneInput.setCustomValidity(
      "Debe ingresar un número de teléfono de 10 dígitos."
    );
  } else {
    phoneInput.setCustomValidity("");
  }
}
