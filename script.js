// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
}

// Close mobile menu on link click
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
const navLogo = document.getElementById('nav-logo');
const navBrandName = document.getElementById('nav-brand-name');
const navLinks = document.querySelectorAll('.nav-link');
const menuIcon = document.getElementById('menu-icon');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-md');
        navbar.classList.remove('bg-transparent', 'py-6');
        navbar.classList.add('py-3');

        if (navLogo) {
            navLogo.classList.remove('h-14', 'w-14');
            navLogo.classList.add('h-10', 'w-10');
        }

        if (navBrandName) {
            navBrandName.classList.remove('text-white');
            navBrandName.classList.add('text-gray-900');
        }

        navLinks.forEach(link => {
            link.classList.remove('text-white', 'hover:text-gray-200');
            link.classList.add('text-gray-700', 'hover:text-orange-500');
        });

        if (menuIcon) {
            menuIcon.classList.remove('text-white');
            menuIcon.classList.add('text-gray-900');
        }
    } else {
        navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-md', 'py-3');
        navbar.classList.add('bg-transparent', 'py-6');

        if (navLogo) {
            navLogo.classList.add('h-14', 'w-14');
            navLogo.classList.remove('h-10', 'w-10');
        }

        if (navBrandName) {
            navBrandName.classList.add('text-white');
            navBrandName.classList.remove('text-gray-900');
        }

        navLinks.forEach(link => {
            link.classList.add('text-white', 'hover:text-gray-200');
            link.classList.remove('text-gray-700', 'hover:text-orange-500');
        });

        if (menuIcon) {
            menuIcon.classList.add('text-white');
            menuIcon.classList.remove('text-gray-900');
        }
    }
});

// Scroll Reveal Animation Initialization (Optional - adds simple reveal class if elements are in view)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    observer.observe(element);
});

// ── Testimonial Carousel ─────────────────────────────────────
(function () {
    const viewport = document.getElementById('testimonial-viewport');
    const track    = document.getElementById('testimonial-track');
    const prevBtn  = document.getElementById('testimonial-prev');
    const nextBtn  = document.getElementById('testimonial-next');
    const dotsEl   = document.getElementById('testimonial-dots');
    if (!track || !viewport) return;

    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const GAP   = 24; // px — matches gap-6
    let current = 0;
    let autoTimer;

    function getSPV() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640)  return 2;
        return 1;
    }

    function setCardWidths() {
        const spv       = getSPV();
        const vpW       = viewport.clientWidth;
        const cardW     = (vpW - GAP * (spv - 1)) / spv;
        cards.forEach(c => { c.style.width = cardW + 'px'; });
        return cardW;
    }

    function totalPages() {
        return Math.ceil(cards.length / getSPV());
    }

    function buildDots() {
        dotsEl.innerHTML = '';
        for (let i = 0; i < totalPages(); i++) {
            const d = document.createElement('button');
            d.className = 'h-2.5 rounded-full transition-all duration-300 ' +
                          (i === current ? 'bg-orange-500 w-6' : 'bg-gray-300 w-2.5');
            d.addEventListener('click', () => goTo(i));
            dotsEl.appendChild(d);
        }
    }

    function goTo(page) {
        const spv   = getSPV();
        const cardW = setCardWidths();
        current = Math.max(0, Math.min(page, totalPages() - 1));
        const offset = current * spv * (cardW + GAP);
        track.style.transform = `translateX(-${offset}px)`;
        buildDots();
    }

    function next() { goTo((current + 1) % totalPages()); }
    function prev() { goTo((current - 1 + totalPages()) % totalPages()); }

    function startAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(next, 4500);
    }

    prevBtn && prevBtn.addEventListener('click', () => { prev(); startAuto(); });
    nextBtn && nextBtn.addEventListener('click', () => { next(); startAuto(); });

    // Swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); startAuto(); }
    });

    window.addEventListener('resize', () => { current = 0; goTo(0); });

    goTo(0);
    startAuto();
})();

// ── Reservation Modal Logic ─────────────────────────────────────
function openReservationModal(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('reservation-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeReservationModal() {
    const modal = document.getElementById('reservation-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function handleReservationSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('res-name').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const notes = document.getElementById('res-notes').value;
    
    const message = `Halo Subasuka Paradise, saya ingin melakukan reservasi meja dengan detail berikut:
    
*Nama:* ${name}
*Tanggal:* ${date}
*Waktu:* ${time} WITA
*Jumlah Orang:* ${guests} Orang
*Catatan Tambahan:* ${notes ? notes : '-'}

Mohon konfirmasinya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/628113828800?text=${encodedMessage}`;
    
    // Close modal
    closeReservationModal();
    
    // Reset form
    document.getElementById('reservation-form').reset();
    
    // Open WA in new tab
    window.open(waUrl, '_blank');
}
