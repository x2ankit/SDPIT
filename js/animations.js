// Mobile Hamburger Menu
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initHamburgerMenu();
});

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.ceil(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start);
        }
    }, 16);
}

// Trigger counters when in viewport
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// Testimonial Slider
let currentTestimonial = 0;
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    if (testimonials.length === 0) return;
    
    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        });
    }
    
    showTestimonial(0);
    
    // Auto-rotate
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Floating particles background
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        hero.appendChild(particle);
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCounters();
    initScrollAnimations();
    initTestimonialSlider();
    createParticles();
    initFounderMessageAnimation();
    initCoursesCarousel();
    initStatsCarousel();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Founder message scroll animation
function initFounderMessageAnimation() {
    const messageBox = document.querySelector('.founder-message-text');
    if (!messageBox) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Sliding in when scrolling down
                messageBox.classList.add('slide-in-active');
                messageBox.classList.remove('slide-out');
            } else {
                // Check if we've scrolled past it
                const rect = entry.boundingClientRect;
                if (rect.top < 0) {
                    // Scrolled past - slide out upward
                    messageBox.classList.remove('slide-in-active');
                    messageBox.classList.add('slide-out');
                } else {
                    // Haven't reached it yet - reset to initial state
                    messageBox.classList.remove('slide-in-active');
                    messageBox.classList.remove('slide-out');
                }
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '-50px'
    });

    observer.observe(messageBox);
}

// Courses Carousel with auto-scroll
function initCoursesCarousel() {
    const carousel = document.getElementById('coursesCarousel');
    const prevBtn = document.getElementById('coursePrevBtn');
    const nextBtn = document.getElementById('courseNextBtn');
    
    if (!carousel || !prevBtn || !nextBtn) return;

    // Clone cards for infinite scroll
    const cards = Array.from(carousel.querySelectorAll('.course-card'));
    cards.forEach(card => {
        carousel.appendChild(card.cloneNode(true));
    });
    carousel.appendChild(carousel.firstElementChild.cloneNode(true));

    let isAutoScrolling = true;
    let autoScrollInterval;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame
    const cardWidth = 320 + 30; // Card width + gap
    const originalLength = cards.length;

    // Auto-scroll functionality - continuous smooth scroll
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (isAutoScrolling) {
                scrollPosition += scrollSpeed;
                carousel.scrollLeft = scrollPosition;
                
                // Check if we've scrolled past original set
                const singleSetWidth = cardWidth * originalLength;
                if (scrollPosition >= singleSetWidth) {
                    // Reset to beginning smoothly
                    scrollPosition = 0;
                    carousel.scrollLeft = 0;
                }
            }
        }, 30); // Update every 30ms for smooth animation
    }

    // Stop auto-scroll
    function stopAutoScroll() {
        isAutoScrolling = false;
        clearInterval(autoScrollInterval);
    }

    // Resume auto-scroll
    function resumeAutoScroll() {
        isAutoScrolling = true;
        startAutoScroll();
    }

    // Scroll by one card width for navigation buttons
    function scrollCarousel(direction) {
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Navigation button events
    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        scrollCarousel('prev');
        setTimeout(resumeAutoScroll, 1000);
    });

    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        scrollCarousel('next');
        setTimeout(resumeAutoScroll, 1000);
    });

    // Stop scrolling when clicking on any card or button inside
    carousel.addEventListener('click', (e) => {
        if (e.target.closest('.course-card')) {
            stopAutoScroll();
        }
    });

    // Start auto-scrolling
    startAutoScroll();
}

// Stats Carousel with auto-scroll
function initStatsCarousel() {
    const carousel = document.getElementById('statsCarousel');
    const prevBtn = document.getElementById('statsPrevBtn');
    const nextBtn = document.getElementById('statsNextBtn');
    
    if (!carousel || !prevBtn || !nextBtn) return;

    // Clone cards for infinite scroll
    const cards = Array.from(carousel.querySelectorAll('.stat-card'));
    cards.forEach(card => {
        carousel.appendChild(card.cloneNode(true));
    });
    carousel.appendChild(carousel.firstElementChild.cloneNode(true));

    let isAutoScrolling = true;
    let autoScrollInterval;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Pixels per frame
    const cardWidth = 240 + 25; // Card width + gap
    const originalLength = cards.length;

    // Auto-scroll functionality - continuous smooth scroll
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (isAutoScrolling) {
                scrollPosition += scrollSpeed;
                carousel.scrollLeft = scrollPosition;
                
                // Check if we've scrolled past original set
                const singleSetWidth = cardWidth * originalLength;
                if (scrollPosition >= singleSetWidth) {
                    // Reset to beginning smoothly
                    scrollPosition = 0;
                    carousel.scrollLeft = 0;
                }
            }
        }, 30); // Update every 30ms for smooth animation
    }

    // Stop auto-scroll
    function stopAutoScroll() {
        isAutoScrolling = false;
        clearInterval(autoScrollInterval);
    }

    // Resume auto-scroll
    function resumeAutoScroll() {
        isAutoScrolling = true;
        startAutoScroll();
    }

    // Scroll by one card width for navigation buttons
    function scrollCarousel(direction) {
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Navigation button events
    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        scrollCarousel('prev');
        setTimeout(resumeAutoScroll, 1000);
    });

    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        scrollCarousel('next');
        setTimeout(resumeAutoScroll, 1000);
    });

    // Stop scrolling when clicking on any card
    carousel.addEventListener('click', (e) => {
        if (e.target.closest('.stat-card')) {
            stopAutoScroll();
        }
    });

    // Start auto-scrolling
    startAutoScroll();
}

// Course card 3D tilt effect
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
