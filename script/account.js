window.onload = function () {
  // Get logged-in user's email from localStorage
  const loggedInEmail = localStorage.getItem("loggedInUser");

  // If the user is not logged in, redirect to the login page
  if (!loggedInEmail) {
    alert("You need to log in to access your account.");
    window.location.href = "login.html"; // Redirect to login page
    return;
  }

  // Fetch the user data from localStorage using the email
  const userData = localStorage.getItem(loggedInEmail);

  // If user data doesn't exist, prompt them to log in or sign up
  if (!userData) {
    alert("No user found. Please sign up.");
    window.location.href = "signup.html"; // Redirect to sign-up page
    return;
  }

  const user = JSON.parse(userData);

  // Populate the form fields with the stored user data
  document.getElementById("name1").value = user.name.split(" ")[0]; // First name (split to get the first part)
  document.getElementById("name2").value = user.name.split(" ")[1] || ""; // Last name (split to get the second part)
  document.getElementById("email").value = user.email; // Email
  document.getElementById("address").value = user.address || ""; // Address (if available)
};

// Function to handle saving profile changes
document.getElementById("save").addEventListener("click", function () {
  const firstName = document.getElementById("name1").value;
  const lastName = document.getElementById("name2").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const password = document.getElementById("Password").value; // Old password (validation will be needed)
  const newPassword = document.getElementById("NewP").value; // New password
  const confirmPassword = document.getElementById("Confirm").value; // Confirm new password

  // Validate the input
  if (!firstName || !lastName || !email) {
    alert("All fields are required!");
    return;
  }

  if (newPassword && newPassword !== confirmPassword) {
    alert("New passwords do not match.");
    return;
  }

  // Get the logged-in user's email to update the data in localStorage
  const loggedInEmail = localStorage.getItem("loggedInUser");

  // Fetch the user data from localStorage
  const userData = localStorage.getItem(loggedInEmail);
  if (!userData) {
    alert("No user found. Please log in.");
    window.location.href = "login.html"; // Redirect to login page
    return;
  }

  const user = JSON.parse(userData);

  // Update user data
  user.name = `${firstName} ${lastName}`;
  user.email = email;
  user.address = address;

  // If new password is provided, update the password
  if (newPassword) {
    user.password = newPassword; // Update password if new one is provided
  }

  // Save updated user data back to localStorage
  localStorage.setItem(loggedInEmail, JSON.stringify(user));

  // Optionally, give feedback and refresh the page
  alert("Profile updated successfully!");
  window.location.reload(); // Refresh the page to reflect changes
});

// Optional: Handle the logout functionality
document.getElementById("logout").addEventListener("click", function () {
  // Remove the logged-in user from localStorage
  localStorage.removeItem("loggedInUser");

  // Redirect to login page
  alert("You have been logged out.");
  window.location.href = "login.html"; // Redirect to login page
});
