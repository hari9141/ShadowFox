document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    function initCarousel(gridSelector, dotsId, cardSelector) {
        const grid = document.querySelector(gridSelector);
        const dotsContainer = document.getElementById(dotsId);

        if (grid && dotsContainer) {
            const cards = grid.querySelectorAll(cardSelector);

            dotsContainer.innerHTML = '';
            cards.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dotsContainer.appendChild(dot);
            });

            const dots = dotsContainer.querySelectorAll('.dot');

            grid.addEventListener('scroll', () => {
                const scrollLeft = grid.scrollLeft;
                const cardWidth = cards[0].offsetWidth + 20;

                const activeIndex = Math.round(scrollLeft / cardWidth);

                dots.forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            });
        }
    }

    initCarousel('.treatment-grid', 'treatmentDots', '.treatment-card');
    initCarousel('.testimonial-grid', 'testimonialDots', '.testimonial-card');
});
