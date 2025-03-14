// Smooth Mouse Follower
document.addEventListener('mousemove', (e) => {
    const follower = document.querySelector('.mouse-follower');
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');
    body.classList.toggle('dark', !isDark);
    body.classList.toggle('light', isDark);
    
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    if (isDark) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    }
});

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme);
if (savedTheme === 'light') {
    document.querySelector('.theme-icon').textContent = '☀️';
    document.querySelector('.theme-text').textContent = 'Light';
}

// Smooth Scroll
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Card Hover Effects
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
