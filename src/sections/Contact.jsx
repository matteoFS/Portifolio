import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/40";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState(false);

  /**
   * Modo demonstração: não existe back-end nesta versão.
   * Para integrar com a API Spring Boot, substitua o corpo por:
   *   await fetch(`${import.meta.env.VITE_API_URL}/contact`, { method: "POST", body: JSON.stringify(form) })
   */
  function handleSubmit(event) {
    event.preventDefault();
    setNotice(true);
  }

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setNotice(false);
  }

  return (
    <section id="contato" className="section-shell">
      <Reveal>
        <SectionHeading
          index="05 — contato"
          title="Vamos construir algo juntos?"
          subtitle="Se você quer conversar sobre um projeto, uma oportunidade ou apenas trocar ideia sobre código, é só chamar."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="surface-card space-y-4 p-6 hover:translate-y-0">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
                Nome
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Seu nome"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="voce@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Conte um pouco sobre a sua ideia..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Enviar mensagem
            </Button>

            {notice ? (
              <p
                role="status"
                className="flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Formulário em modo demonstração — nenhuma mensagem foi enviada ainda. O
                envio real será feito quando a API estiver conectada.
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={160}>
          <div className="space-y-3">
            <ContactLink
              href={site.github}
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="Meus repositórios e códigos"
            />
            <ContactLink
              href={site.linkedin}
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="Trajetória profissional"
            />
            <ContactLink
              href={`mailto:${site.email}`}
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={site.email}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label, value }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="surface-card flex items-center gap-4 p-5"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary-soft">
        {icon}
      </span>
      <span>
        <span className="block text-sm font-medium">{label}</span>
        <span className="block text-xs text-muted-foreground">{value}</span>
      </span>
    </a>
  );
}
