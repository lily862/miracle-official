// Lightning Cursor Logic
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Reveal Logic
function revealExperience() {
    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');

    intro.classList.add('exit-effect');

    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.add('active');
    }, 800);
}