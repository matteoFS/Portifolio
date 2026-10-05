import hoopzoneImage from "@/assets/hoopzone.png";
import frameSixImage from "@/assets/Frame 6.png";

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
    active: false,
    name: "Hoopzone",
    description:
      "Projeto web desenvolvido para gerenciamento e apresentação de produtos esportivos.",
    technologies: ["React.js", "Spring Boot", "MySQL"],
    image: hoopzoneImage,
    repoUrl: "https://github.com/matteoFS/Hoopzone",
    liveUrl: "https://hoopzone.vercel.app/",
    status: "Em desenvolvimento",
  },
  {
    id: "vanmos",
    name: "VanMos",
    description:
      "Sistema desenvolvido como projeto acadêmico para solucionar um problema real através da tecnologia.",
    technologies: ["React.js", "API REST", "Java", "MySQL"],
    image: frameSixImage,
    repoUrl: "https://github.com/theusll/VanMos",
    liveUrl: "https://github.com/theusll/VanMos",
    status: "Projeto acadêmico",
  },
];

export function getProjects() {
  return projects;
}
