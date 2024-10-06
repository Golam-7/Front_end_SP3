function saveStoreSettings() {
    const storeName = document.getElementById('store-name').value;
    const phone = document.getElementById('phone').value;
    const storeEmail = document.getElementById('store-contact-email').value;
    const senderEmail = document.getElementById('sender-email').value;
    const businessName = document.getElementById('business-name').value;
    const countryRegion = document.getElementById('country_region').value;
    const address = document.getElementById('address').value;
    const apartment = document.getElementById('apartment').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const pinCode = document.getElementById('pin-code').value;
    const timeZone = document.getElementById('timeZones').value;
    const unitSystem = document.getElementById('unitSystemDropdown').value;
    const weightUnit = document.getElementById('weightUnits').value;
    const currency = document.getElementById('currency-store').value;
    const prefix = document.getElementById('prefix').value;
    const suffix = document.getElementById('suffix').value;

    const storeData = {
        storeName,
        phone,
        storeEmail,
        senderEmail,
        businessName,
        countryRegion,
        address,
        apartment,
        city,
        state,
        pinCode,
        timeZone,
        unitSystem,
        weightUnit,
        currency,
        prefix,
        suffix
    };

    localStorage.setItem('storeSettingsData', JSON.stringify(storeData));
    alert('Store settings saved successfully!');
}

function loadStoreSettings() {
    const savedData = localStorage.getItem('storeSettingsData');

    if (savedData) {
        const storeData = JSON.parse(savedData);

        document.getElementById('store-name').value = storeData.storeName || '';
        document.getElementById('phone').value = storeData.phone || '';
        document.getElementById('store-contact-email').value = storeData.storeEmail || '';
        document.getElementById('sender-email').value = storeData.senderEmail || '';
        document.getElementById('business-name').value = storeData.businessName || '';
        document.getElementById('country_region').value = storeData.countryRegion || '';
        document.getElementById('address').value = storeData.address || '';
        document.getElementById('apartment').value = storeData.apartment || '';
        document.getElementById('city').value = storeData.city || '';
        document.getElementById('state').value = storeData.state || '';
        document.getElementById('pin-code').value = storeData.pinCode || '';
        document.getElementById('timeZones').value = storeData.timeZone || '';
        document.getElementById('unitSystemDropdown').value = storeData.unitSystem || '';
        document.getElementById('weightUnits').value = storeData.weightUnit || '';
        document.getElementById('currency-store').value = storeData.currency || '';
        document.getElementById('prefix').value = storeData.prefix || '';
        document.getElementById('suffix').value = storeData.suffix || '';
    }
}

function discardStoreSettings() {
    localStorage.removeItem('storeSettingsData');
    document.getElementById('store-name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('store-contact-email').value = '';
    document.getElementById('sender-email').value = '';
    document.getElementById('business-name').value = '';
    document.getElementById('country_region').value = '';
    document.getElementById('address').value = '';
    document.getElementById('apartment').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('pin-code').value = '';
    document.getElementById('timeZones').value = '';
    document.getElementById('unitSystemDropdown').value = '';
    document.getElementById('weightUnits').value = '';
    document.getElementById('currency-store').value = '';
    document.getElementById('prefix').value = '';
    document.getElementById('suffix').value = '';
    alert('Store settings discarded!');
}

document.querySelector('.save').addEventListener('click', saveStoreSettings);
document.querySelector('.discard').addEventListener('click', discardStoreSettings);

window.onload = loadStoreSettings;
