// Función para cargar y mostrar los proyectos desde el JSON
async function cargarProyectos() {
    try {
        const response = await fetch('proyectos.json'); // Ruta del archivo JSON
        const proyectos = await response.json();

        const galeria = document.getElementById('galeria-proyectos');
        proyectos.forEach(proyecto => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.innerHTML = `
                <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
                <h3 class="project-title">${proyecto.nombre}</h3>
                <p class="project-description">${proyecto.descripcion}</p>
            `;
            galeria.appendChild(card);
        });
    } catch (error) {
        console.error("Error al cargar los proyectos:", error);
        alert("Hubo un problema al cargar los proyectos. Inténtalo de nuevo más tarde.");
    }
}

// Llama a la función cuando la página haya cargado
document.addEventListener('DOMContentLoaded', cargarProyectos);
