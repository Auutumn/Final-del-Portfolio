

// Enviar formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    fetch(`https://magicloops.dev/api/loop/4b46d61a-253b-425b-a37a-c034a2e46450/run?email=${email}&nombre=${nombre}&apellido=${apellido}&mensaje=${mensaje}`, {
        method: 'GET',
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('feedback').textContent = "Mensaje enviado correctamente!";
            document.getElementById('feedback').style.color = "#00FF00";
            document.getElementById('contact-form').reset();
        } else {
            throw new Error("Error en el envío");
        }
    })
    .catch(error => {
        document.getElementById('feedback').textContent = "Error al enviar el mensaje.";
        document.getElementById('feedback').style.color = "#FF0000";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const galeriaProyectos = document.getElementById('galeria-proyectos');
        galeriaProyectos.innerHTML = ''; // Limpiar contenido inicial

        data.slice(2).forEach(project => { // Saltar los primeros dos proyectos si no son necesarios
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-card');
            projectDiv.innerHTML = `
                <img src="${project.image}" alt="${project.title}" />
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            galeriaProyectos.appendChild(projectDiv);
        });
    })
    .catch(error => console.error("Error al cargar proyectos:", error));
