window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;

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
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}

const aboutText = "Hello, I am yukiAkedo, nice to meet you ..";
let i = 0;

function startTyping(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
        }
    });
}

const observer = new IntersectionObserver(startTyping, { threshold: 0.5 });
observer.observe(document.getElementById("aboutText"));

function typeWriter() {
    document.getElementById("aboutText").innerHTML = "";
    i = 0;

    function type() {
        if (i < aboutText.length) {
            document.getElementById("aboutText").innerHTML += aboutText.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            document.getElementById("aboutText").style.borderRight = 'none';
            document.getElementById("aboutText").style.animation = 'none';
        }
    }

    type();
}

setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}, 3000);

