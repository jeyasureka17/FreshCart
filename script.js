// Open Modal
const signInButton = document.querySelector('.sign-in-button');
const signInModal = document.getElementById('signInModal');
const closeModal = document.querySelector('.close-button');
const cancelButton = document.querySelector('.cancel');

// Open modal on button click
signInButton.addEventListener('click', () => {
    signInModal.style.display = 'flex';
});

// Close modal on close button or cancel button click
closeModal.addEventListener('click', () => {
    signInModal.style.display = 'none';
});

cancelButton.addEventListener('click', () => {
    signInModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === signInModal) {
        signInModal.style.display = 'none';
    }
});
// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const cartButton = document.querySelector('.cart-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-button');
const newsletterForm = document.querySelector('.newsletter-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Update Cart Count
let cartItemCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemCount++;
        cartButton.textContent = `Cart (${cartItemCount})`;
        alert('Item added to cart!');
    });
});


// Newsletter Subscription
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value) {
        alert(`Thank you for subscribing, ${emailInput.value}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Close mobile navigation when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
