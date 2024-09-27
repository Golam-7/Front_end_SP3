const form = document.getElementById('myform');
const firstNameInput = document.getElementById('name1');
const lastNameInput = document.getElementById('name2');
const emailInput = document.getElementById('emai');
const addressInput = document.getElementById('adress');
const passwordInput = document.getElementById('Password');
const newPasswordInput = document.getElementById('NewP');
const confirmPasswordInput = document.getElementById('Confirm');
const savBtn = document.getElementById('save');
function saveData() {
  const userData = {
    name1: firstNameInput.value,
    name2: lastNameInput.value,
    email: emailInput.value,
    address: addressInput.value,
    password: passwordInput.value,
    newP: newPasswordInput.value,
    confirm: confirmPasswordInput.value,
  };

  localStorage.setItem('userData', JSON.stringify(userData));
}

form.addEventListener('button', (event) => {
  event.preventDefault();
  saveData();
});