document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carrusel-container");
    const slides = document.querySelectorAll(".carrusel-slide");
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Calcula el próximo índice
        container.style.transform = `translateX(-${currentIndex * 100}%)`; // Desplaza el contenedor para mostrar el siguiente slide
    }

    // Cambia de slide cada 3 segundos
    setInterval(showNextSlide, 3000);
});
