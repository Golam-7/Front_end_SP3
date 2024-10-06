
document.addEventListener('DOMContentLoaded', function() {
    const saveInfoCheckbox = document.getElementById('save-info-checkbox');
    const firstNameInput = document.querySelector('input[name="firstName"]');
    const streetAddressInput = document.querySelector('input[name="streetAddress"]');
    const townCityInput = document.querySelector('input[name="townCity"]');
    const phoneNumberInput = document.querySelector('input[name="phoneNumber"]');
    const emailAddressInput = document.querySelector('input[name="emailAddress"]');
    const companyNameInput = document.querySelector('input[name="companyName"]');
    const apartment= document.querySelector('input[name="apartment"]');

    // Load stored data if available
    if (localStorage.getItem('billingDetails')) {
        const billingDetails = JSON.parse(localStorage.getItem('billingDetails'));
        firstNameInput.value = billingDetails.firstName;
        streetAddressInput.value = billingDetails.streetAddress;
        townCityInput.value = billingDetails.townCity;
        phoneNumberInput.value = billingDetails.phoneNumber;
        emailAddressInput.value = billingDetails.emailAddress;
        companyNameInput.value = billingDetails.companyName;
        apartment.value = billingDetails.apartment;
    }

    // Save data to local storage when the checkbox is checked
    saveInfoCheckbox.addEventListener('change', function() {
        if (this.checked) {
            const billingDetails = {
                firstName: firstNameInput.value,
                streetAddress: streetAddressInput.value,
                townCity: townCityInput.value,
                phoneNumber: phoneNumberInput.value,
                emailAddress: emailAddressInput.value,
                companyName: companyNameInput.value,
                apartment: companyNameInput.value
            };
            localStorage.setItem('billingDetails', JSON.stringify(billingDetails));
        } else {
            localStorage.removeItem('billingDetails');
        }
    });
});
