import { ArrowUpRight, Github } from "lucide-react";
import { ButtonLink } from "@/components/Button";

export function ProjectCard({ project }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.name}`}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {project.status ? (
          <span className="absolute left-4 top-4 rounded-md border border-border-strong bg-background/80 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground backdrop-blur">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-primary/12 px-2.5 py-1 font-mono text-[0.72rem] text-primary-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver projeto <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          ) : null}
          {project.repoUrl ? (
            <ButtonLink
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
            >
              <Github className="h-4 w-4" /> GitHub
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
