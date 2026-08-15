# Replace "Ownership of tooling" with "Observability stack" in comparison table

Update only one row in `src/components/site/comparison.tsx`.

## Change

Replace the current last row:

```ts
["Ownership of tooling", "Vendor-managed", "Yours, unsupported", "Yours, documented and handed over"],
```

with:

```ts
["Observability stack", "CloudWatch / Cloud Monitoring, priced per metric", "Assembled and maintained by you", "Prometheus, Thanos, Grafana Alloy, Loki, Tempo"],
```

The KubeSailor column is based on Day 06 of the Delivery page: Prometheus with Thanos sidecars, Grafana Alloy, Loki and Tempo for metrics, logs and traces.

## Verification

Run the TypeScript typecheck after editing.
