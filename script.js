const btn = document.getElementById('confetti-btn');

const triggerConfetti = () => {
    const end = Date.now() + 2 * 1000;

    // Go confetti!
    (function frame() {
        // Launch from left
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors: ['#0ea5e9', '#6366f1', '#2dd4bf', '#f59e0b']
        });

        // Launch from right
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors: ['#0ea5e9', '#6366f1', '#2dd4bf', '#f59e0b']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

btn.addEventListener('click', triggerConfetti);
