// JavaScript for animation effect on expertise section
function animateExpertise(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icons = document.querySelectorAll('.expertise-icons img');
            icons.forEach((icon, index) => {
                icon.style.animationDelay = `${index * 0.1}s`;
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
const expertiseObserver = new IntersectionObserver(animateExpertise, { threshold: [0, 0.25, 0.5, 0.75, 1] }); 
expertiseObserver.observe(document.getElementById("expertise"));



// JavaScript to animate image when section comes into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If section is in view, add animation class to the image
            document.querySelector('.right-image').classList.add('animate-image');
        } else {
            // If section is not in view, remove animation class from the image
            document.querySelector('.right-image').classList.remove('animate-image');
        }
    });
}, { threshold: 0.5 }); 

// Observe the section
sectionObserver.observe(document.getElementById('hero'));


// JavaScript to animate left image when section comes into view
const leftSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If section is in view, add animation class to the left image
            document.querySelector('.left-image').classList.add('animate-left-image');
        } else {
            // If section is not in view, remove animation class from the left image
            document.querySelector('.left-image').classList.remove('animate-left-image');
        }
    });
}, { threshold: 0.5 }); 

// Observe the section
leftSectionObserver.observe(document.getElementById('hero'));
