export function TechCard({ category, items }) {
  return (
    <div className="surface-card group h-full p-6">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
          {category}
        </h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
