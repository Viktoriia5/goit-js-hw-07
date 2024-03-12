const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    return window.alert('All form fields must be filled in');
  }

  let emailInput = document.querySelector('input[name=email]');
  let passwordInput = document.querySelector('input[type=password]');

  let result = {
    email: emailInput.value,
    name: passwordInput.value,
  };
  console.log(result);
  document.querySelector('.login-form').reset();
}
