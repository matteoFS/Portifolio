import hoopzoneImage from "@/assets/project-hoopzone.jpg";
import vanmosImage from "@/assets/project-vanmos.jpg";

/**
 * Fonte de dados dos projetos.
 *
 * Hoje os dados são locais. Para futuramente consumir a API REST (Spring Boot),
 * basta trocar a implementação de `getProjects()` por um fetch, mantendo o
 * mesmo formato dos objetos. Nenhum componente precisa mudar.
 *
 * Exemplo futuro:
 *   export async function getProjects() {
 *     const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
 *     return res.json();
 *   }
 *
 * Formato de cada projeto:
 *   { id, name, description, technologies: string[], image, liveUrl?, repoUrl?, status? }
 */
export const projects = [
  {
    id: "hoopzone",
    name: "Hoopzone",
    description:
      "Projeto web desenvolvido para gerenciamento e apresentação de produtos esportivos.",
    technologies: ["React.js", "Spring Boot", "MySQL"],
    image: hoopzoneImage,
    repoUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    status: "Em desenvolvimento",
  },
  {
    id: "vanmos",
    name: "VanMos",
    description:
      "Sistema desenvolvido como projeto acadêmico para solucionar um problema real através da tecnologia.",
    technologies: ["React.js", "API REST", "Java", "MySQL"],
    image: vanmosImage,
    repoUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    status: "Projeto acadêmico",
  },
];

export function getProjects() {
  return projects;
}
