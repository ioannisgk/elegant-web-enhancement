import { useEffect, useState } from "react";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Small safety delay so the loader is noticeable even on fast hydration
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 650);
    const hideTimer = window.setTimeout(() => setVisible(false), 1050);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ease-out",
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="relative flex flex-col items-center gap-5">
        {/* Logo mark with animated ring */}
        <div className="relative grid h-20 w-20 place-items-center">
          {/* Outer pulsing ring */}
          <span className="absolute inset-0 rounded-2xl border border-border bg-surface shadow-lift" />
          <span className="absolute inset-0 rounded-2xl border-2 border-brand/30 animate-pulse-ring" />
          <span className="absolute inset-[-12px] rounded-[2rem] border border-brand/10" />

          {/* Brand icon */}
          <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-ink text-ink-foreground">
            <Anchor className="h-6 w-6" />
          </span>
        </div>

        {/* Wordmark */}
        <div className="text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Kube<span className="text-brand">Sailor</span>
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Private Cloud Platform
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce-dot [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce-dot [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce-dot" />
        </div>
      </div>
    </div>
  );
}
