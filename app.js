let form = document.querySelector("form");

function handleSubmit(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dropdown = document.getElementById("dropdown").value;
  let checkbox = document.getElementById("checkbox").checked;

  let radios = document.getElementsByName("radio");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let dropdownError = document.getElementById("dropdownError");
  let checkboxError = document.getElementById("checkboxError");
  let radioError = document.getElementById("radioError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  dropdownError.textContent = "";
  checkboxError.textContent = "";
  radioError.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.search(/[a-z]/i) < 0) {
    passwordError.textContent =
      "Your password must contain at least one letter.";
    isValid = false;
  } else if (password.search(/[0-9]/) < 0) {
    passwordError.textContent =
      "Your password must contain at least one digit.";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Your password must be at least 8 characters";
    isValid = false;
  }

  if (dropdown === "") {
    dropdownError.textContent = "Please select one option";
    isValid = false;
  }

  if (!checkbox) {
    checkboxError.textContent = "Please select checkbox";
    isValid = false;
  }

  let radioValue;
  radios.forEach((radio) => {
    if (radio.checked) {
      radioValue = radio.value;
    }
  });

  if (!radioValue) {
    radioError.textContent = "Please choose one option";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  console.log({ name, email, password, dropdown, checkbox, radioValue });
  window.location.replace("navigation.html");
}

form.addEventListener("submit", handleSubmit);
