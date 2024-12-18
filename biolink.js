// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Contact Modal Toggle
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');

// Open the Contact Modal
contactBtn.addEventListener('click', () => {
    contactModal.classList.remove('hidden');
    contactModal.classList.add('visible');
});

// Close the Contact Modal
closeModal.addEventListener('click', () => {
    contactModal.classList.add('hidden');
    contactModal.classList.remove('visible');
});

// Close Modal When Clicking Outside of It
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.add('hidden');
        contactModal.classList.remove('visible');
    }
});

// Smooth Typing Animation for Typing Text
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    typingText.style.animationPlayState = 'running'; // Starts the typing animation when the page loads
});
