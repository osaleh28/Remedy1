const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const savedEmail = localStorage.getItem('userEmail');
  const savedPassword = localStorage.getItem('userPassword');

  if (loginEmail.value === savedEmail && loginPassword.value === savedPassword) {
    loginError.textContent = '';
    window.location.href = 'dashboard.html';
  } else {
    loginError.textContent = 'Incorrect email or password.';
  }
});
