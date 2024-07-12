let form = document.querySelector("form");


function handleSubmit(e) {
e.preventDefault();
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;

let nameError = document.getElementById("nameError");
let passwordError = document.getElementById("passwordError");

nameError.textContent = "";
passwordError.textContent = "";

let isValid = true;

if (name === "") {
    nameError.textContent = "Name is required";
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

  if (!isValid) {
    return;
  }
  console.log({ name, password });
  window.location.replace("navigation.html");
  alert("Login succesfully\n"+"username="+name+"\npassword="+password);
}

form.addEventListener("submit", handleSubmit);
