import { useEffect, useState } from "react";
import { Anchor, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useContact } from "./contact";
import { PreloaderLink } from "./preloader";

const links = [
  { to: "/architecture", label: "Architecture" },
  { to: "/delivery", label: "Delivery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/whitelabel", label: "Whitelabel" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const { open } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-surface/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-page">
        <div className="grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-ink-foreground">
              <Anchor className="h-4.5 w-4.5" />
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              Kube<span className="text-brand">Sailor</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "bg-surface-muted text-foreground" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => open("Discovery call")}
              className="cursor-pointer rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground transition hover:bg-ink/90"
            >
              Book a call
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-xl border border-border bg-surface lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-surface px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "text-foreground" }}
                className="border-b border-border/60 py-3 text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => {
              setMenuOpen(false);
              open("Discovery call");
            }}
            className="mt-5 w-full cursor-pointer rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-ink-foreground"
          >
            Book a call
          </button>
        </div>
      ) : null}
    </header>
  );
}