export function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{index}</span>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
