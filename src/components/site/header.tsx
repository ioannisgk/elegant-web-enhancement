import { useEffect, useState } from "react";
import { Anchor, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContact } from "./contact";

const links = [
  { href: "#architecture", label: "Architecture" },
  { href: "#blueprint", label: "Delivery" },
  { href: "#stack", label: "Stack" },
  { href: "#pricing", label: "Pricing" },
  { href: "#whitelabel", label: "Whitelabel" },
  { href: "#calculator", label: "TCO" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const { open } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-ink-foreground">
              <Anchor className="h-4.5 w-4.5" />
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              Kube<span className="text-brand">Sailor</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => open("Blueprint package")}
              className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground transition hover:bg-ink/90"
            >
              Book a scoping call
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-surface px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMenuOpen(false);
              open("Blueprint package");
            }}
            className="mt-5 w-full rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-ink-foreground"
          >
            Book a scoping call
          </button>
        </div>
      ) : null}
    </header>
  );
}