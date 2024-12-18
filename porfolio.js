document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close menu after click (on mobile)
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Fade-In Effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});


//Form Submit
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);
    const responseContainer = document.getElementById('form-response');

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' },
        });

        if (response.ok) {
            responseContainer.style.color = 'green';
            responseContainer.textContent = 'Thank you! Your message has been sent.';
            responseContainer.style.display = 'block';
            form.reset(); // Clear form inputs
        } else {
            responseContainer.style.color = 'red';
            responseContainer.textContent = 'Oops! Something went wrong. Please try again.';
            responseContainer.style.display = 'block';
        }
    } catch (error) {
        responseContainer.style.color = 'red';
        responseContainer.textContent = 'Oops! Something went wrong. Please try again.';
        responseContainer.style.display = 'block';
    }
});


// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = (scrollTop / scrollHeight) * 100;

    // Set the progress bar width
    document.getElementById('progress-bar').style.width = scrolledPercentage + '%';
});


//Smooth Scrolling
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach((section) => observer.observe(section));
