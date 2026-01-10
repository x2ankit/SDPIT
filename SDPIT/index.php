<?php include 'includes/header.php'; ?>

<!-- Premium Centered Hero Section -->
<section class="hero-premium">
    <video autoplay muted loop playsinline class="hero-premium-video">
        <source src="assets/images/Website_Content_To_Hero_Video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    
    <!-- Sophisticated Overlay -->
    <div class="hero-premium-overlay"></div>
    
    <!-- Luxury Floating Elements -->
    <div class="hero-premium-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
    </div>
    
    <!-- Centered Content Container -->
    <div class="hero-premium-content">
        <!-- Premium Badge Line -->
        <div class="hero-premium-badge">
            <span class="badge-icon">●</span> Established 2009 | Excellence in Education
        </div>
        
        <!-- Luxury Typography Headline -->
        <h1 class="hero-premium-headline">
            <span class="headline-line line-1">Computer Education</span>
            <span class="headline-line line-2">with <span class="accent">SDPIT</span></span>
            <span class="headline-line line-3">Makes You <span class="accent">Perfect</span></span>
        </h1>
        
        <!-- Premium Supporting Text -->
        <p class="hero-premium-subtext">
            Where academic excellence meets holistic development. A premier institution dedicated to shaping tomorrow's leaders through rigorous education and comprehensive growth.
        </p>
        
        <!-- CTA Button Group - Conversion-Focused -->
        <div class="hero-premium-cta">
            <a href="#courses" class="btn-hero btn-hero-primary btn-hero-large">
                Explore Courses
            </a>
            <a href="#contact" class="btn-hero btn-hero-secondary">
                Contact Admissions
            </a>
        </div>
    </div>
    
    <!-- Elegant Scroll Indicator -->
    <div class="hero-premium-scroll hero-premium-scroll-subtle">
        <span>Scroll to explore</span>
        <div class="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
    </div>
</section>

<!-- Brand Strip -->
<section class="brand-strip">
    <div class="container">
        <img src="assets/images/sdpit-logo.png" alt="SDPIT Logo" class="brand-logo">
    </div>
</section>

<!-- Achievement Banner Section -->
<section class="achievement-banner">
    <!-- Scrolling Text Banner -->
    <div class="scrolling-banner">
        <div class="scroll-content">
            <div class="scroll-item">
                <i class="fas fa-book"></i>
                <span>31+ Premium Courses Available</span>
            </div>
            <div class="scroll-item">
                <i class="fas fa-users"></i>
                <span>657+ Students Enrolled</span>
            </div>
            <div class="scroll-item">
                <i class="fas fa-star"></i>
                <span>174+ Google Reviews</span>
            </div>
            <div class="scroll-item">
                <i class="fas fa-headset"></i>
                <span>24/7 Student Support</span>
            </div>
            <div class="scroll-item">
                <i class="fas fa-book"></i>
                <span>31+ Premium Courses Available</span>
            </div>
            <div class="scroll-item">
                <i class="fas fa-users"></i>
                <span>657+ Students Enrolled</span>
            </div>
            <div class="scroll-item">
                <i class="fas fa-star"></i>
                <span>174+ Google Reviews</span>
            </div>
        </div>
    </div>
    
    <!-- Achievement Stats Grid -->
    <div class="achievement-stats">
        <div class="stats-carousel-wrapper">
            <button class="carousel-nav prev" id="statsPrevBtn">
                <i class="fas fa-chevron-left"></i>
            </button>
            
            <div class="stats-grid" id="statsCarousel">
                <div class="stat-card slide-up" data-delay="0">
                    <div class="stat-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="stat-content">
                        <h3><span class="counter" data-target="31">0</span>+</h3>
                        <p>Courses</p>
                    </div>
                </div>
                <div class="stat-card slide-up" data-delay="100">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-content">
                        <h3><span class="counter" data-target="657">0</span>+</h3>
                        <p>Students</p>
                    </div>
                </div>
                <div class="stat-card slide-up" data-delay="200">
                    <div class="stat-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="stat-content">
                        <h3><span class="counter" data-target="174">0</span>+</h3>
                        <p>Google Reviews</p>
                    </div>
                </div>
                <div class="stat-card slide-up" data-delay="300">
                    <div class="stat-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <div class="stat-content">
                        <h3>24/7</h3>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            
            <button class="carousel-nav next" id="statsNextBtn">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</section>

<!-- Featured Courses Section -->
<section class="featured-courses">
    <div class="container">
        <div class="featured-header-premium">
            <div class="featured-header-content">
                <div class="featured-label-premium">
                    <span class="label-icon"><i class="fas fa-sparkles"></i></span>
                    <span>What's New</span>
                </div>
                
                <h2 class="featured-title-premium">
                    FEATURED COURSES
                </h2>
                
                <p class="featured-description-premium">
                    Explore our Featured Courses and upgrade your skills today! Top-rated courses, handpicked for you — start learning now
                </p>
                
                <div class="featured-divider"></div>
            </div>
            
            <a href="#" class="btn-all-courses-premium">
                <span class="btn-icon"><i class="fas fa-th"></i></span>
                <span class="btn-text">All Courses</span>
                <span class="btn-arrow"><i class="fas fa-arrow-right"></i></span>
            </a>
        </div>
    </div>

    <div class="courses-carousel-wrapper">
        <button class="carousel-nav prev" id="coursePrevBtn">
            <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="featured-courses-grid" id="coursesCarousel">
            <!-- Course Card 1 - DCA -->
            <div class="course-card fade-in">
                <div class="course-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" alt="DCA Course" class="course-image" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none';">
                    <div class="course-image-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="course-border-accent"></div>
                </div>
                <div class="course-info">
                    <h4>DCA</h4>
                    <p class="course-role">SDPIT Admin</p>
                    <div class="course-details">
                        <span class="course-code">Instructor</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 10px 0;">Eligibility: <strong>12th Pass</strong></p>
                    <div class="course-pricing">
                        <span class="course-price">₹ 3,750</span>
                    </div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i> 12 Months
                    </div>
                    <div class="course-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.0 (15)</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-enroll">Enroll Now</button>
                        <a href="#" class="btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <!-- Course Card 2 - DCN -->
            <div class="course-card fade-in">
                <div class="course-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" alt="DCN Course" class="course-image" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none';">
                    <div class="course-image-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="course-border-accent"></div>
                </div>
                <div class="course-info">
                    <h4>DCN</h4>
                    <p class="course-role">SDPIT Admin</p>
                    <div class="course-details">
                        <span class="course-code">Instructor</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 10px 0;">Eligibility: <strong>10th Pass</strong></p>
                    <div class="course-pricing">
                        <span class="course-price">₹ 2,250</span>
                        <span class="course-brochure"><a href="#" style="color: #d4af37; text-decoration: none;">Brochure</a></span>
                    </div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i> 06 Months
                    </div>
                    <div class="course-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.0 (15)</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-enroll">Enroll Now</button>
                        <a href="#" class="btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <!-- Course Card 3 - WORDPRESS -->
            <div class="course-card fade-in">
                <div class="course-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" alt="WordPress Course" class="course-image" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none';">
                    <div class="course-image-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="course-border-accent"></div>
                </div>
                <div class="course-info">
                    <h4>WORDPRESS</h4>
                    <p class="course-role">SDPIT Admin</p>
                    <div class="course-details">
                        <span class="course-code">Instructor</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 10px 0;">Eligibility: <strong>10th Pass</strong></p>
                    <div class="course-pricing">
                        <span class="course-price">₹ 4,750</span>
                        <span class="course-brochure"><a href="#" style="color: #d4af37; text-decoration: none;">Brochure</a></span>
                    </div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i> 01 Month
                    </div>
                    <div class="course-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.0 (15)</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-enroll">Enroll Now</button>
                        <a href="#" class="btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <!-- Course Card 4 - DCH -->
            <div class="course-card fade-in">
                <div class="course-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="DCH Course" class="course-image" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none';">
                    <div class="course-image-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="course-border-accent"></div>
                </div>
                <div class="course-info">
                    <h4>DCH</h4>
                    <p class="course-role">SDPIT Admin</p>
                    <div class="course-details">
                        <span class="course-code">Instructor</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 10px 0;">Eligibility: <strong>10th Pass</strong></p>
                    <div class="course-pricing">
                        <span class="course-price">₹ 4,750</span>
                        <span class="course-brochure"><a href="#" style="color: #d4af37; text-decoration: none;">Brochure</a></span>
                    </div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i> 06 Months
                    </div>
                    <div class="course-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.0 (15)</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-enroll">Enroll Now</button>
                        <a href="#" class="btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <!-- Course Card 5 - DTP -->
            <div class="course-card fade-in">
                <div class="course-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" alt="DTP Course" class="course-image" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none';">
                    <div class="course-image-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="course-border-accent"></div>
                </div>
                <div class="course-info">
                    <h4>DTP</h4>
                    <p class="course-role">SDPIT Admin</p>
                    <div class="course-details">
                        <span class="course-code">Instructor</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 10px 0;">Eligibility: <strong>10th Pass</strong></p>
                    <div class="course-pricing">
                        <span class="course-price">₹ 3,750</span>
                        <span class="course-brochure"><a href="#" style="color: #d4af37; text-decoration: none;">Brochure</a></span>
                    </div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i> 03 Months
                    </div>
                    <div class="course-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.0 (15)</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-enroll">Enroll Now</button>
                        <a href="#" class="btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <!-- Course Card 6 - C Programming -->
            <div class="course-card fade-in">
                <div class="course-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" alt="C Programming Course" class="course-image" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none';">
                    <div class="course-image-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="course-border-accent"></div>
                </div>
                <div class="course-info">
                    <h4>C Programming</h4>
                    <p class="course-role">SDPIT Admin</p>
                    <div class="course-details">
                        <span class="course-code">Instructor</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 10px 0;">Eligibility: <strong>10th Pass</strong></p>
                    <div class="course-pricing">
                        <span class="course-price">₹ 2,000</span>
                        <span class="course-brochure"><a href="#" style="color: #d4af37; text-decoration: none;">Brochure</a></span>
                    </div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i> 01 Month
                    </div>
                    <div class="course-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.0 (15)</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-enroll">Enroll Now</button>
                        <a href="#" class="btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>        
        <button class="carousel-nav next" id="courseNextBtn">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</section>

<!-- Chairman's Message Section -->
<section class="chairman-message">
    <div class="container">
        <div class="section-header scroll-reveal">
            <span class="section-label">Leadership</span>
            <h2 class="section-title-main">Chairman's Message</h2>
            <div class="title-underline-gold"></div>
        </div>
        
        <div class="chairman-card scroll-reveal">
            <div class="chairman-layout">
                <!-- Photo Column -->
                <div class="chairman-photo-column">
                    <div class="photo-wrapper">
                        <div class="photo-frame">
                            <img src="assets/images/founder-sachin.jpg" alt="Sachin Kumar Sahu - Founder & Director" class="chairman-photo">
                            <div class="photo-border"></div>
                        </div>
                        <div class="quote-badge">
                            <i class="fas fa-quote-left"></i>
                        </div>
                    </div>
                    <div class="chairman-info">
                        <h3 class="chairman-name">Dr. Sachin Kumar Sahu</h3>
                        <p class="chairman-designation">Chairman</p>
                        <p class="chairman-role">Founder & Director</p>
                        <div class="info-divider"></div>
                    </div>
                </div>
                
                <!-- Message Column -->
                <div class="chairman-message-column">
                    <div class="message-content">
                        <p class="message-greeting">Dear Students,</p>
                        
                        <div class="message-body" id="chairmanMessage">
                            <p>Welcome to our organization. Before we start, let me introduce myself…. this is <strong>Sachin Kumar Sahu</strong>, act as the Director of the Company since the year, <strong>2021</strong>. On the other hand, this is not the beginning, its already started since the year <strong>2010</strong> and this is the tune up of all hard work, dedication and patience.</p>
                            
                            <p>In my view, Computer and learning computer are two major things today, am I right? If you answer is a big yes, then what is the exact way to learn such things. So, answer is to choose your good option first, before starting something new, marvelous and outstanding.</p>
                            
                            <div class="message-expandable" id="expandableMessage">
                                <p>However, in the present world computer is attached into our life like a family member and we cannot ignore the same. All are bound to know the use of computer today. Without knowledge of computer you cannot accomplish your tasks because all things are related to computers.</p>
                                
                                <p>So, in my opinion choose the best platform which can help you understand what exactly computer is and why we should use the same to maintain our lifestyle. We have a dedicated team of faculties who are highly qualified and have rich working experiences with Corporate sectors, will share their techniques, ideas, thoughts and experience with students and will assist them to make their dream come true.</p>
                                
                                <p class="message-conclusion">We assure, that our students will definitely benefit studying with us and will achieve their dream objectives. We wish the best to all our students and surely, I personally, will always be available for our students to assist and help to ease out the way for their successful career and life.</p>
                            </div>
                        </div>
                        
                        <button class="btn-read-more" id="btnReadMore">
                            <span class="btn-text">Read Full Message</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        
                        <div class="message-signature">
                            <div class="signature-line"></div>
                            <div class="signature-text">
                                <p class="signature-name">Sachin Kumar Sahu</p>
                                <p class="signature-title">Founder & Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Benefits (no images) -->
<section class="benefits">
    <div class="container">
        <div class="section-title slide-up">
            <h2>Why SDPIT</h2>
            <p>Experience-first learning with measurable outcomes</p>
        </div>
        <ul class="benefits-list">
            <li><i class="fas fa-check-circle"></i> Personalized mentorship and small cohorts</li>
            <li><i class="fas fa-check-circle"></i> ISO-certified processes and transparent evaluation</li>
            <li><i class="fas fa-check-circle"></i> Real projects, portfolio-ready outputs</li>
            <li><i class="fas fa-check-circle"></i> Flexible schedules and 24/7 support</li>
            <li><i class="fas fa-check-circle"></i> Career guidance and interview preparation</li>
        </ul>
    </div>
</section>

<!-- Latest Blogs Section -->
<section class="latest-blogs premium-section" aria-label="Latest Blogs">
    <div class="container">
        <div class="latest-blogs-header slide-up">
            <span class="label-gold">Latest</span>
            <h2 class="title">Latest Blogs</h2>
            <p class="desc">Insights, updates, and campus highlights — stay informed.</p>
            <span class="divider-gold"></span>
        </div>

        <div class="blogs-carousel-wrapper">
            <div class="blogs-carousel" role="region" aria-roledescription="carousel" aria-label="SDPIT Latest Blogs" tabindex="0">
                <!-- Blog 1 -->
                <article class="blog-card reveal-on-scroll" aria-label="Best computer training institute">
                    <div class="blog-image-wrapper">
                        <img src="assets/blogs/10023.webp" alt="Best computer training institute" class="blog-image" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');" />
                        <span class="border-accent"></span>
                    </div>
                    <div class="blog-info">
                        <div class="blog-meta">
                            <span class="blog-category">Latest Updates</span>
                        </div>
                        <h3 class="blog-title">Best computer training institute</h3>
                        <a href="#" class="blog-readmore" aria-label="Read more: Best computer training institute">Read More</a>
                    </div>
                </article>

                <!-- Blog 2 -->
                <article class="blog-card reveal-on-scroll" aria-label="Foundation Day Celebration">
                    <div class="blog-image-wrapper">
                        <img src="assets/blogs/10026.webp" alt="Foundation Day Celebration" class="blog-image" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');" />
                        <span class="border-accent"></span>
                    </div>
                    <div class="blog-info">
                        <div class="blog-meta">
                            <span class="blog-category">Foundation Day</span>
                        </div>
                        <h3 class="blog-title">Foundation Day Celebration</h3>
                        <a href="#" class="blog-readmore" aria-label="Read more: Foundation Day Celebration">Read More</a>
                    </div>
                </article>

                <!-- Blog 3 -->
                <article class="blog-card reveal-on-scroll" aria-label="Certificate in Computer Courses">
                    <div class="blog-image-wrapper">
                        <img src="assets/blogs/10025.webp" alt="Certificate in Computer Courses" class="blog-image" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');" />
                        <span class="border-accent"></span>
                    </div>
                    <div class="blog-info">
                        <div class="blog-meta">
                            <span class="blog-category">Computer Courses</span>
                        </div>
                        <h3 class="blog-title">Certificate in Computer Courses</h3>
                        <a href="#" class="blog-readmore" aria-label="Read more: Certificate in Computer Courses">Read More</a>
                    </div>
                </article>

                <!-- Blog 4 -->
                <article class="blog-card reveal-on-scroll" aria-label="Learn Tally with TallyPrime 7.0">
                    <div class="blog-image-wrapper">
                        <img src="assets/blogs/10031.webp" alt="Learn Tally with TallyPrime 7.0" class="blog-image" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');" />
                        <span class="border-accent"></span>
                    </div>
                    <div class="blog-info">
                        <div class="blog-meta">
                            <span class="blog-category">Latest Updates</span>
                        </div>
                        <h3 class="blog-title">Learn Tally with TallyPrime 7.0</h3>
                        <a href="#" class="blog-readmore" aria-label="Read more: Learn Tally with TallyPrime 7.0">Read More</a>
                    </div>
                </article>
            </div>

            <!-- Dots indicators -->
            <div class="blogs-dots" role="tablist" aria-label="Blog carousel indicators"></div>
        </div>
    </div>
</section>

<!-- Trust Section -->
<section class="trust-block" aria-label="Trusted By">
    <div class="container">
        <div class="trust-header">
            <h2 class="title">Trusted By</h2>
            <span class="divider-gold"></span>
        </div>
        <div class="trust-grid">
            <img src="assets/trust/10006.webp" alt="10006.webp" class="trust-logo" />
            <img src="assets/trust/10007.webp" alt="10007.webp" class="trust-logo" />
            <img src="assets/trust/10008.webp" alt="10008.webp" class="trust-logo" />
            <img src="assets/trust/10009.webp" alt="10009.webp" class="trust-logo" />
            <img src="assets/trust/10010.webp" alt="10010.webp" class="trust-logo" />
            <img src="assets/trust/10030.webp" alt="10030.webp" class="trust-logo" />
            <img src="assets/trust/t1.webp" alt="t1.webp" class="trust-logo" />
            <img src="assets/trust/t2.webp" alt="t2.webp" class="trust-logo" />
            <img src="assets/trust/t3.png" alt="t3.png" class="trust-logo" />
            <img src="assets/trust/t4.png" alt="t4.png" class="trust-logo" />
            <img src="assets/trust/t5.jpg" alt="t5.jpg" class="trust-logo" />
            <img src="assets/trust/t6.webp" alt="t6.webp" class="trust-logo" />
            <img src="assets/trust/t8.webp" alt="t8.webp" class="trust-logo" />
            <img src="assets/trust/t9.webp" alt="t9.webp" class="trust-logo" />
            <img src="assets/trust/t10.webp" alt="t10.webp" class="trust-logo" />
            <img src="assets/trust/t11.webp" alt="t11.webp" class="trust-logo" />
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="gallery-section" aria-label="Campus Gallery">
    <div class="container">
        <div class="gallery-header">
            <span class="label-gold">Campus Life</span>
            <h2 class="title">Gallery</h2>
            <p class="desc">Glimpses of our vibrant campus and student achievements</p>
            <span class="divider-gold"></span>
        </div>

        <div class="gallery-grid">
            <div class="gallery-item" data-src="assets/gallery/10001.jpg">
                <img src="assets/gallery/10001.jpg" alt="Campus moment 1" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10002.jpg">
                <img src="assets/gallery/10002.jpg" alt="Campus moment 2" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10003.jpg">
                <img src="assets/gallery/10003.jpg" alt="Campus moment 3" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10004.jpg">
                <img src="assets/gallery/10004.jpg" alt="Campus moment 4" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10005.jpg">
                <img src="assets/gallery/10005.jpg" alt="Campus moment 5" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10006.webp">
                <img src="assets/gallery/10006.webp" alt="Campus moment 6" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10007.webp">
                <img src="assets/gallery/10007.webp" alt="Campus moment 7" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10008.webp">
                <img src="assets/gallery/10008.webp" alt="Campus moment 8" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item" data-src="assets/gallery/10009.webp">
                <img src="assets/gallery/10009.webp" alt="Campus moment 9" class="gallery-img" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        </div>

        <div class="gallery-cta">
            <a href="gallery.php" class="btn-view-all">
                <span class="btn-icon"><i class="fas fa-images"></i></span>
                <span class="btn-text">View Full Gallery</span>
                <span class="btn-arrow"><i class="fas fa-arrow-right"></i></span>
            </a>
        </div>
    </div>
</section>

<!-- Lightbox Modal -->
<div class="lightbox" id="gallery-lightbox">
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" id="lightbox-img" alt="Gallery Image">
    <div class="lightbox-caption" id="lightbox-caption"></div>
    <button class="lightbox-nav lightbox-prev"><i class="fas fa-chevron-left"></i></button>
    <button class="lightbox-nav lightbox-next"><i class="fas fa-chevron-right"></i></button>
</div>

<?php include 'includes/footer.php'; ?>
