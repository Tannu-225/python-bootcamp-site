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

        const mobileToggle = document.getElementById("mobileMenuToggle");
        const navLinks = document.getElementById("navLinks");

        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("open"); 
            navLinks.classList.toggle("active");  // IMPORTANT FIX
        });