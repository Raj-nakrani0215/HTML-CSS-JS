// Initially hide all error messages
document.getElementById('username-error').style.display = 'none';
document.getElementById('email-error').style.display = 'none';
document.getElementById('password-error').style.display = 'none';
document.getElementById('confirm-password-error').style.display = 'none';

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // Username validation string method
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('username-error');
    if (username !== username.toUpperCase()) {
        usernameError.style.display = 'block';
        usernameError.style.color = 'red';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Email validation test regex etc..
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        emailError.style.color = 'red';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation lenght
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    if (password.length < 6) {
        passwordError.style.display = 'block';
        passwordError.style.color = 'red';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm Password validation both are same
    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.style.color = 'red';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        // Form is valid, submit or perform other actions
        console.log('Form is valid and ready to be submitted');
    }
});
