/*
    Cambio de título de documento al salir del sitio
*/
const originalTitle = document.title;

window.addEventListener('blur', () => {
        document.title = '¡Contáctate!🌟';
    });

window.addEventListener('focus', () => {
        document.title = originalTitle;
    });




/* 
    Animación barra de navegación superior (Inicio, Trabajos, Contacto)
*/
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 150) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




/*
Carrusel dentro de los modales (alambrismo, costura, manualidades, etc.)
*/
document.addEventListener("DOMContentLoaded", () => {
    // Buscar todos los checkbox que abren modales
    const modalCheckboxes = document.querySelectorAll('input[id^="btn-modal-"]');
    
    modalCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
        // Construir el nombre del contenedor a partir del ID del checkbox
        // ej: btn-modal-alambrismo → .contenedor-alambrismo
        const tipo = checkbox.id.replace("btn-modal-", "");
        const modalContainer = document.querySelector(`.contenedor-${tipo}`);
        
        if (modalContainer) {
            initCarousel(modalContainer);
        }
    }
});
});
});

function initCarousel(root) {
    let currentIndex = 0;

    const galleryContainer = root.querySelector(".gallery-container");
    const galleryItems = root.querySelectorAll(".gallery-item");
    const totalImages = galleryItems.length;
    const prevBtn = root.querySelector(".prev-button");
    const nextBtn = root.querySelector(".next-button");

    if (!galleryContainer || totalImages === 0) return;

    function navigate(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
            const offset = -currentIndex * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
    }
    
    // Evitar agregar listeners duplicados (si se abre más de una vez)
    prevBtn.onclick = () => navigate(-1);
    nextBtn.onclick = () => navigate(1);
    
    // Reset al abrir
    galleryContainer.style.transform = "translateX(0%)";
}
