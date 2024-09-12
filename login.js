// script.js

// Switch between login and registration forms
function showRegistration() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('register-box').style.display = 'none';
}

// Validate Login Form
function validateLoginForm() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var errorMessage = document.getElementById('login-error');

    if (email === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    return true;
}

// Validate Registration Form
function validateRegisterForm() {
    var name = document.getElementById('register-name').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('register-error');

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    return true;
}
