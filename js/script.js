// Función para inicializar todos los componentes
function initializeComponents() {
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeAnimations();
    initializePageLoad();
    initializeEventDetail();
    initCarousel();

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
    loadComponent('homePage-container', `/pages/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
}

let currentEventId = null;

function loadEvent(eventId) {
    currentEventId = eventId;
    loadComponent('homePage-container', '/pages/events-details.html');
    window.scrollTo({ top: 0, behavior: 'instant' });
}


const eventsData = {
    "orden-manuel": {
        title: "Orden Manuel José Hurtado 2024 - Decreto a Nivel Nacional",
        date: "Octubre 2026",
        description: "🏆 ¡Así se escribe la historia de la excelencia educativa! " +
        "Con inmenso orgullo, la Escuela Octavio López Pascal fue distinguida en el 2024 con la Orden Manuel José Hurtado, el máximo reconocimiento que otorga el Ministerio de Educación de Panamá a la calidad y la excelencia escolar. Este prestigioso galardón es el fruto del compromiso inquebrantable de toda nuestra comunidad: del esfuerzo diario de nuestros estudiantes, de la dedicación innovadora de nuestros docentes, del apoyo fundamental de las familias y de una gestión centrada en la mejora continua. " +
        "La Orden Manuel José Hurtado valora nuestro alto rendimiento académico, nuestras prácticas pedagógicas innovadoras, la sana convivencia y la participación de todos los que hacemos posible el milagro de educar. No es solo un premio; es un reconocimiento a un modelo de escuela que funciona, que inspira y que transforma vidas. 📚✨ Este logro nos impulsa a seguir elevando nuestra misión, reafirmando que en la Escuela Octavio López Pascal construimos, día a día, las bases de un futuro lleno de oportunidades y excelencia para nuestras generaciones. 🚀 🇵🇦",
        gallery: [
            { type: "image", src: "images/eventos/orden2.jpg" },
            { type: "image", src: "images/eventos/orden.jpg" },
            
        ]
    },

    "proyectos-inter": {
        title: "Proyectos Interdisciplinarios",
        date: "Octubre 2026",
        description: "🌟 ¡Así se ve la innovación en acción!"+
        "Proyectos interdisciplinarios donde cada grupo explora, crea y aprende uniendo diferentes áreas del conocimiento."+
        "Desde ciencias hasta arte, nuestros estudiantes demuestran que cuando se conectan las disciplinas, el aprendizaje cobra vida. 💡📚🔬🎨"+
        "Una muestra del talento y dedicación de nuestros estudiantes, quienes integran saberes para proponer soluciones creativas y construir un futuro lleno de posibilidades. 🚀 ",
        gallery: [
            { type: "image", src: "images/eventos/inter.jpg" },
            { type: "video", src: "videos/inter.mp4" }
        ]
    },
    "tipico": {
        title: "Actividades Folclóricas",
        date: "Octubre 2026",
        description: "Celebramos nuestra identidad nacional a través de actividades folclóricas con nuestros estudiantes.",
        gallery: [
            { type: "image", src: "images/eventos/tipico.jpg" },
            { type: "video", src: "videos/tipico.mp4" }
        ]
    },
    "deportivo": {
        title: "Programas Deportivos",
        date: "Octubre 2026",
        description: "Nuestros Programas Deportivos son un pilar fundamental en la formación integral de nuestros estudiantes.",
        gallery: [
            { type: "image", src: "images/eventos/deportivo.jpg" },
        ]        
    },
    "banda": {
        title: "Nuestra Banda Escolar",
        date: "Octubre 2026",
        description: "🎺 ¡Así el ritmo y la armonía fortalecen nuestro espíritu comunitario!"+
        "La Banda de la Escuela Octavio López Pascal es mucho más que un conjunto musical; es un proyecto emblemático del Comité Social que teje disciplina, arte y orgullo patrio en cada nota. Aquí, los estudiantes no solo aprenden a tocar un instrumento, sino que cultivan valores de trabajo en equipo, compromiso y expresión cultural."+
        "Desde los ensayos dedicados hasta las presentaciones que llenan de color nuestros actos cívicos y festivos, la banda es un pilar de identidad y unidad escolar. 🏆 Un esfuerzo que brilló al obtener el Primer Lugar a nivel de centros educativos en los desfiles patrios realizados en el distrito de Boquete, coronando con excelencia el talento y la dedicación de nuestros estudiantes. 🥁🎶 "+
        "Este proyecto refleja nuestro compromiso con una educación integral, donde la música se convierte en una herramienta para formar ciudadanos responsables, unidos por la melodía del esfuerzo compartido y el amor por nuestra comunidad. ✨ ",

        gallery: [
            { type: "image", src: "images/eventos/banda/banda.jpg" },
            { type: "image", src: "images/eventos/banda/banda2.jpg" },
            { type: "image", src: "images/eventos/banda/banda3.jpg" },
            { type: "image", src: "images/eventos/banda/banda4.jpg" },
            { type: "image", src: "images/eventos/banda/banda5.jpg" },
            { type: "image", src: "images/eventos/banda/banda6.jpg" },
            { type: "image", src: "images/eventos/banda/banda7.jpg" },
        ]
    },
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
            ? `
            <div onclick="openLightbox('${item.src}', 'image')" 
                class="break-inside-avoid cursor-zoom-in group">
            <img src="${item.src}"
                class="w-full rounded-xl shadow-lg
                        transition group-hover:scale-[1.02]">
            </div>`
            : `
            <div onclick="openLightbox('${item.src}', 'video')" 
                class="break-inside-avoid cursor-pointer">
            <video muted class="w-full rounded-xl shadow-lg">
                <source src="${item.src}">
            </video>
            </div>`;
            });

    // Set hero background
    const heroBg = document.getElementById("event-hero-bg");
    if (heroBg && event.gallery[0]) {
    heroBg.style.backgroundImage = `url(${event.gallery[0].src})`;
    }

}

let currentEvent = 0;
let track = null;
let dots = null;
let totalEvents = 0;

function initCarousel() {
  track = document.getElementById("eventsTrack");
  dots = document.querySelectorAll(".dot");

  if (!track || dots.length === 0) return;

  totalEvents = dots.length;
  updateCarousel();
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentEvent * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-white", index === currentEvent);
    dot.classList.toggle("bg-white/40", index !== currentEvent);
  });
}

function nextEvent() {
  if (!track) return;
  currentEvent = (currentEvent + 1) % totalEvents;
  updateCarousel();
}

function prevEvent() {
  if (!track) return;
  currentEvent = (currentEvent - 1 + totalEvents) % totalEvents;
  updateCarousel();
}

function goToEvent(index) {
  currentEvent = index;
  updateCarousel();
}

setInterval(() => {
  if (track) nextEvent();
}, 6000);
