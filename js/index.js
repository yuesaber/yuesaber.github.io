// JavaScript for animation effect on expertise section
function animateExpertise(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icons = document.querySelectorAll('.expertise-icons img');
            icons.forEach((icon, index) => {
                icon.style.animationDelay = `${index * 0.1}s`; // Adjust the delay between icons
                icon.classList.add('animate-icon');
            });
        } else {
            const icons = document.querySelectorAll('.expertise-icons img');
            icons.forEach((icon) => {
                icon.classList.remove('animate-icon');
            });
        }
    });
}

// Intersection Observer to observe the section
const expertiseObserver = new IntersectionObserver(animateExpertise, { threshold: [0, 0.25, 0.5, 0.75, 1] }); // Trigger animation at various intersection ratios
expertiseObserver.observe(document.getElementById("expertise"));
