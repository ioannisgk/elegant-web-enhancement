import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eyebrow } from "./primitives";

type Shot = {
  src: string;
  title: string;
  description: string;
  alt: string;
};

type Category = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  shots: Shot[];
};

const categories: Category[] = [
  {
    id: "observability",
    eyebrow: "Observability",
    title: "Metrics, logs and traces you own",
    intro:
      "Prometheus with Thanos long-term storage feeds Grafana dashboards for nodes, clusters, storage and applications — the full stack runs on your own hardware.",
    shots: [
      {
        src: "/screenshots/Grafana-01.webp",
        title: "Grafana — cluster overview",
        description: "Capacity, saturation and workload health at a glance.",
        alt: "Grafana Kubernetes cluster overview dashboard",
      },
      {
        src: "/screenshots/Grafana-02.webp",
        title: "Grafana — node metrics",
        description: "Per-node CPU, memory, disk and network from the bare-metal exporters.",
        alt: "Grafana node metrics dashboard",
      },
      {
        src: "/screenshots/Grafana-03.webp",
        title: "Grafana — workload dashboards",
        description: "Namespace and pod level views for application owners.",
        alt: "Grafana workload dashboard with pod level panels",
      },
      {
        src: "/screenshots/Prometheus-Thanos-01.webp",
        title: "Prometheus & Thanos",
        description: "Highly available scraping with de-duplicated long-term retention.",
        alt: "Prometheus and Thanos query interface",
      },
    ],
  },
  {
    id: "storage-mesh",
    eyebrow: "HA storage & service mesh",
    title: "Replicated storage, mTLS everywhere",
    intro:
      "Rook-Ceph provides replicated block, file and object storage across the storage cluster, while Istio Ambient secures east-west traffic — visualised in Kiali.",
    shots: [
      {
        src: "/screenshots/Rook-Ceph-01.webp",
        title: "Ceph — cluster health",
        description: "OSD, monitor and placement group status for the storage cluster.",
        alt: "Rook-Ceph dashboard showing cluster health status",
      },
      {
        src: "/screenshots/Rook-Ceph-02.webp",
        title: "Ceph — capacity & pools",
        description: "Replicated pools backing RBD volumes, CephFS and object storage.",
        alt: "Rook-Ceph pools and capacity usage view",
      },
      {
        src: "/screenshots/Istio-Kiali-01.webp",
        title: "Kiali — service graph",
        description: "Live traffic topology between services in the ambient mesh.",
        alt: "Kiali service graph showing traffic flow between services",
      },
      {
        src: "/screenshots/Istio-Kiali-02.webp",
        title: "Kiali — workload detail",
        description: "Per-workload traffic, mTLS status and inbound/outbound metrics.",
        alt: "Kiali workload detail view with traffic metrics",
      },
    ],
  },
  {
    id: "cicd",
    eyebrow: "CI/CD & supply chain",
    title: "Build, scan, sign, promote",
    intro:
      "Jenkins pipelines build and test images, Harbor stores them privately with vulnerability scanning — no external registry, no image ever leaves your hardware.",
    shots: [
      {
        src: "/screenshots/Jenkins-01.webp",
        title: "Jenkins — build pipeline, commit to cluster",
        description: "Twelve stages from checkout to signed image push and Argo CD sync.",
        alt: "Jenkins stage view of the demo-app-pipeline-cicd job showing build, scan, push to Harbor and Argo CD sync stages",
      },
      {
        src: "/screenshots/Jenkins-02.webp",
        title: "Jenkins — controlled release pipeline",
        description: "Operator picks a Harbor tag, writes the manifest and triggers Argo CD.",
        alt: "Jenkins deploy pipeline stage view with fetch image tags, select image tag prompt and Argo CD sync stages",
      },
      {
        src: "/screenshots/Harbor-01.webp",
        title: "Harbor — private registry",
        description: "Project-scoped repositories with quotas and role-based access.",
        alt: "Harbor registry projects list",
      },
      {
        src: "/screenshots/Harbor-02.webp",
        title: "Harbor — vulnerability scanning",
        description: "Trivy scans every pushed tag before it is allowed into production.",
        alt: "Harbor image vulnerability scan results",
      },
    ],
  },
  {
    id: "gitops",
    eyebrow: "Source control & GitOps",
    title: "Every change starts as a merge request",
    intro:
      "Self-hosted GitLab holds the platform and application repositories; Argo CD continuously reconciles each cluster against the declared state in Git.",
    shots: [
      {
        src: "/screenshots/Gitlab-01.webp",
        title: "GitLab — platform repositories",
        description: "One repository per cluster holds the complete, auditable desired state.",
        alt: "GitLab project overview showing KubeSailor platform repositories",
      },
      {
        src: "/screenshots/Gitlab-02.webp",
        title: "GitLab — the cluster, described in Git",
        description: "Self-hosted source of truth for all cluster manifests and Helm charts.",
        alt: "GitLab admin-cluster repository listing argocd, harbor, istio-mesh, monitoring, rook-ceph and tracing directories",
      },
      {
        src: "/screenshots/Argo-CD-01.webp",
        title: "Argo CD — application tree",
        description: "Live sync status for every workload deployed across the clusters.",
        alt: "Argo CD applications dashboard showing synced and healthy applications",
      },
      {
        src: "/screenshots/Argo-CD-02.webp",
        title: "Argo CD — resource topology",
        description: "Drill into a single app to see its Kubernetes resources and health.",
        alt: "Argo CD resource topology graph for a deployed application",
      },
    ],
  },
];

const fullSrc = (src: string) => src.replace(/\.webp$/, "-full.webp");

export function PlatformGallery() {
  const [lightbox, setLightbox] = useState<{ category: number; index: number } | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [dragging, setDragging] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<{ x: number; y: number } | null>(null);
  const dragRef = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);

  const close = useCallback(() => {
    setZoomed(false);
    setLightbox(null);
  }, []);

  const step = useCallback((delta: number) => {
    setZoomed(false);
    setLightbox((current) => {
      if (!current) return current;
      const shots = categories[current.category]?.shots ?? [];
      if (!shots.length) return current;
      const index = (current.index + delta + shots.length) % shots.length;
      return { ...current, index };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  // Keep the point the user clicked under the cursor after zooming in.
  useLayoutEffect(() => {
    const container = scrollRef.current;
    const anchor = anchorRef.current;
    if (!zoomed || !container || !anchor) return;
    anchorRef.current = null;
    const img = container.querySelector("img");
    if (!img) return;
    const apply = () => {
      container.scrollLeft = anchor.x * container.scrollWidth - container.clientWidth / 2;
      container.scrollTop = anchor.y * container.scrollHeight - container.clientHeight / 2;
    };
    apply();
    if (!(img as HTMLImageElement).complete) img.addEventListener("load", apply, { once: true });
  }, [zoomed]);

  const active = lightbox ? (categories[lightbox.category]?.shots[lightbox.index] ?? null) : null;

  const onImagePointerDown = (event: React.PointerEvent<HTMLImageElement>) => {
    if (!zoomed || event.button !== 0) return;
    const container = scrollRef.current;
    if (!container) return;
    event.preventDefault();
    setDragging(true);
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      left: container.scrollLeft,
      top: container.scrollTop,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onImagePointerMove = (event: React.PointerEvent<HTMLImageElement>) => {
    const state = dragRef.current;
    const container = scrollRef.current;
    if (!state || !container) return;
    const dx = event.clientX - state.x;
    const dy = event.clientY - state.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) state.moved = true;
    container.scrollLeft = state.left - dx;
    container.scrollTop = state.top - dy;
  };

  const onImagePointerUp = (event: React.PointerEvent<HTMLImageElement>) => {
    const state = dragRef.current;
    dragRef.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (state?.moved) return;
    if (zoomed) {
      setZoomed(false);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    anchorRef.current = {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    };
    setZoomed(true);
  };

  return (
    <>
      {categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={
            categoryIndex % 2 === 0 ? "section-y bg-background" : "section-y border-y border-border bg-surface"
          }
        >
          <div className="container-page space-y-10">
            <div className="max-w-3xl space-y-5">
              <Eyebrow>{category.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-semibold leading-[1.12] sm:text-4xl">{category.title}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{category.intro}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {category.shots.map((shot, shotIndex) => (
                <figure
                  key={shot.src}
                  className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition hover:-translate-y-1 hover:border-foreground/20"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setZoomed(false);
                      setLightbox({ category: categoryIndex, index: shotIndex });
                    }}
                    aria-label={`Open ${shot.title} full screen`}
                    className="relative block w-full cursor-pointer overflow-hidden border-b border-border bg-ink/[0.03]"
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      width={1600}
                      height={869}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[1600/869] w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                    />
                    <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/90 text-muted-foreground opacity-0 backdrop-blur transition group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </button>
                  <figcaption className="space-y-1.5 px-6 py-5">
                    <h3 className="font-display text-base font-semibold tracking-tight">{shot.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{shot.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Dialog
        open={Boolean(active)}
        onOpenChange={(open) => {
          if (!open) close();
        }}
      >
        {active && lightbox ? (
          <DialogContent className="max-h-[92vh] w-[96vw] max-w-[110rem] border-white/10 bg-ink/95 p-4 text-ink-foreground sm:rounded-xl sm:p-6 [&>button]:text-ink-foreground [&>button]:opacity-80">
            <DialogHeader className="sr-only">
              <DialogTitle>{active.title}</DialogTitle>
              <DialogDescription>{active.description}</DialogDescription>
            </DialogHeader>

            <div
              ref={scrollRef}
              className={`scrollbar-themed overflow-auto rounded-lg border border-white/10 bg-ink ${
                zoomed ? "max-h-[74vh]" : ""
              }`}
            >
              <img
                key={active.src}
                src={fullSrc(active.src)}
                alt={active.alt}
                draggable={false}
                onPointerDown={onImagePointerDown}
                onPointerMove={onImagePointerMove}
                onPointerUp={onImagePointerUp}
                className={
                  zoomed
                    ? `w-auto max-w-none select-none ${dragging ? "cursor-grabbing" : "cursor-zoom-out"}`
                    : "max-h-[74vh] w-full cursor-zoom-in select-none object-contain"
                }
              />
            </div>

            <div className="space-y-3 text-center">
              <div>
                <p className="font-display text-base font-semibold text-ink-foreground">{active.title}</p>
                <p className="text-sm text-ink-foreground/70">{active.description}</p>
              </div>
              <a
                href={fullSrc(active.src)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-foreground/70 underline-offset-4 transition hover:text-ink-foreground hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Open image in a new tab
              </a>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous screenshot"
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 text-ink-foreground transition hover:bg-white/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="font-mono text-xs text-ink-foreground/60">
                  {lightbox.index + 1} / {categories[lightbox.category]?.shots.length ?? 0}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next screenshot"
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 text-ink-foreground transition hover:bg-white/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}

