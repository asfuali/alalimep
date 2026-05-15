document.addEventListener('DOMContentLoaded', function() {
    
    // 1. MOBILE MENU LOGIC
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.toggle('hidden');
            if (icon) {
                icon.className = menu.classList.contains('hidden') 
                    ? 'fas fa-bars-staggered text-2xl' 
                    : 'fas fa-times text-2xl';
            }
        };
    }

    // 2. NAVBAR SCROLL EFFECT
    const nav = document.getElementById('main-nav');
    const indicator = document.getElementById('scroll-indicator');

    window.addEventListener('scroll', function() {
        // Navbar logic
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled', 'top-0', 'py-1');
                nav.classList.remove('lg:top-8', 'py-2');
            } else {
                nav.classList.remove('nav-scrolled', 'top-0', 'py-1');
                nav.classList.add('lg:top-8', 'py-2');
            }
        }

        // Scroll Indicator hide logic
        if (indicator) {
            if (window.scrollY > 50) {
                indicator.style.opacity = "0";
                indicator.style.transform = "translate(-50%, 20px)";
            } else {
                indicator.style.opacity = "1";
                indicator.style.transform = "translate(-50%, 0)";
            }
        }
    });

    // 3. SWIPER INITIALIZATION
    if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            loop: true,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 5000,
        });
        console.log("Swiper Ready");
    }

    // 4. AOS INITIALIZATION
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 120,
            easing: 'ease-in-out'
        });
        console.log("AOS Ready");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            // Brand Animation Settings
            duration: 800,      // Har animation 0.8 second chalegi
            easing: 'ease-in-out', // Smooth movement
            once: true,         // Sirf ek baar animate hoga jab user scroll karega
            offset: 120,        // Element dikhne ke 120px baad start hoga
            delay: 100,         // Chota sa delay premium feel ke liye
        });
    }
});