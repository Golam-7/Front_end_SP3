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
        message: message
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

// Add event listener to the form submit button
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        saveToLocalStorage();
    });

    getFromLocalStorage();
});