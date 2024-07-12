
let form = document.querySelector("form");

    function handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let phoneError = document.getElementById("phoneError");

        let isValid = true;

        if (name === "") {
         nameError.textContent = "Name is required";
         isValid = false;
        }else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            nameError.textContent = "Please enter a valid name";
            isValid = false;
        }

        if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
        }

        if (phone === "") {
            phoneError.textContent = "phone number is required";
            isValid = false;
        }else if (!/^\d{10}$/.test(phone)) {
            phoneError.textContent = "Please enter a valid 10-digit phone number";
            isValid = false;
        }
        if (!isValid) {
             return;
        }
    

        console.log({ name, email, phone });
        window.location.replace("navigation.html");
        alert("contact Succesfully");
    }

    form.addEventListener("submit", handleSubmit);