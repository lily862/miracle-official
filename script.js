function startExperience() {
    // Trigger haptic feedback (if supported)
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }

    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');

    // 1. Fade out intro
    intro.classList.add('exit-effect');

    // 2. Fade in main content after transition
    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.add('active');
    }, 600);
}