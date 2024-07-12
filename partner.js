
let form = document.querySelector("form");

    function handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let name2 = document.getElementById("name2").value;
        let name3 = document.getElementById("name3").value;
        

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let numberError = document.getElementById("numberError");
        let name2Error = document.getElementById("name2Error");
        let name3Error = document.getElementById("name3Error"); 
      

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

        if (number === "") {
            numberError.textContent = "phone number is required";
            isValid = false;
        }else if (!/^\d{10}$/.test(number)) {
            numberError.textContent = "Please enter a valid 10-digit phone number";
            isValid = false;
        }
         
       if (name2 === "") {
            name2Error.textContent = "city is required";
            isValid = false;
        }else if (!/^[a-zA-Z\s'-]+$/.test(name2)) {
           name2Error.textContent = "Please enter a valid name";
           isValid = false;
        }

        if (name3=== "") {
            name3Error.textContent = "state is required";
            isValid = false;
        }else if (!/^[a-zA-Z\s'-]+$/.test(name3)) {
           name3Error.textContent = "Please enter a valid name";
           isValid = false;
            }
        if (!isValid) {
                return;
        }

        console.log({ name, email,number,name2,name3});
        window.location.replace("navigation.html");
        alert("contact Succesfully");
    }

    form.addEventListener("submit", handleSubmit);