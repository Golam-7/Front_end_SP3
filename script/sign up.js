// Function to handle sign-up
function signup(e) {
  e.preventDefault();

  // Fetch input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Simple validation for empty fields
  if (!name || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
  }

  // Password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Simple password validation (optional, improve as necessary)
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Check if the user already exists
  if (localStorage.getItem(email)) {
    alert("User with this email already exists. Please login.");
    return;
  }

  // Create user object and save to localStorage
  const user = { name, email, password }; // Hash password if necessary
  localStorage.setItem(email, JSON.stringify(user));

  console.log("User added successfully:", user);
  alert("Account created successfully! Please login.");

  // Redirect to login page
  window.location.href = "login.html";
}

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
