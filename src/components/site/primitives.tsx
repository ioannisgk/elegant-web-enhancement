import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  meta?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.3] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative max-w-4xl space-y-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        {meta?.length ? (
          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
            {meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "gold" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tone === "brand"
          ? "border-brand/20 bg-brand-soft text-accent-foreground"
          : "border-gold/25 bg-gold-soft text-gold",
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "brand",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "brand" | "gold";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ink" | "gold" }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20",
        variant === "primary" && "bg-brand text-primary-foreground hover:bg-brand-strong shadow-soft",
        variant === "secondary" &&
          "border border-border bg-surface text-foreground hover:border-foreground/25 hover:bg-surface-muted",
        variant === "ink" && "bg-ink text-ink-foreground hover:bg-ink/90",
        variant === "gold" && "bg-gold text-ink-foreground hover:brightness-95",
        className,
      )}
    >
      {children}
    </button>
  );
}