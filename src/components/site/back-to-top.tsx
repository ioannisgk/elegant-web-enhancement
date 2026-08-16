import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface shadow-lift transition-all duration-300 hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20 lg:right-8 lg:bottom-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5 text-foreground" />
    </button>
  );
}
