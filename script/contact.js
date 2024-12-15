// Function to save data to local storage
function saveToLocalStorage() {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  localStorage.setItem("contactForm", JSON.stringify(formData));
}

// Function to retrieve data from local storage
function getFromLocalStorage() {
  const storedData = localStorage.getItem("contactForm");
  if (storedData) {
    const formData = JSON.parse(storedData);
    document.getElementById("name").value = formData.name;
    document.getElementById("email").value = formData.email;
    document.getElementById("phone").value = formData.phone;
    document.getElementById("message").value = formData.message;
  }
}

// Function to show a success message and redirect to the home page
function showSuccessMessage() {
  alert("Your message has been sent successfully!");

  // Redirect after 2 seconds to allow the user to see the success message
  setTimeout(function () {
    window.location.href = "index.html"; // Redirect to homepage
  }, 2000); // Delay in milliseconds (2 seconds)
}

// Add event listener to the form submit button
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    saveToLocalStorage(); // Save the form data to localStorage
    showSuccessMessage(); // Show success message and redirect
  });

  getFromLocalStorage(); // Retrieve data from localStorage (if any)
});
