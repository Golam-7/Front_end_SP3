// Function to handle login
function login(e) {
  e.preventDefault();

  // Fetch input values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  // Fetch user data from localStorage
  const userData = localStorage.getItem(email);

  // Validate user data
  if (!userData) {
    result.innerHTML = "Wrong email. Please sign up.";
    return;
  }

  const user = JSON.parse(userData);

  // Check if the password matches
  if (password === user.password) {
    result.innerHTML = "Login successful!";
    alert("You are now logged in!");

    // Store session (optional)
    localStorage.setItem("loggedInUser", email);

    // Redirect to homepage or dashboard
    window.location.href = "index.html";
  } else {
    result.innerHTML = "Wrong password. Try again.";
  }
}
