function validateForm() {

    // Get values
    
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    document.getElementById("successMsg").innerText = "";

    let isValid = true;

    // Name validation
    let namePattern = /^[A-Za-z]+$/;
    if (firstName === "") {
    document.getElementById("firstNameError").innerText = "First name is required";
    isValid = false;
    } else if (!namePattern.test(firstName)) {
    document.getElementById("firstNameError").innerText = "Only alphabets allowed";
    isValid = false;
    }


    if (lastName === "") {
    document.getElementById("lastNameError").innerText = "Last name is required";
    isValid = false;
    } else if (!namePattern.test(lastName)) {
    document.getElementById("lastNameError").innerText = "Only alphabets allowed";
    isValid = false;
    }


    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    // Phone validation
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone number is required";
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Minimum 6 characters required";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Confirm password is required";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    // Success message
    if (isValid) {
        document.getElementById("successMsg").innerText = "Registration Successful!";
    }

    return false; // stop actual submission (UI only)
}
