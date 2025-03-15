// Smooth Mouse Follower
document.addEventListener('mousemove', (e) => {
    const follower = document.querySelector('.mouse-follower');
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Smooth Scroll
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
