// Función para inicializar todos los componentes
function initializeComponents() {
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeAnimations();
    initializePageLoad();
    initializeEventDetail();

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

function loadPage(page) {
    loadComponent('homePage-container', `pages/${page}`);
}

let currentEventId = null;

function loadEvent(eventId) {
    currentEventId = eventId;
    loadComponent('homePage-container', 'pages/events-details.html');
}


const eventsData = {
    "proyectos-inter": {
        title: "Proyectos Interdisciplinarios",
        date: "Octubre 2026",
        description: "Evento donde los estudiantes presentan proyectos innovadores.",
        gallery: [
            { type: "image", src: "img/eventos/inter.jpg" },
            { type: "video", src: "videos/inter.mp4" }
        ]
    },
    "banda": {
        title: "Nuestra Banda Escolar",
        date: "Octubre 2026",
        description: "Nuestra banda de liras y tambores forma parte de los desfiles patrios de noviembre.",
        gallery: [
            { type: "image", src: "img/eventos/banda.jpg" },
            { type: "video", src: "videos/banda.mp4" }
        ]
    },
    "tipico": {
        title: "Actividades Folclóricas",
        date: "Octubre 2026",
        description: "Celebramos nuestra identidad nacional a través de actividades folclóricas con nuestros estudiantes.",
        gallery: [
            { type: "image", src: "img/eventos/tipico.jpg" },
            { type: "video", src: "videos/tipico.mp4" }
        ]
    }
};

function initializeEventDetail() {
    if (!currentEventId) return;

    const event = eventsData[currentEventId];
    if (!event) return;

    const breadcrumb = document.getElementById("breadcrumb-title");
    const title = document.getElementById("event-title");
    const date = document.getElementById("event-date");
    const description = document.getElementById("event-description");
    const gallery = document.getElementById("event-gallery");

    if (!breadcrumb || !gallery) return;

    breadcrumb.textContent = event.title;
    title.textContent = event.title;
    date.textContent = event.date;
    description.textContent = event.description;

    gallery.innerHTML = "";

    event.gallery.forEach(item => {
        gallery.innerHTML += item.type === "image"
            ? `<div class="overflow-hidden rounded-xl shadow">
                    <img src="${item.src}" class="w-full h-60 object-cover">
               </div>`
            : `<div class="overflow-hidden rounded-xl shadow">
                    <video controls class="w-full h-60 object-cover">
                        <source src="${item.src}">
                    </video>
               </div>`;
    });
}
