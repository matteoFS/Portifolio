# matteo.dev — Portfólio

Portfólio em **React + Vite + JavaScript** com Tailwind CSS v4.

## Rodando

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview  # testa o build
```

## Estrutura

```
src/
├── main.jsx            # ponto de entrada
├── App.jsx             # monta a página (antes: routes/index.tsx)
├── index.css           # design system (tokens de cor, animações, utilities)
├── components/         # Button, Navbar, Footer, Reveal, ProjectCard...
├── sections/           # Hero, About, Technologies, Projects, Experience, Contact
├── data/
│   ├── site.js         # nome, links, tecnologias, timeline
│   └── projects.js     # projetos (trocar getProjects() por fetch quando tiver API)
└── lib/utils.js        # cn() = clsx + tailwind-merge
```

O alias `@/` aponta para `src/` (configurado em `vite.config.js` e `jsconfig.json`).

## Onde editar o conteúdo

- Nome, GitHub, LinkedIn, e-mail, tecnologias e trajetória: `src/data/site.js`
- Projetos: `src/data/projects.js` (imagens em `src/assets/`)
- Textos do "Sobre": `src/sections/About.jsx`

## Integrar com a API Spring Boot

- Projetos: implemente o `fetch` em `getProjects()` (exemplo comentado no arquivo).
- Formulário de contato: `handleSubmit` em `src/sections/Contact.jsx` (exemplo comentado).
- Crie um `.env` com `VITE_API_URL=http://localhost:8080`.
