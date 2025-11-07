// Función para inicializar todos los componentes
function initializeComponents() {
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeAnimations();
    initializePageLoad();
}

// Animación dramática al cargar la página
function initializePageLoad() {
    // Asegurar que el body sea visible después de la animación
    document.body.style.visibility = 'visible';
    
    // Animación especial para el hero section
    const heroSection = document.getElementById('inicio');
    if (heroSection) {
        const heroContent = heroSection.querySelector('div > div');
        if (heroContent) {
            heroContent.classList.add('hero-animation', 'stagger-animate');
        }
    }
}

// Menú móvil
function initializeMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        // Remover event listeners existentes para evitar duplicados
        menuBtn.replaceWith(menuBtn.cloneNode(true));
        const newMenuBtn = document.getElementById('menuBtn');
        
        newMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar menú al hacer click en un enlace
        const menuLinks = document.querySelectorAll('#mobileMenu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Smooth scroll para enlaces de navegación
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animaciones al hacer scroll - Versión mejorada
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar clase para animación principal
                entry.target.classList.add('fade-in-visible');
                
                // Animación escalonada para elementos hijos
                const staggerElements = entry.target.querySelectorAll('.stagger-item');
                staggerElements.forEach((element, index) => {
                    element.style.animationDelay = `${index * 0.2}s`;
                    element.classList.add('stagger-animate');
                });
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('fade-in')) {
            section.classList.add('fade-in');
            observer.observe(section);
        }
    });

    // Animación especial para cards y elementos individuales
    const cards = document.querySelectorAll('.card-animate');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    initializeComponents();
});