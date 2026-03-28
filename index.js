// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor or Mouse Move Effects
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Parallax hero image
    gsap.to('.hero-media img', {
        x: -20 + (x * 40),
        y: -20 + (y * 40),
        duration: 2,
        ease: 'power3.out'
    });
});

// Initial Hero Reveal
const tl_hero = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

tl_hero.from('.bg-layers', { opacity: 0, duration: 4 })
       .from('.logo', { y: -50, opacity: 0 }, '<0.5')
       .from('.nav-link', { y: -20, opacity: 0, stagger: 0.1 }, '<0.2')
       .from('.hero .mono', { x: -30, opacity: 0 }, '<0.2')
       .from('.reveal-inner', { y: '100%', stagger: 0.2 }, '<')
       .from('.hero-desc', { opacity: 0, y: 30 }, '<0.5')
       .from('.hero-media', { scale: 1.2, opacity: 0 }, '<0');

// Section Reveal Animations
const revealSections = document.querySelectorAll('section');

revealSections.forEach((section) => {
    const reveals = section.querySelectorAll('.reveal-inner, .spec-card');
    
    gsap.from(reveals, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// Sticky Scroll Steps
const steps = gsap.utils.toArray('.step');
const stickyWrapper = document.querySelector('.sticky-wrapper');

const tl_sticky = gsap.timeline({
    scrollTrigger: {
        trigger: stickyWrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        // markers: true,
    }
});

// Animate steps
steps.forEach((step, i) => {
    tl_sticky.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.5,
    });
    
    // Fade out if not last
    if (i < steps.length - 1) {
        tl_sticky.to(step, {
            opacity: 0.2,
            y: -50,
            duration: 0.5,
            delay: 0.5
        });
    }
});

// Spec Card Hover Interactions
const cards = document.querySelectorAll('.spec-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            borderColor: 'var(--accent)',
            duration: 0.4
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            borderColor: 'var(--border-thin)',
            duration: 0.4
        });
    });
});

// Log System Initialization
console.log('%c [ SYSTEM_CORE ]: MASTERLINE INITIALIZING...', 'color: #FF4400; font-weight: bold;');
console.log('%c [ STATUS ]: ALPHA_01 DEPLOYED.', 'color: #FFFFFF;');
