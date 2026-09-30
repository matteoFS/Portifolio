import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none";

// variant: "primary" | "ghost" | "outline"
const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-soft hover:-translate-y-0.5 hover:glow-primary",
  outline:
    "border border-border-strong text-foreground hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary",
};

// size: "md" | "lg"
const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = "primary", size = "md", className, children, ...props }) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
