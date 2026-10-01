// ========== Camera Lens Animation ==========
class CameraLensAnimation {
    constructor() {
        this.isPlaying = false;
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            setTimeout(() => this.playAnimation(), 3500);
        });
    }

    playAnimation() {
        if (this.isPlaying) return;
        this.isPlaying = true;

        // Reset elements
        this.resetAnimation();

        // Create timeline
        const timeline = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 2000
        });

        // Animate each blade
        timeline
            .add({
                targets: '.blade-1',
                rotate: [0, -100],
                duration: 1500,
                easing: 'easeInOutCubic',
                offset: 0
            }, 0)
            .add({
                targets: '.blade-2',
                rotate: [0, -100],
                duration: 1500,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            .add({
                targets: '.blade-3',
                rotate: [0, -100],
                duration: 1500,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            .add({
                targets: '.blade-4',
                rotate: [0, -100],
                duration: 1500,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            .add({
                targets: '.blade-5',
                rotate: [0, -100],
                duration: 1500,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            .add({
                targets: '.blade-6',
                rotate: [0, -45],
                duration: 800,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            .add({
                targets: '.blade-7',
                rotate: [0, -45],
                duration: 800,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            .add({
                targets: '.blade-8',
                rotate: [0, -45],
                duration: 800,
                easing: 'easeInOutCubic',
                offset: '-=700'
            }, 0)
            // Fade out lens
            .add({
                targets: '.camera-lens',
                opacity: [1, 0],
                duration: 600,
                easing: 'easeInOutQuad',
                offset: '-=200'
            })
            // Fade in hero text
            .add({
                targets: '.hero-text',
                opacity: [0, 1],
                duration: 800,
                easing: 'easeInOutQuad',
                offset: '-=400'
            })
            .add({
                targets: '.hero-title',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutQuad',
                offset: '-=600'
            })
            .add({
                targets: '.hero-subtitle, .hero-description',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutQuad',
                offset: '-=400'
            })
            .add({
                targets: '.hero-buttons',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutQuad',
                offset: '-=300'
            });

        timeline.complete = () => {
            this.isPlaying = false;
        };
    }

    resetAnimation() {
        anime.set('.blade', { rotate: 0, opacity: 1 });
        anime.set('.camera-lens', { opacity: 1 });
        anime.set('.hero-text', { opacity: 0 });
        anime.set('.hero-title', { translateY: 30, opacity: 0 });
        anime.set('.hero-subtitle, .hero-description', { translateY: 20, opacity: 0 });
        anime.set('.hero-buttons', { translateY: 20, opacity: 0 });
    }
}

// ========== SCROLL ANIMATIONS ==========
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.observer = null;
        this.init();
    }

    init() {
        // Target elements for scroll animation
        const selectors = [
            '.about-text p',
            '.stat',
            '.project-card',
            '.skill-category',
            '.contact-item'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                this.elements.push(el);
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            });
        });

        this.createObserver();
        this.observeElements();
    }

    createObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutQuad',
                        delay: index * 100
                    });
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
    }

    observeElements() {
        this.elements.forEach(el => this.observer.observe(el));
    }
}

// ========== NAVBAR FUNCTIONALITY ==========
class NavbarController {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupHamburger();
        this.setupScrollBehavior();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                link.classList.add('active');

                // Close mobile menu
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    this.toggleMenu();
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const section = document.querySelector(`.nav-link[data-section="${current}"]`);
                if (section) section.classList.add('active');
            });
        });
    }

    setupHamburger() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
            }
        });
    }

    toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');

        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            anime({
                targets: spans[0],
                rotate: 45,
                translateY: 10,
                duration: 300
            });
            anime({
                targets: spans[1],
                opacity: 0,
                duration: 300
            });
            anime({
                targets: spans[2],
                rotate: -45,
                translateY: -10,
                duration: 300
            });
        } else {
            anime({
                targets: spans,
                rotate: 0,
                translateY: 0,
                opacity: 1,
                duration: 300
            });
        }
    }

    setupScrollBehavior() {
        // Animate navbar on scroll
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 100) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }

            lastScrollTop = scrollTop;
        });
    }
}

// ========== CONTACT FORM HANDLER ==========
class ContactFormHandler {
    constructor() {
        this.init();
    }

    init() {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Animate button
        const button = form.querySelector('button');
        const originalText = button.textContent;

        anime({
            targets: button,
            scale: 0.95,
            duration: 200
        });

        setTimeout(() => {
            anime({
                targets: button,
                scale: 1,
                duration: 200
            });
        }, 200);

        // Simulate form submission
        setTimeout(() => {
            button.textContent = '✓ Message Sent!';
            button.style.background = '#10b981';

            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.style.background = '';
            }, 2000);
        }, 500);
    }
}

// ========== SCROLL PROGRESS BAR ==========
class SkillProgressBars {
    constructor() {
        this.init();
    }

    init() {
        const skillsSection = document.querySelector('.skills');
        if (!skillsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            anime({
                targets: bar,
                width: width,
                duration: 1500,
                easing: 'easeOutQuad'
            });
        });
    }
}

// ========== PROJECT CARD HOVER EFFECT ==========
class ProjectCardEffects {
    constructor() {
        this.init();
    }

    init() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.onHover(card));
            card.addEventListener('mouseleave', () => this.onLeave(card));
        });
    }

    onHover(card) {
        const image = card.querySelector('.project-image');
        anime({
            targets: image,
            scale: 1.1,
            duration: 300
        });
    }

    onLeave(card) {
        const image = card.querySelector('.project-image');
        anime({
            targets: image,
            scale: 1,
            duration: 300
        });
    }
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

// ========== INITIALIZE ALL FEATURES ==========
document.addEventListener('DOMContentLoaded', () => {
    new CameraLensAnimation();
    new ScrollAnimations();
    new NavbarController();
    new ContactFormHandler();
    new SkillProgressBars();
    new ProjectCardEffects();
    new SmoothScroll();

    console.log('Portfolio website loaded successfully! ✨');
});
