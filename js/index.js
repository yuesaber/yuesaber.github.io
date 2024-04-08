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

const expertiseObserver = new IntersectionObserver(animateExpertise, { threshold: [0, 0.25, 0.5, 0.75, 1] }); 
expertiseObserver.observe(document.getElementById("expertise"));

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.right-image').classList.add('animate-image');
        } else {
            document.querySelector('.right-image').classList.remove('animate-image');
        }
    });
}, { threshold: 0.5 }); 

sectionObserver.observe(document.getElementById('hero'));

const leftSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.left-image').classList.add('animate-left-image');
        } else {
            document.querySelector('.left-image').classList.remove('animate-left-image');
        }
    });
}, { threshold: 0.5 }); 

leftSectionObserver.observe(document.getElementById('hero'));
