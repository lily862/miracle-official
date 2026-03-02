// Lighting Cursor (Only follows on desktop)
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    if (window.matchMedia("(pointer: fine)").matches) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

function revealExperience() {
    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');

    // Haptic for mobile
    if (navigator.vibrate) navigator.vibrate(10);

    intro.classList.add('exit-effect');

    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.add('active');
    }, 800);
}