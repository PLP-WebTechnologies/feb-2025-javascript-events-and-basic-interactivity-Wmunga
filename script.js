// Grab the elements
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePasswordButton = document.getElementById('togglePassword');

// Email validation function
function validateEmail() {
    const email = emailInput.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
    emailError.textContent = "";
    return true;
}

// Password validation function
function validatePassword() {
    const password = passwordInput.value;
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        return false;
    }
    passwordError.textContent = "";
    return true;
}

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        alert("Form submitted successfully!");
        // You can proceed with further actions like form submission to server
    } else {
        alert("Please correct the errors and try again.");
    }
});

// Toggle password visibility
togglePasswordButton.addEventListener('click', function () {
    const currentType = passwordInput.type;
    if (currentType === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Show';
    }
});

// Validate email on input change
emailInput.addEventListener('input', validateEmail);

// Validate password on input change
passwordInput.addEventListener('input', validatePassword);
