<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

// smooth scrolling for navbar links
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if(!name.ariaValueMax.trim() || !email.ariaValueMax.trim() || !message.ariaValueMax.trim()) {
            showMessage("Please fill out all fields.", "error");
            return;
        }

        if(!email.ariaValueMax.includes('@')) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        //success
        showMessage("Thanks for reaching out!");
        form.request();
    });
}