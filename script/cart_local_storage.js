
// Function to save cart data to local storage
function saveCartToLocalStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to get cart data from local storage
function getCartFromLocalStorage() {
    const cartData = localStorage.getItem('cartItems');
    return cartData ? JSON.parse(cartData) : [];
}

// Function to update cart items displayed
//
// on the page
function updateCartDisplay(cartItems) {
    const cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML = ''; // Clear current cart items

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart_items';
        cartItem.innerHTML = `
            <div class="cart_item">
                <img src="${item.img}" class="cart_img" alt="">
                <span class="cart_header_title">${item.title}</span>
            </div>
            <div class="cart_item_price">${item.price}</div>
            <input type="number" class="cart_item_qty" value="${item.quantity}" min="1" data-title="${item.title}">
            <div class="cart_item_subtotal">${item.subtotal}</div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Function to calculate and update subtotal
function calculateSubtotal(price, quantity) {
    return price * quantity;
}

// Load cart data when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = getCartFromLocalStorage();
    updateCartDisplay(cartItems);

    // Add event listener to update local storage when quantity changes
    document.querySelector('.cart').addEventListener('input', (e) => {
        if (e.target.classList.contains('cart_item_qty')) {
            const title = e.target.getAttribute('data-title');
            const quantity = parseInt(e.target.value, 10);

            const updatedCartItems = cartItems.map(item => {
                if (item.title === title) {
                    item.quantity = quantity;
                    item.subtotal = calculateSubtotal(item.price, quantity);
                }
                return item;
            });

            saveCartToLocalStorage(updatedCartItems);
            updateCartDisplay(updatedCartItems);
        }
    });
});

// Initial setup to add items to cart (example only)
const exampleItems = [
    { img: "./img/item-3.png", title: "LCD Monitor", price: 650, quantity: 1, subtotal: 650 },
    { img: "./img/item-1.png", title: "HI Gamepad", price: 550, quantity: 1, subtotal: 550 }
];

// Save the example items on first load if no items exist
if (!localStorage.getItem('cartItems')) {
    saveCartToLocalStorage(exampleItems);
    updateCartDisplay(exampleItems);
}
