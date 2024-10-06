function saveFormData() {
    const formData = {
      cardNumber: document.getElementById("cardNumber").value,
      cardName: document.getElementById("cardName").value,
      country: document.getElementById("inputCountry").value,
      zipCode: document.getElementById("zipCode").value,
      expDate: document.getElementById("expDate").value,
      cvv: document.getElementById("cvv").value
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved to local storage.");
  }