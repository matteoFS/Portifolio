import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const badges = [
  "Desenvolvedor em formação",
  "Foco em desenvolvimento web",
  "React.js",
  "Java / Spring Boot",
  "MySQL",
  "UI/UX e design",
];

export function About() {
  return (
    <section id="sobre" className="section-shell">
      <Reveal>
        <SectionHeading index="01 — sobre mim" title="Código com olhar de designer" />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal delay={80}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Comecei a programar por curiosidade e acabei encontrando ali duas coisas que
              gosto de verdade: resolver problemas e desenhar a forma como as pessoas
              interagem com eles.
            </p>
            <p>
              Hoje estudo desenvolvimento web todos os dias — no front-end com{" "}
              <span className="text-foreground">React.js</span>, no back-end com{" "}
              <span className="text-foreground">Java e Spring Boot</span> — e gosto de
              construir projetos completos, do banco de dados até o último detalhe de
              espaçamento na tela.
            </p>
            <p>
              Ainda estou no começo da carreira, e é justamente isso que me deixa animado:
              cada projeto é uma chance de aprender algo que eu não sabia na semana
              passada.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <li
                key={badge}
                className="rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/50"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-border px-5 py-3 font-mono text-[0.7rem] text-muted-foreground">
              ~/matteo — zsh
            </div>
            <div className="space-y-3 p-5 font-mono text-[0.78rem] leading-6 sm:text-sm">
              <p>
                <span className="text-accent">➜</span>{" "}
                <span className="text-primary-soft">whoami</span>
              </p>
              <p className="text-muted-foreground">matteo · dev em formação</p>
              <p>
                <span className="text-accent">➜</span>{" "}
                <span className="text-primary-soft">cat foco.txt</span>
              </p>
              <p className="text-muted-foreground">
                web · interfaces · APIs REST · banco de dados
              </p>
              <p>
                <span className="text-accent">➜</span>{" "}
                <span className="text-primary-soft">status</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                aprendendo, construindo, repetindo
                <span className="inline-block h-4 w-[2px] animate-caret bg-foreground" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
