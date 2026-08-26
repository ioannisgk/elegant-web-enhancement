import { Anchor, ArrowUpRight, Mail } from "lucide-react";
import { PreloaderLink } from "./preloader";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Reference architecture", to: "/architecture" },
      { label: "The Platform", to: "/platform" },
      { label: "Delivery & operations", to: "/delivery" },
      { label: "Home", to: "/" },
    ],
  },
  {
    title: "Commercial",
    links: [
      { label: "Pricing & TCO", to: "/pricing" },
      { label: "Whitelabel & IP", to: "/whitelabel" },
      { label: "FAQ", to: "/faq" },
    ],
  },
] as const;

export function SiteFooter() {
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
              KubeSailor is a multi-cluster private cloud platform — based on Kubernetes, with dedicated LB, DNS and
              storage clusters, full observability and GitOps automation.
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
                    <PreloaderLink
                      to={link.to}
                      samePageScrollTo=""
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </PreloaderLink>
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
              Discovery calls are run by the engineers who deliver the build. We are ready to answer all your questions.
            </p>
            <a
              href="mailto:info@kubesailor.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-2 transition hover:text-foreground hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              info@kubesailor.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KubeSailor. All rights reserved.</p>
          <p>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/ioannisgko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground underline-offset-2 transition hover:text-foreground hover:underline group"
            >
              Ioannis Gkourtzounis
              <ArrowUpRight className="h-2.5 w-2.5 opacity-40 transition-opacity group-hover:opacity-100" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
