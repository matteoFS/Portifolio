import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getProjects } from "@/data/projects";

export function Projects() {
  const projects = getProjects();

  return (
    <section id="projetos" className="relative section-shell">
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <Reveal>
        <SectionHeading
          index="03 — projetos"
          title="Coisas que eu construí"
          subtitle="Projetos onde coloco em prática front-end, back-end e integração entre eles."
        />
      </Reveal>

      <div className="relative mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 110} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
