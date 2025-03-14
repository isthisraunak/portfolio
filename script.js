// Mouse Follower
document.addEventListener('mousemove', (e) => {
    const follower = document.querySelector('.mouse-follower');
    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

// Smooth Scroll
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth'
    });
});
