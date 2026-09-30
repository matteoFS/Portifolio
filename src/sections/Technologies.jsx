import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechCard } from "@/components/TechCard";
import { techGroups } from "@/data/site";

export function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <Reveal>
        <SectionHeading
          index="02 — tecnologias"
          title="Ferramentas do dia a dia"
          subtitle="O que eu uso para estudar e construir projetos — do navegador ao banco de dados."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 90}>
            <TechCard category={group.category} items={group.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
