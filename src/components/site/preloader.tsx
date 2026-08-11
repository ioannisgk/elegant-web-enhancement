import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Anchor } from "lucide-react";
import { useRouterState, Link, type LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const PreloaderContext = createContext<{
  show: () => void;
  hide: () => void;
} | null>(null);

function usePreloader() {
  const ctx = useContext(PreloaderContext);
  if (!ctx) throw new Error("usePreloader must be used inside PreloaderProvider");
  return ctx;
}

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const show = useCallback(() => {
    clearTimers();
    setVisible(true);
    setFadeOut(false);
    setNavigating(true);
  }, [clearTimers]);

  const hide = useCallback(() => {
    setFadeOut(true);
    const t = setTimeout(() => {
      setVisible(false);
      setNavigating(false);
    }, 500);
    timersRef.current.push(t);
  }, []);

  // Initial visit: auto-fade after hydration so the brand moment is visible
  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 650);
    const t2 = setTimeout(() => setVisible(false), 1050);
    timersRef.current.push(t1, t2);
    return () => clearTimers();
  }, [clearTimers]);

  // Hide the preloader once the route transition initiated by a nav link is resolved
  const status = useRouterState({ select: (s) => s.status });
  useEffect(() => {
    if (navigating && status === "idle") {
      hide();
    }
  }, [navigating, status, hide]);

  return (
    <PreloaderContext.Provider value={{ show, hide }}>
      <Preloader visible={visible} fadeOut={fadeOut} />
      {children}
    </PreloaderContext.Provider>
  );
}

function Preloader({ visible, fadeOut }: { visible: boolean; fadeOut: boolean }) {
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
        <div className="relative grid h-20 w-20 place-items-center">
          <span className="absolute inset-0 rounded-2xl border border-border bg-surface shadow-lift" />
          <span className="absolute inset-0 rounded-2xl border-2 border-brand/30 animate-pulse-ring" />
          <span className="absolute inset-[-12px] rounded-[2rem] border border-brand/10" />
          <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-ink text-ink-foreground">
            <Anchor className="h-6 w-6" />
          </span>
        </div>
        <div className="text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Kube<span className="text-brand">Sailor</span>
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Private Cloud Platform
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce-dot [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce-dot [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce-dot" />
        </div>
      </div>
    </div>
  );
}

export { usePreloader };

// Preloader-aware link for main navigation only.
// It shows the preloader only when navigating to a different route.
export function PreloaderLink(props: LinkProps) {
  const { show } = usePreloader();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { to } = props;

  return (
    <Link
      {...props}
      onClick={(e) => {
        // Only trigger the preloader when the destination is a different page
        if (typeof to === "string" && to !== pathname) {
          show();
        }
        props.onClick?.(e);
      }}
    />
  );
}
