document.addEventListener('DOMContentLoaded', () => {


    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle current item
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal and scroll-reveal-enhanced elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-enhanced').forEach(el => {
        scrollRevealObserver.observe(el);
    });

    // Parallax Effect
    const parallaxElements = document.querySelectorAll('.parallax-element');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Magnetic Hover Effect
    document.querySelectorAll('.magnetic').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const moveX = x * 0.1;
            const moveY = y * 0.1;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });

    // Tilt Effect for Cards
    document.querySelectorAll('.card-3d').forEach(card => {
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

    // Ensure body is visible
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';

    // Dynamic Player Count
    const playerCountElement = document.getElementById('player-count');
    // Simulate live player count updates
    setInterval(() => {
        const currentCount = parseInt(playerCountElement.innerText);
        const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
        let newCount = currentCount + change;
        if (newCount < 140) newCount = 140;
        if (newCount > 180) newCount = 180;
        playerCountElement.innerText = newCount;
    }, 3000);


    const loader = document.getElementById('page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 800);
        });
    }


    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1000; // Animation duration in ms
            const stepTime = 10; // Update every 20ms
            const steps = duration / stepTime;
            const increment = target / steps;

            let current = 0;

            const updateCount = () => {
                current += increment;

                if (current < target) {
                    counter.innerText = Math.ceil(current).toLocaleString();
                    setTimeout(updateCount, stepTime);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer to trigger animation when in view
    const statsSection = document.querySelector('.stats-bar');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    hasAnimated = true;
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }


    const modal = document.getElementById("custom-modal");
    if (modal) {
        const signUpBtns = document.querySelectorAll(".signup-trigger"); // Added class to buttons
        const modalClose = modal.querySelector(".close-modal");
        const modalContent = modal.querySelector(".modal-content");
        const modalActionBtn = modal.querySelector(".btn-modal-action");


        signUpBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = "block";
            });
        });


        if (modalClose) {
            modalClose.addEventListener('click', function (e) {
                e.stopPropagation();
                modal.style.display = "none";
            });
        }


        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });


        if (modalContent) {
            modalContent.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }


        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = "none";
            }
        });


        if (modalActionBtn) {
            modalActionBtn.addEventListener('click', function (e) {
                modal.style.display = "none";
            });
        }
    }


});
