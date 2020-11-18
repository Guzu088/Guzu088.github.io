const toggleButton = document.querySelector('.toggle-button');
const contactsMobile = document.querySelector('.contacts-mobile');
const contactsMobileInner = document.querySelector('.contacts-mobile-inner');

toggleButton.addEventListener('click', () => {
    contactsMobileInner.classList.toggle('active');
    console.log('you clicked me');
})