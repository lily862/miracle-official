function revealExperience() {
    // Optional: Small haptic vibrate for mobile users
    if (navigator.vibrate) navigator.vibrate(15);

    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');
    const body = document.body;

    // Step 1: Hide Intro
    intro.classList.add('hidden-state');

    // Step 2: Show Main Content and allow scrolling if necessary
    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.add('active-state');
        body.style.overflowY = 'auto'; // Re-enable scrolling for the content
    }, 700);
}