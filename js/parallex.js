// JavaScript for Parallax Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// JavaScript for smooth scrolling with parallax effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Adjust the duration of the scrolling animation (in milliseconds)

        let start = null;
        requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) requestAnimationFrame(step);
        }
    });
});

function easeInOutCubic(t, b, c, d) {
    // cubic easing in/out - acceleration until halfway, then deceleration
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}
