import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { timeline } from "@/data/site";

export function Experience() {
  return (
    <section id="experiencia" className="section-shell">
      <Reveal>
        <SectionHeading
          index="04 — trajetória"
          title="Formação e aprendizado"
          subtitle="O caminho que venho percorrendo entre estudos, prática e projetos."
        />
      </Reveal>

      <ol className="relative mt-12 border-l border-border pl-6 sm:pl-8">
        {timeline.map((item, i) => (
          <li key={item.title} className="relative pb-8 last:pb-0">
            <Reveal delay={i * 80}>
              <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2rem+5px)]" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {item.period}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
