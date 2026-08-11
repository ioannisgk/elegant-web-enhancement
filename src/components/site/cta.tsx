import { ArrowRight } from "lucide-react";
import { useContact } from "./contact";
import { PreloaderLink } from "./preloader";

export function Cta() {
  const { open } = useContact();

  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-ink px-8 py-14 text-ink-foreground lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Ready to run your own cloud?
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-ink-foreground/70">
                Send us your server inventory and target workloads. We'll come back with a
                topology, a fixed quote and a start date — usually within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button
                onClick={() => open("Discovery call")}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-surface-muted"
              >
                Book a call <ArrowRight className="h-4 w-4" />
              </button>
              <PreloaderLink
                to="/pricing"
                samePageScrollTo="pricing"
                className="inline-flex items-center justify-center rounded-xl border border-ink-foreground/20 px-6 py-3.5 text-sm font-semibold transition hover:bg-ink-foreground/5"
              >
                Review pricing
              </PreloaderLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}