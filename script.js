const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('password-error');
const email = document.getElementById('email');
const firstName = document.getElementById('first-name');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    errorMessage.textContent = 'Passwords do not match.';
  } else {
    errorMessage.textContent = '';
    localStorage.setItem('userEmail', email.value);
    localStorage.setItem('userPassword', password.value);
    localStorage.setItem('userFirstName', firstName.value);
    window.location.href = 'login.html';
  }
});
