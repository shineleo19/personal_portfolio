// Mobile navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Typing Animation
        const typingElement = document.querySelector('.typing');
        const professions = ["Web Developer", "Designer", "Programmer", "UI/UX Expert", "Freelancer"];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 2000; // Delay between current and next text

        function type() {
            const currentProfession = professions[professionIndex];
            
            if (isDeleting) {
                // Remove character
                typingElement.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                // Add character
                typingElement.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            // If word is complete
            if (!isDeleting && charIndex === currentProfession.length) {
                // Make pause at end
                typingDelay = newTextDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Move to next word when deleted
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        }

        // Start typing animation when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, 1000);
        });