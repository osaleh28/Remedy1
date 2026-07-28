// ===== Element references =====
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
const loginError = document.getElementById('login-error');

// ===== Login form submit =====
// Checks the entered email/password against the credentials saved in
// localStorage during sign-up. If they match, sends the user to the
// dashboard. Otherwise shows an error message.
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
