document.addEventListener('DOMContentLoaded', function () {
  const passwordField = document.querySelector('#password');
  const togglePasswordIcon = document.querySelector('#togglePassword');

  togglePasswordIcon.addEventListener('click', function () {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    
    this.classList.toggle('bi-eye', type === 'password');
    this.classList.toggle('bi-eye-slash', type === 'text');
  });
});

