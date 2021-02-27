import { getProjects, deleteProject } from './API.js';

(function () {
    const listado = document.querySelector('#list-projects');

    document.addEventListener('DOMContentLoaded', showAllProjects);

    listado.addEventListener('click', confirmProject);

    async function showAllProjects() {

    
        const projects = await getProjects();

        projects.forEach(project => {
            const { title, description, image, linkNetlify, linkGithub, id } = project;

            const row = document.createElement('tr');

            row.innerHTML += `
                <div class="card cards" style="width: 40rem; ${id}">
                <img class="card-img-top" src="${image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <a href="${linkNetlify}" class="btn btn-primary">Ir al Proyecto</a>
                        <a href="${linkGithub}" class="btn btn-secondary">Ir al GitHub</a>
                    </div>
                </div>
            `;

            listado.appendChild(row);
        });
    }

    function confirmProject(e) {
        if (e.target.classList.contains('eliminar')) {
            const ProjectId = e.target.dataset.project;

            const confirmar = confirm('¿Deseas eliminar este proyecto??');

            if (confirmar) {
                deleteProject(ProjectId);
            }
        }
    }
})();