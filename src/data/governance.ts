import type { IconKey } from "./icons";

/** When in an agent's life the control runs. Three stages, in order. */
export type Stage = "Before production" | "In production" | "Every decision";

export interface Control {
  icon: IconKey;
  stage: Stage;
  title: string;
  body: string;
}

export const claims: string[] = [
  "Every agent registered, identity-mapped, and fully auditable from day one",
  "Evaluation gate before production, nothing ships unevaluated",
  "Step-level traces on every run, every decision reconstructable",
  "Entitlement policy enforced at runtime, per-agent, per-context",
  "Your data, your infrastructure, your audit, zero external dependency",
];

// Ordered by stage rather than by their listing order, so the matrix
// reads as an agent's lifecycle: what runs before it ships, what runs
// while it serves, and what runs on every single decision.
export const controls: Control[] = [
  {
    icon: "scales",
    stage: "Before production",
    title: "Bias Evaluation",
    body: "Models evaluated against your domain and use case, not generic benchmarks.",
  },
  {
    icon: "flask",
    stage: "Before production",
    title: "Simulation Gate",
    body: "50,000 scenarios before production. No agent ships unevaluated.",
  },
  {
    icon: "shield",
    stage: "In production",
    title: "Hallucination Guard",
    body: "Every output checked before it reaches a user. Active detection and blocking on every call.",
  },
  {
    icon: "search",
    stage: "In production",
    title: "PII Detection",
    body: "Sensitive data masked before it moves between systems. Architecture, not policy.",
  },
  {
    icon: "lock",
    stage: "Every decision",
    title: "Entitlement Policy",
    body: "Fine-grained runtime access control, what every agent can read, write, and trigger.",
  },
  {
    icon: "doc",
    stage: "Every decision",
    title: "Immutable Audit Trail",
    body: "Every decision logged, timestamped, and reconstructable. Automatically.",
  },
];
