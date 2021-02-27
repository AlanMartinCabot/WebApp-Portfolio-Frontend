const url = 'http://localhost:8085/project';
const urlproject = 'http://localhost:8085/projects';

// Cuando se crea un nuevo Proyecto
export const newProject = async project => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los Proyectos
export const getProjects = async () => {

    try {
        const resultado = await fetch(urlproject);
        const projects = await resultado.json();

        return projects;
    } catch (error) {
        console.log(error)
    }
}

// Elimina un Proyecto...
export const deleteProject = async id => {

    try {

        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}