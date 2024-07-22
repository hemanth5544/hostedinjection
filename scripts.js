document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
        form.reset();
    });
});

function navigate(page) {
    document.querySelectorAll('.page').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(page).classList.remove('hidden');
}
