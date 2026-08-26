import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
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
    id: "gitops",
    eyebrow: "Source control & GitOps",
    title: "Every change starts as a merge request",
    intro:
      "Self-hosted GitLab holds the platform and application repositories; Argo CD continuously reconciles each cluster against the declared state in Git.",
    shots: [
      {
        src: "/screenshots/Gitlab-01.webp",
        title: "GitLab — platform repositories",
        description: "Self-hosted source of truth for all cluster manifests and Helm charts.",
        alt: "GitLab project overview showing KubeSailor platform repositories",
      },
      {
        src: "/screenshots/Gitlab-02.webp",
        title: "GitLab — the cluster, described in Git",
        description:
          "One repository per cluster holds the complete, auditable desired state.",
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
        description:
          "Twelve stages from checkout to signed image push and Argo CD sync.",
        alt: "Jenkins stage view of the demo-app-pipeline-cicd job showing build, scan, push to Harbor and Argo CD sync stages",
      },
      {
        src: "/screenshots/Jenkins-02.webp",
        title: "Jenkins — controlled release pipeline",
        description:
          "Operator picks a Harbor tag, writes the manifest and triggers Argo CD.",
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
];

const fullSrc = (src: string) => src.replace(/\.webp$/, "-full.webp");

export function PlatformGallery() {
  const [lightbox, setLightbox] = useState<{ category: number; index: number } | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const close = useCallback(() => setLightbox(null), []);
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
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [lightbox, close, step]);

  const active = lightbox ? (categories[lightbox.category]?.shots[lightbox.index] ?? null) : null;

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
                    onClick={() => setLightbox({ category: categoryIndex, index: shotIndex })}
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

      {active && lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => {
            setZoomed(false);
            close();
          }}
        >
          <div
            className="relative m-auto w-full max-w-[110rem] space-y-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`overflow-auto rounded-xl border border-white/10 shadow-2xl ${
                zoomed ? "max-h-[78vh]" : ""
              }`}
            >
              <img
                key={active.src}
                src={fullSrc(active.src)}
                alt={active.alt}
                onClick={() => setZoomed((value) => !value)}
                className={
                  zoomed
                    ? "w-auto max-w-none cursor-default"
                    : "max-h-[78vh] w-full cursor-default object-contain"
                }
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-ink-foreground">{active.title}</p>
                <p className="text-sm text-ink-foreground/70">{active.description}</p>
              </div>
              <div className="flex items-center gap-2">
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
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 text-ink-foreground transition hover:bg-white/10 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </>
  );
}
