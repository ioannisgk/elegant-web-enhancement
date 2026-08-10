import { Anchor } from "lucide-react";
import { useContact } from "./contact";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Architecture", href: "#architecture" },
      { label: "Delivery timeline", href: "#blueprint" },
      { label: "Technology stack", href: "#stack" },
      { label: "Comparison", href: "#comparison" },
    ],
  },
  {
    title: "Commercial",
    links: [
      { label: "Pricing tiers", href: "#pricing" },
      { label: "Whitelabel & IP", href: "#whitelabel" },
      { label: "TCO calculator", href: "#calculator" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function SiteFooter() {
  const { open } = useContact();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-ink-foreground">
                <Anchor className="h-4.5 w-4.5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Kube<span className="text-brand">Sailor</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A productized multi-cluster private cloud platform for teams building on bare metal,
              with full data sovereignty and high availability by default.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {column.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground transition hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Start a project
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Scoping calls are run by the engineers who deliver the build.
            </p>
            <button
              onClick={() => open("Scoping call")}
              className="w-full rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-ink-foreground transition hover:bg-ink/90"
            >
              Book a scoping call
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KubeSailor. All rights reserved.</p>
          <p>CNCF-native · zero vendor lock-in · Ubuntu 24.04 LTS</p>
        </div>
      </div>
    </footer>
  );
}