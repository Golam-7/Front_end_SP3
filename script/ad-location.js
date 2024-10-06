function saveData() {
    const locationName = document.getElementById('store-name').value;
    const fulfillOrders = document.getElementById('fulfill-orders').checked;
    const countryRegion = document.getElementById('country_region').value;
    const address = document.getElementById('address').value;
    const apartment = document.getElementById('apartment').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const pinCode = document.getElementById('pin-code').value;

    const formData = {
        locationName,
        fulfillOrders,
        countryRegion,
        address,
        apartment,
        phone,
        city,
        state,
        pinCode
    };

    localStorage.setItem('storeLocationData', JSON.stringify(formData));
    alert('Changes have been saved!');
}

function loadData() {
    const savedData = localStorage.getItem('storeLocationData');

    if (savedData) {
        const formData = JSON.parse(savedData);

        document.getElementById('store-name').value = formData.locationName || '';
        document.getElementById('fulfill-orders').checked = formData.fulfillOrders || false;
        document.getElementById('country_region').value = formData.countryRegion || '';
        document.getElementById('address').value = formData.address || '';
        document.getElementById('apartment').value = formData.apartment || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('city').value = formData.city || '';
        document.getElementById('state').value = formData.state || '';
        document.getElementById('pin-code').value = formData.pinCode || '';
    }
}

function discardData() {
    localStorage.removeItem('storeLocationData');
    document.getElementById('myform').reset();
    alert('Changes have been discarded!');
}

document.querySelector('.save').addEventListener('click', saveData);
document.querySelector('.discard').addEventListener('click', discardData);

window.onload = loadData;