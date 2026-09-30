import { ArrowDown, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/Button";

const codeLines = [
  { indent: 0, tokens: [["const", "kw"], [" developer", "var"], [" = ", "op"], ["{", "br"]] },
  { indent: 1, tokens: [["name", "prop"], [": ", "op"], ['"Matteo"', "str"], [",", "op"]] },
  { indent: 1, tokens: [["role", "prop"], [": ", "op"], ['"Dev em formação"', "str"], [",", "op"]] },
  { indent: 1, tokens: [["stack", "prop"], [": ", "op"], ["[", "br"], ['"React"', "str"], [", ", "op"], ['"Java"', "str"], ["]", "br"], [",", "op"]] },
  { indent: 1, tokens: [["learning", "prop"], [": ", "op"], ["true", "bool"]] },
  { indent: 0, tokens: [["};", "br"]] },
];

const tokenClass = {
  kw: "text-primary-soft",
  var: "text-foreground",
  op: "text-muted-foreground",
  prop: "text-primary",
  str: "text-accent",
  bool: "text-accent",
  br: "text-muted-foreground",
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/18 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-24 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pb-32 lg:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            Disponível para oportunidades
          </span>

          <p className="mt-8 font-mono text-sm text-muted-foreground">
            Olá, eu sou Matteo.
          </p>

          <h1 className="mt-3 text-[clamp(2.4rem,7vw,4.25rem)] font-semibold leading-[1.05]">
            <span className="text-gradient-primary">Desenvolvedor</span>
            <br />
            em formação
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-caret bg-accent align-baseline" />
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Construindo experiências digitais com código, criatividade e curiosidade.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projetos" size="lg" className="w-full sm:w-auto">
              Ver meus projetos
            </ButtonLink>
            <ButtonLink
              href="#sobre"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Conheça meu trabalho
            </ButtonLink>
          </div>

          <a
            href="#sobre"
            className="mt-12 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="h-3.5 w-3.5" /> scroll
          </a>
        </div>

        {/* Composição visual abstrata: terminal + blocos flutuantes */}
        <div className="relative">
          <div className="surface-card animate-float-soft overflow-hidden p-0 hover:translate-y-0">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="ml-2 font-mono text-[0.7rem] text-muted-foreground">
                developer.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[0.78rem] leading-7 sm:text-sm">
              <code>
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-4 shrink-0 select-none text-right text-muted-foreground/40">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      {line.tokens.map(([text, type], j) => (
                        <span key={j} className={tokenClass[type]}>
                          {text}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
            <div className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-[0.7rem] text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> build ok
              </span>
              <span>utf-8 · ln 6</span>
            </div>
          </div>

          <div
            className="surface-card absolute -left-4 -bottom-8 hidden animate-float-soft items-center gap-2 px-4 py-3 sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <Sparkles className="h-4 w-4 text-primary-soft" />
            <span className="font-mono text-xs text-muted-foreground">design + code</span>
          </div>

          <div
            className="absolute -right-3 -top-6 hidden h-16 w-16 animate-float-soft rounded-xl border border-primary/30 bg-primary/10 backdrop-blur sm:block"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>
    </section>
  );
}
