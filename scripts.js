// Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            body.classList.add('dark-theme');
            themeIcon.textContent = '🌙';
        }

        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            
            // Update icon and save preference
            if (body.classList.contains('dark-theme')) {
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            }
        });

               // Mobile Menu
        const mobileToggle = document.getElementById("mobileMenuToggle");
        const navLinks = document.getElementById("navLinks");

        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("open"); 
            navLinks.classList.toggle("active");
        });

        // Scroll Reveal Animation
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

        const elementInView = (el, offset = 100) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= 
                (window.innerHeight || document.documentElement.clientHeight) - offset
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add('active');
        };

        const handleScrollAnimation = () => {
            scrollRevealElements.forEach((el) => {
                if (elementInView(el, 100)) {
                    displayScrollElement(el);
                }
            });
        };

        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });

        // Initial check on page load
        handleScrollAnimation();

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });