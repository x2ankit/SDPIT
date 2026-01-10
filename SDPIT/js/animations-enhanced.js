// ============================================
// PREMIUM ANIMATIONS & INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize header animations
    initPreloader();
    initNavbarPremium();
    initHamburgerMenu();
    
    // Page Load Animation
    document.body.classList.add('loaded');
    
    // Initialize all features
    initCounters();
    initScrollAnimations();
    initTestimonialSlider();
    initParallax();
    initScrollReveal();
    initTiltEffect();
    initSmoothScroll();
    initProgressBar();
    initCustomCursor();
    initAutoScrollCourses();
    initLatestBlogsCarousel();
    initBlogReveal();
    initGalleryLightbox();
    initChairmanMessage();
    initChairmanPhotoParallax();
    
    // ============================================
    // PREMIUM CINEMATIC PRELOADER
    // ============================================
    
    function initPreloader() {
        const preloader = document.getElementById('sdpit-preloader');
        if (!preloader) return;

        // Wait for critical assets and animations to complete
        const hidePreloader = () => {
            preloader.classList.add('hidden');
            // Ensure removal after transition completes
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 850);
        };

        // Total animation sequence: 
        // Logo intro (0-1s) + Logo move to left (1-2.4s) + Brand reveal (1.2-2.8s) + Hold (0.5s)
        const totalAnimationTime = 2800; // 2.8 seconds
        const minimumDisplayTime = 800; // Minimum 0.8s for fast connections

        // Check if images are loaded
        const images = document.querySelectorAll('img[src]');
        let imagesLoaded = 0;
        let animationComplete = false;

        // Mark animation as complete after sequence finishes
        setTimeout(() => {
            animationComplete = true;
            checkReadyToHide();
        }, totalAnimationTime);

        function checkReadyToHide() {
            // Hide preloader when animation is done AND images are loaded
            if (animationComplete && (imagesLoaded >= images.length * 0.5 || images.length === 0)) {
                setTimeout(hidePreloader, 400); // Small delay for smoother transition
            }
        }

        // Image loading detection
        if (images.length === 0) {
            // No images, just wait for animation
            setTimeout(hidePreloader, totalAnimationTime + 400);
        } else {
            images.forEach(img => {
                if (img.complete) {
                    imagesLoaded++;
                } else {
                    img.addEventListener('load', () => {
                        imagesLoaded++;
                        checkReadyToHide();
                    }, { once: true });
                    
                    img.addEventListener('error', () => {
                        imagesLoaded++;
                        checkReadyToHide();
                    }, { once: true });
                }
            });

            // Fallback timeout - never hang longer than 4 seconds
            setTimeout(() => {
                hidePreloader();
            }, 4000);
        }
    }

    // ============================================
    // PREMIUM NAVBAR FUNCTIONALITY
    // ============================================
    
    function initNavbarPremium() {
        const navbar = document.getElementById('navbarPremium');
        if (!navbar) return;

        // Scroll behavior
        let ticking = false;
        let lastScrollY = 0;

        function updateNavbarOnScroll() {
            const scrollY = window.scrollY;

            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(updateNavbarOnScroll);
                ticking = true;
            }
        }, { passive: true });

        // Close mobile menu when link is clicked
        const navLinks = document.querySelectorAll('.navbar-menu-link');
        const navMenu = document.getElementById('navbarMenu');
        const hamburger = document.getElementById('navbarHamburger');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Only close if not an external link
                if (link.getAttribute('href').startsWith('#') || link.getAttribute('href') === 'index.php' || link.getAttribute('href') === 'about.php') {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    // ============================================
    // HAMBURGER MENU FUNCTIONALITY
    // ============================================
    
    function initHamburgerMenu() {
        const hamburger = document.getElementById('navbarHamburger');
        const navMenu = document.getElementById('navbarMenu');
        
        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar-premium')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Prevent menu closing when clicking inside it
        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    // ============================================
    // COUNTER ANIMATION
    // ============================================
    
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
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        
        const animatedElements = document.querySelectorAll(
            '.fade-in, .slide-up, .slide-left, .slide-right, ' +
            '.section-title, .metric-item, .signature-card, ' +
            '.benefits-list li, .brand-strip'
        );
        
        animatedElements.forEach(el => observer.observe(el));
    }
    
    // ============================================
    // TESTIMONIAL SLIDER
    // ============================================
    
    function initTestimonialSlider() {
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-item');
        if (testimonials.length === 0) return;
        
        function showTestimonial(index) {
            testimonials.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
                item.style.animation = 'fadeIn 0.5s ease-in-out';
            });
        }
        
        showTestimonial(0);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // ============================================
    // PARALLAX EFFECT
    // ============================================
    
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const elementTop = element.getBoundingClientRect().top + scrolled;
                const elementVisible = elementTop - window.innerHeight;
                
                if (scrolled > elementVisible) {
                    const yPos = (scrolled - elementVisible) * speed;
                    element.style.transform = `translateY(${yPos}px)`;
                }
            });
        }, 10));
    }
    
    // ============================================
    // SCROLL REVEAL
    // ============================================
    
    function initScrollReveal() {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }
    
    // ============================================
    // TILT EFFECT FOR FOUNDER IMAGE
    // ============================================
    
    function initTiltEffect() {
        const founderImageFrame = document.querySelector('.founder-image-frame');
        if (!founderImageFrame) return;
        
        founderImageFrame.addEventListener('mousemove', (e) => {
            const rect = founderImageFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            founderImageFrame.style.transform = 
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0)`;
        });
        
        founderImageFrame.addEventListener('mouseleave', () => {
            founderImageFrame.style.transform = 
                'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
    
    // ============================================
    // PROGRESS BAR
    // ============================================
    
    function initProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (!progressBar) return;
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // ============================================
    // CUSTOM CURSOR (Premium)
    // ============================================
    
    function initCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: var(--gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.querySelectorAll('a, button, .btn-primary, .btn-secondary').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '10px';
                cursor.style.height = '10px';
            });
        });
    }

    // ============================================
    // BLOGS: REVEAL ON SCROLL
    // ============================================
    function initBlogReveal() {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.latest-blogs .reveal-on-scroll').forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ============================================
    // AUTO-SCROLL LATEST BLOGS CAROUSEL
    // ============================================
    function initLatestBlogsCarousel() {
        const container = document.querySelector('.latest-blogs .blogs-carousel');
        const dotsContainer = document.querySelector('.latest-blogs .blogs-dots');
        if (!container || !dotsContainer) return;

        const cards = Array.from(container.querySelectorAll('.blog-card'));
        if (cards.length === 0) return;

        // Build offsets for each card (for snap positions)
        const offsets = cards.map(card => card.offsetLeft);

        // Create dots
        dotsContainer.innerHTML = '';
        offsets.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = 'dot';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to blog ${idx + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = idx;
                container.scrollTo({ left: offsets[currentIndex], behavior: 'smooth' });
                updateDots();
            });
            dotsContainer.appendChild(dot);
        });

        let currentIndex = 0;
        let paused = false;
        const intervalMs = 4000;

        function updateDots() {
            const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
            dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        }

        function goNext() {
            currentIndex = (currentIndex + 1) % offsets.length;
            container.scrollTo({ left: offsets[currentIndex], behavior: 'smooth' });
            updateDots();
        }

        // Auto-advance
        let timer = setInterval(() => { if (!paused) goNext(); }, intervalMs);

        // Pause on hover / touch
        container.addEventListener('mouseenter', () => { paused = true; });
        container.addEventListener('mouseleave', () => { paused = false; });
        container.addEventListener('touchstart', () => { paused = true; }, { passive: true });
        container.addEventListener('touchend', () => { paused = false; }, { passive: true });

        // Update active dot on scroll to nearest card
        container.addEventListener('scroll', debounce(() => {
            const scrollLeft = container.scrollLeft;
            let nearest = 0;
            let minDist = Infinity;
            offsets.forEach((off, idx) => {
                const dist = Math.abs(scrollLeft - off);
                if (dist < minDist) { minDist = dist; nearest = idx; }
            });
            currentIndex = nearest;
            updateDots();
        }, 100));

        // Ensure dots reflect initial state
        updateDots();

        // Cleanup
        window.addEventListener('beforeunload', () => clearInterval(timer));
    }
    // ============================================
    // AUTO-SCROLL FEATURED COURSES
    // ============================================
    function initAutoScrollCourses() {
        const container = document.getElementById('coursesCarousel');
        if (!container) return;

        let paused = false;
        let direction = 1; // 1: forward, -1: backward
        const speed = 0.6; // pixels per tick

        const tick = () => {
            if (paused) return;
            container.scrollLeft += speed * direction;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScroll) {
                direction = -1;
            } else if (container.scrollLeft <= 0) {
                direction = 1;
            }
        };

        const interval = setInterval(tick, 16);

        container.addEventListener('mouseenter', () => { paused = true; });
        container.addEventListener('mouseleave', () => { paused = false; });

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => clearInterval(interval));
    }
    
    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // STAGGERED BENEFITS ANIMATION
    // ============================================
    
    const benefitsList = document.querySelectorAll('.benefits-list li');
    benefitsList.forEach((item, index) => {
        setTimeout(() => {
            const benefitsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.2 });
            
            benefitsObserver.observe(item);
        }, index * 100);
    });
    
    // ============================================
    // FLOATING PARTICLES
    // ============================================
    
    const hero = document.querySelector('.hero');
    if (hero) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            hero.appendChild(particle);
        }
    }

    // ============================================
    // GALLERY LIGHTBOX
    // ============================================
    function initGalleryLightbox() {
        const lightbox = document.getElementById('gallery-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.querySelector('.lightbox-close');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        
        if (!lightbox || !lightboxImg || galleryItems.length === 0) return;

        let currentImageIndex = 0;
        const images = Array.from(galleryItems).map(item => item.getAttribute('data-src'));

        function showImage(index) {
            currentImageIndex = index;
            lightboxImg.src = images[currentImageIndex];
            lightbox.classList.add('active');
        }

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => showImage(index));
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentImageIndex];
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % images.length;
            lightboxImg.src = images[currentImageIndex];
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            } else if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                lightboxImg.src = images[currentImageIndex];
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                lightboxImg.src = images[currentImageIndex];
            }
        });
    }

    // ============================================
    // CHAIRMAN MESSAGE - READ MORE
    // ============================================
    function initChairmanMessage() {
        const btnReadMore = document.getElementById('btnReadMore');
        const expandableMessage = document.getElementById('expandableMessage');
        const btnText = btnReadMore?.querySelector('.btn-text');
        
        if (!btnReadMore || !expandableMessage) return;

        btnReadMore.addEventListener('click', function() {
            const isExpanded = expandableMessage.classList.contains('expanded');
            
            if (isExpanded) {
                expandableMessage.classList.remove('expanded');
                btnText.textContent = 'Read Full Message';
                btnReadMore.classList.remove('expanded');
            } else {
                expandableMessage.classList.add('expanded');
                btnText.textContent = 'Show Less';
                btnReadMore.classList.add('expanded');
            }
        });
    }

    // ============================================
    // CHAIRMAN PHOTO PARALLAX SCROLL
    // ============================================
    function initChairmanPhotoParallax() {
        const chairmanPhoto = document.querySelector('.chairman-photo');
        if (!chairmanPhoto) return;

        const photoFrame = chairmanPhoto.closest('.photo-frame');
        const photoWrapper = photoFrame?.closest('.photo-wrapper');
        const chairmanSection = chairmanPhoto.closest('.chairman-message');

        if (!photoFrame || !photoWrapper || !chairmanSection) return;

        let lastScrollTop = 0;
        let scrollVelocity = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            scrollVelocity = scrollTop - lastScrollTop;
            lastScrollTop = scrollTop;

            const sectionRect = chairmanSection.getBoundingClientRect();
            const sectionTop = sectionRect.top;
            const sectionHeight = sectionRect.height;
            const windowHeight = window.innerHeight;

            // Check if section is in viewport
            if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                // Calculate parallax offset based on scroll velocity and position
                const parallaxRange = 40; // Total pixel range for parallax effect
                const offset = (scrollVelocity * 0.5); // Follow scroll with 0.5 multiplier
                
                // Apply transform with smooth transition
                chairmanPhoto.style.transition = 'transform 0.2s ease-out';
                chairmanPhoto.style.transform = `translateY(${Math.min(Math.max(offset, -parallaxRange), parallaxRange)}px)`;
            }
        }, false);

        // Reset on mouse leave
        photoFrame?.addEventListener('mouseleave', () => {
            chairmanPhoto.style.transform = 'translateY(0)';
        });
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
