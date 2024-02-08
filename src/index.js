import './assets/scss/style.scss';

const fashionLandingPage = {
    init() {
        const toggleBtn = document.getElementById('navbarToggleBtn');
        const navbar = document.getElementById('navbar');
        const subscribeForm = document.getElementById('subscribe-form');

        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.subscribeFormHandler();
        });

        toggleBtn.addEventListener('click', () => {
            this.navbarHandler(navbar, toggleBtn);
        });
    },
    navbarHandler(navbar, toggleBtn) {
        navbar.classList.toggle('nav-list--active');
        toggleBtn.classList.toggle('btn--toggle--active');
    },
    subscribeFormHandler() {
        const email = document.getElementById('subscribe-email').value.trim();
        const messageBox = document.getElementById('subscribe-message');
        const emailPattern = /^[A-Za-z._\-0-9]*@[A-Za-z]*\.[a-z]{2,4}$/;

        if (!email || !email.match(emailPattern)) {
            messageBox.textContent = 'Does not look like a valid email';
            this.clearMessageBox();
            return;
        }
        // Here you could add your handler file or different way how to subscribe user
        messageBox.textContent = 'Thank you for subscribing.';
        this.resetInputValue();
        this.clearMessageBox();
    },
    clearMessageBox() {
        const messageBox = document.getElementById('subscribe-message');
        setTimeout(() => {
            messageBox.textContent = '';
        }, 2000);
    },
    resetInputValue() {
        const emailInput = document.getElementById('subscribe-email');
        emailInput.value = '';
    },
};

document.addEventListener('DOMContentLoaded', () => {
    fashionLandingPage.init();
});
