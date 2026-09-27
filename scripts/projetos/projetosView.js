import { projetos } from "./projetosData.js";

function createProjectCard(projeto) {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
        <span class="badge ${projeto.badgeClass}">${projeto.badge}</span>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
    `;
    return article;
}

export function initializeProjects() {
    document.querySelectorAll("[data-project-category]").forEach((container) => {
        const category = container.dataset.projectCategory;
        const categoryProjects = projetos.filter(
            (projeto) => projeto.categoria === category
        );

        categoryProjects.forEach((projeto) => {
            container.appendChild(createProjectCard(projeto));
        });
    });
}
