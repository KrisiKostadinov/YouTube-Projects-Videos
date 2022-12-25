const openButton = document.querySelector('[data-open-button]');
const closeButton = document.querySelector('[data-close-button]');
const mobileNavbar = document.querySelector('[data-mobile-navbar]');

openButton.addEventListener('click', () => {
    mobileNavbar.classList.add('show');
});

closeButton.addEventListener('click', () => {
    mobileNavbar.classList.remove('show');
});