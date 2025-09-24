window.addEventListener('scroll', function() {
        var navbar = document.querySelector('header');
        if (window.scrollY > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

});




// Obtener los elementos
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close-button");

// Abrir el modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Usa 'flex' o 'block' para mostrarlo
});

// Cerrar el modal con el botón de cerrar
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});