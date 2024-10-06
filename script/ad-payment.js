function saveFormData() {
    const billingMethod = document.querySelector('input[name="billing"]:checked').id;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const country = document.getElementById('inputCountry').value;
    const zipCode = document.getElementById('zipCode').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;

    const paymentData = {
        billingMethod,
        cardNumber,
        cardName,
        country,
        zipCode,
        expDate,
        cvv
    };

    localStorage.setItem('paymentData', JSON.stringify(paymentData));
    alert('Payment details have been saved!');
}

function loadFormData() {
    const savedData = localStorage.getItem('paymentData');

    if (savedData) {
        const paymentData = JSON.parse(savedData);

        document.getElementById(paymentData.billingMethod).checked = true;
        document.getElementById('cardNumber').value = paymentData.cardNumber || '';
        document.getElementById('cardName').value = paymentData.cardName || '';
        document.getElementById('inputCountry').value = paymentData.country || '';
        document.getElementById('zipCode').value = paymentData.zipCode || '';
        document.getElementById('expDate').value = paymentData.expDate || '';
        document.getElementById('cvv').value = paymentData.cvv || '';
    }
}

function discardFormData() {
    localStorage.removeItem('paymentData');
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardName').value = '';
    document.getElementById('inputCountry').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('expDate').value = '';
    document.getElementById('cvv').value = '';
    alert('Payment details have been discarded!');
}

document.querySelector('.save').addEventListener('click', saveFormData);
document.querySelector('.discard').addEventListener('click', discardFormData);

window.onload = loadFormData;
