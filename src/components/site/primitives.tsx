import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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