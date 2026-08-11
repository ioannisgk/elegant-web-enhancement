import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isPending = useRouterState({ select: (s) => s.isLoading });
  const [showLoader, setShowLoader] = useState(false);
  const [animate, setAnimate] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (!isPending) {
      setShowLoader(false);
      return;
    }
    const timer = setTimeout(() => setShowLoader(true), 120);
    return () => clearTimeout(timer);
  }, [isPending]);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-x-0 top-0 z-[100] h-0.5 bg-brand transition-opacity duration-300",
          showLoader ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="h-full w-full animate-page-progress bg-gradient-to-r from-brand/0 via-brand-foreground/80 to-brand/0" />
      </div>

      <div
        key={pathname}
        className={cn(
          "transition-[opacity,transform] duration-500 ease-out",
          animate ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
        )}
      >
        {children}
      </div>
    </>
  );
}

