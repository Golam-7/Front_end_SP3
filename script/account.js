document.getElementById('save')
.addEventListener('click', function() {
  const profileData = {
      firstname: document.getElementById('name1').value,
      lastname: document.getElementById('name2').value,
      email: document.getElementById('email').value,
      address: document.getElementById('adress').value,
      password: document.getElementById('Password').value,
      newPassword: document.getElementById('NewP').value,
      confirmPassword: document.getElementById('Confirm').value,
  };
  
  localStorage.setItem('profileData', JSON.stringify(profileData));
  
});