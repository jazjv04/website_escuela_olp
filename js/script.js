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
    loadComponent('homePage-container', `pages/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
}

let currentEventId = null;

function loadEvent(eventId) {
    currentEventId = eventId;
    loadComponent('homePage-container', 'pages/events-details.html');
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
            { type: "image", src: "images/eventos/orden/orden2.jpg" },
            { type: "image", src: "images/eventos/orden/orden3.jpg" },
            { type: "image", src: "images/eventos/orden/orden.jpg" },
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
            { type: "image", src: "images/eventos/inter/inter6.jpg" },
            { type: "image", src: "images/eventos/inter/inter.jpg" },
            { type: "image", src: "images/eventos/inter/inter2.jpg" },
            { type: "image", src: "images/eventos/inter/inter3.jpg" },
            { type: "image", src: "images/eventos/inter/inter4.jpg" },
            { type: "image", src: "images/eventos/inter/inter5.jpg" },
            { type: "image", src: "images/eventos/inter/inter7.jpg" },
            { type: "image", src: "images/eventos/inter/inter8.jpg" },
            { type: "image", src: "images/eventos/inter/inter9.jpg" },
            { type: "image", src: "images/eventos/inter/inter10.jpg" },
            { type: "image", src: "images/eventos/inter/inter11.jpg" },
            { type: "image", src: "images/eventos/inter/inter12.jpg" },
            { type: "image", src: "images/eventos/inter/inter13.jpg" },
            { type: "image", src: "images/eventos/inter/inter14.jpg" },
            { type: "image", src: "images/eventos/inter/inter15.jpg" },
            { type: "video", src: "videos/inter/video-inter1.mp4" }
        ]
    },
    "tipico": {
        title: "Conjunto Folclórico",
        date: "Octubre 2026",
        description: "🌟 ¡Así vibra el corazón de nuestra tradición!"+
        "El Conjunto Folclórico de la Escuela Octavio López Pascal es mucho más que un grupo de danza; es un proyecto administrativo que entrelaza movimiento, historia, música y comunidad. Aquí, cada zapateado, cada melodía y cada colorido traje cuenta la historia viva de nuestro país."+
        "Desde el ritmo vibrante hasta la expresión artística más profunda, nuestros estudiantes demuestran que la cultura no solo se estudia, sino que se siente, se baila y se lleva en el alma. 💃🏻🕺🏻🎶 "+
        "Una muestra del talento, la dedicación y el orgullo de nuestros estudiantes, quienes honran nuestras raíces para mantener viva la llama de la identidad y construir un futuro conectado con la riqueza de nuestro pasado. ✨ ",

        gallery: [
            { type: "image", src: "images/eventos/tipico/tipico.jpg" },
            { type: "image", src: "images/eventos/tipico/tipico2.jpg" },
            { type: "image", src: "images/eventos/tipico/tipico3.jpg" },
            { type: "image", src: "images/eventos/tipico/tipico4.jpg" },
            { type: "image", src: "images/eventos/tipico/tipico5.jpg" },
            { type: "image", src: "images/eventos/tipico/tipico6.jpg" },
            { type: "video", src: "videos/tipico/video-tipico1.mp4" },
            { type: "video", src: "videos/tipico/video-tipico2.mp4" },
            { type: "video", src: "videos/tipico/video-tipico3.mp4" },
        ]
    },
    "deportivo": {
        title: "Programas Deportivos",
        date: "Octubre 2026",
        description: "Nuestros Programas Deportivos son un pilar fundamental en la formación integral de nuestros estudiantes.",
        gallery: [
            { type: "image", src: "images/eventos/deportivo/natacion3.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion1.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion2.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion4.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion5.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion6.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion7.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion8.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion9.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion10.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion11.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion12.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion13.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion14.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion15.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion16.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion17.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion18.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion19.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion20.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion21.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion22.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion23.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion24.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion25.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion26.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion27.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion28.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion29.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion30.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion31.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion32.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion33.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion34.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion35.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion36.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion37.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion38.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion39.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion42.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion40.jpg" },
            { type: "image", src: "images/eventos/deportivo/natacion41.jpg" },

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
            { type: "image", src: "images/eventos/banda/banda8.jpg" },
            { type: "image", src: "images/eventos/banda/banda9.jpg" },
            { type: "image", src: "images/eventos/banda/banda10.jpg" },
            { type: "image", src: "images/eventos/banda/banda11.jpg" },
            { type: "image", src: "images/eventos/banda/banda12.jpg" },
            { type: "image", src: "images/eventos/banda/banda13.jpg" },
            { type: "image", src: "images/eventos/banda/banda14.jpg" },
            { type: "image", src: "images/eventos/banda/banda15.jpg" },
            { type: "image", src: "images/eventos/banda/banda16.jpg" },
            { type: "image", src: "images/eventos/banda/banda17.jpg" },
            { type: "image", src: "images/eventos/banda/banda18.jpg" },
            { type: "image", src: "images/eventos/banda/banda19.jpg" },
            { type: "image", src: "images/eventos/banda/banda20.jpg" },
            { type: "image", src: "images/eventos/banda/banda21.jpg" },
            { type: "image", src: "images/eventos/banda/banda22.jpg" },
            { type: "image", src: "images/eventos/banda/banda23.jpg" },
            { type: "video", src: "videos/banda/video-banda1.mp4"},
            { type: "video", src: "videos/banda/video-banda2.mp4" },
            { type: "video", src: "videos/banda/video-banda3.mp4" },
            { type: "video", src: "videos/banda/video-banda4.mp4" },
            { type: "video", src: "videos/banda/video-banda5.mp4" },
            { type: "video", src: "videos/banda/video-banda6.mp4" },
            { type: "video", src: "videos/banda/video-banda7.mp4" },
            { type: "video", src: "videos/banda/video-banda8.mp4" },
        ]
    },
    "campesino":{
        title: "Semana del Campesino",
        date: "Octubre 2026",
        description: "🌟 ¡Así celebramos nuestras raíces con orgullo y comunidad! "+
        "La Semana del Campesino es uno de los eventos más emblemáticos y esperados en la Escuela Octavio López Pascal. Cada septiembre, nuestra comunidad se une para honrar las tradiciones, la identidad cultural y el espíritu festivo que nos define. " +
        "Desde el emocionante escrutinio de latas en agosto donde estudiantes, docentes y familias eligen democráticamente a sus Reyes hasta los días llenos de juegos bufos, bailes tradicionales, coloridas caravanas y la coronación real, vivimos una fiesta que entrelaza alegría, folclor y aprendizaje vivencial. 👑🎪🚜 " +
        "Una muestra del compromiso de nuestros estudiantes por preservar y revitalizar la herencia campesina, demostrando que la tradición no solo se recuerda, ¡se vive, se baila y se comparte con orgullo! 🌾💃🏻🕺✨ ",
    gallery: [
        { type: "image", src: "images/eventos/campesino/camp1.jpg" },
        { type: "image", src: "images/eventos/campesino/camp2.jpg" },
        { type: "image", src: "images/eventos/campesino/camp3.jpg" },
        { type: "image", src: "images/eventos/campesino/camp4.jpg" },
        { type: "image", src: "images/eventos/campesino/camp5.jpg" },
        { type: "image", src: "images/eventos/campesino/camp6.jpg" },
        { type: "image", src: "images/eventos/campesino/camp7.jpg" },
        { type: "image", src: "images/eventos/campesino/camp8.jpg" },
        { type: "image", src: "images/eventos/campesino/camp9.jpg" },
        { type: "image", src: "images/eventos/campesino/camp10.jpg" },
        { type: "image", src: "images/eventos/campesino/camp11.jpg" },
        { type: "image", src: "images/eventos/campesino/camp12.jpg" },
        { type: "image", src: "images/eventos/campesino/camp13.jpg" },
        { type: "image", src: "images/eventos/campesino/camp14.jpg" },
        { type: "image", src: "images/eventos/campesino/camp15.jpg" },
        { type: "image", src: "images/eventos/campesino/camp16.jpg" },
        { type: "image", src: "images/eventos/campesino/camp17.jpg" },
        { type: "image", src: "images/eventos/campesino/camp18.jpg" },
        { type: "image", src: "images/eventos/campesino/camp19.jpg" },
        { type: "image", src: "images/eventos/campesino/camp20.jpg" },
        { type: "image", src: "images/eventos/campesino/camp21.jpg" },
        { type: "image", src: "images/eventos/campesino/camp22.jpg" },
        { type: "image", src: "images/eventos/campesino/camp23.jpg" },
        { type: "image", src: "images/eventos/campesino/camp24.jpg" },
        { type: "image", src: "images/eventos/campesino/camp25.jpg" },
        { type: "image", src: "images/eventos/campesino/camp26.jpg" },
        { type: "image", src: "images/eventos/campesino/camp27.jpg" },
        { type: "image", src: "images/eventos/campesino/camp28.jpg" },
        { type: "image", src: "images/eventos/campesino/camp29.jpg" },
        { type: "image", src: "images/eventos/campesino/camp30.jpg" },
        { type: "image", src: "images/eventos/campesino/camp31.jpg" },
        { type: "image", src: "images/eventos/campesino/camp32.jpg" },
        { type: "image", src: "images/eventos/campesino/camp33.jpg" },
        { type: "image", src: "images/eventos/campesino/camp34.jpg" },
        { type: "image", src: "images/eventos/campesino/camp35.jpg" },
        { type: "image", src: "images/eventos/campesino/camp36.jpg" },
        { type: "image", src: "images/eventos/campesino/camp37.jpg" },
        { type: "image", src: "images/eventos/campesino/camp38.jpg" },
        { type: "image", src: "images/eventos/campesino/camp39.jpg" },
        { type: "image", src: "images/eventos/campesino/camp40.jpg" },
        { type: "image", src: "images/eventos/campesino/camp41.jpg" },
        { type: "image", src: "images/eventos/campesino/camp42.jpg" },

        { type: "video", src: "videos/campesino/camp1.mp4" },
        { type: "video", src: "videos/campesino/camp2.mp4" },
        { type: "video", src: "videos/campesino/camp3.mp4" },
        { type: "video", src: "videos/campesino/camp4.mp4" },
        { type: "video", src: "videos/campesino/camp5.mp4" },
        { type: "video", src: "videos/campesino/camp6.mp4" },
    ]
    },

    "macano": {
        title: "Gira a Macano de Boquerón",
        date: "Octubre 2026",
        description: "🐄 ¡Así se aprende de la vida agrícola y la gestión sostenible!" + 
        "Continuando con nuestro compromiso por una educación vivencial, nuestros estudiantes de 6º realizaron una enriquecedora visita a la Finca El Macano, perteneciente al Colegio Secundario del mismo nombre en Boquerón. Esta experiencia les permitió conocer de primera mano proyectos productivos y de manejo sostenible con diferentes animales. " +
        "Durante el recorrido, los estudiantes observaron y aprendieron sobre la cría, el cuidado y la importancia de especies como bovinos, porcinos, aves y otros animales de granja. Fue una lección práctica en producción animal, sostenibilidad y emprendimiento agropecuario, que conectó los conocimientos teóricos con las realidades del campo y la autosuficiencia. 🐖🐓🌱🚜" +
        "Esta visita refuerza nuestra visión de una formación integral, donde los estudiantes no solo adquieren conocimientos académicos, sino también un profundo respeto por el trabajo de la tierra, la responsabilidad en la producción de alimentos y las oportunidades que ofrece el sector agropecuario para el futuro. 💪📚🌾 "+
        "Una muestra más de cómo en la Escuela Octavio López Pascal educamos para la vida, conectando a nuestros estudiantes con experiencias reales que inspiran, enseñan y transforman. ✨ ",
        gallery: [
            { type: "image", src: "images/eventos/giras/macano/macano1.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano2.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano3.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano4.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano5.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano6.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano7.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano8.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano9.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano10.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano11.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano12.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano14.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano15.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano16.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano17.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano18.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano19.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano20.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano21.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano22.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano23.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano24.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano25.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano26.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano27.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano28.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano29.jpg" },
            { type: "image", src: "images/eventos/giras/macano/macano30.jpg" },


            { type: "video", src: "videos/macano/macano1.mp4" },
            { type: "video", src: "videos/macano/macano2.mp4" },
            { type: "video", src: "videos/macano/macano3.mp4" },
            { type: "video", src: "videos/macano/macano4.mp4" },
            { type: "video", src: "videos/macano/macano5.mp4" },
            { type: "video", src: "videos/macano/macano6.mp4" },
        ]
    },
    "velo": {
        title: "Gira a Finca El Velo",
        date: "Octubre 2026",
        description: "🌿 ¡Así se expanden las aulas hacia la naturaleza y el conocimiento! Nuestras giras académicas son experiencias transformadoras donde el aprendizaje traspasa las paredes del salón para sumergirse en el mundo real. Un ejemplo brillante fue la visita de nuestros estudiantes de 5° y 6° grado a la Finca El Velo, un santuario natural que se convirtió en el laboratorio perfecto para un proyecto vivo de biodiversidad."+ 
        "Esta salida de campo, diseñada desde la clase de Ciencias Naturales y enriquecida de forma interdisciplinaria con Español, Inglés y Educación Física, permitió a nuestros jóvenes científicos explorar ecosistemas, identificar especies y comprender la delicadeza y la importancia de la conservación. Fue una lección donde la biología, la ecología, la expresión escrita, el vocabulario científico y la actividad física se unieron en una sola aventura formativa. 🔍🐞🌳📝🏃🏻‍♀️🏃🏻‍♂️" +
        "Una muestra del compromiso de la Escuela Octavio López Pascal con una educación integral, experiencial y conectada, formando no solo estudiantes, sino futuros guardianes de nuestro planeta, con mentes curiosas, habilidades múltiples y corazones conectados a la naturaleza. 🌎❤️✨" ,
        gallery: [
            { type: "image", src: "images/eventos/giras/velo/velo3.jpg" },
            { type: "image", src: "images/eventos/giras/velo/velo1.jpg" },
            { type: "image", src: "images/eventos/giras/velo/velo2.jpg" },
            { type: "image", src: "images/eventos/giras/velo/velo4.jpg" },
            { type: "image", src: "images/eventos/giras/velo/velo5.jpg" },
            { type: "image", src: "images/eventos/giras/velo/velo6.jpg" },
            { type: "image", src: "images/eventos/giras/velo/velo7.jpg" },
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
    if (item.type === "image") {
            gallery.innerHTML += `
            <div onclick="openLightbox('${item.src}','image')"
                class="group relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in">
                <img src="${item.src}" 
                    class="w-full object-cover 
                            group-hover:scale-110 transition duration-700">
            </div>
            `;
        }

        if (item.type === "video") {
            gallery.innerHTML += `
            <div class="relative group cursor-pointer"
                onclick="toggleVideo(this)">
                <video class="w-full object-cover rounded-2xl">
                <source src="${item.src}">
                </video>

                <div class="play-btn absolute inset-0 flex items-center justify-center 
                            bg-black/30 group-hover:bg-black/40 transition">
                <i class="fas fa-play text-white text-5xl"></i>
                </div>
            </div>
            `;
        }

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

function toggleVideo(wrapper) {
  const video = wrapper.querySelector("video");
  const icon = wrapper.querySelector("i");

  // Pausar todos los demás
  document.querySelectorAll("#event-gallery video").forEach(v => {
    if (v !== video) {
      v.pause();
      v.closest(".relative")?.querySelector("i")
        ?.classList.replace("fa-pause","fa-play");
    }
  });

  if (video.paused) {
    video.play();
    icon.classList.replace("fa-play","fa-pause");
  } else {
    video.pause();
    icon.classList.replace("fa-pause","fa-play");
  }

  video.onended = () => {
    icon.classList.replace("fa-pause","fa-play");
  };
}

//heder dropdown
function navigateTo(page, sectionId) {
  loadPage(page);

  // Espera a que cargue el contenido
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".relative")) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('show');
    });
  }
});