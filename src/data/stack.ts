import type { IconKey } from "./icons";

/** Status ladder, shared with the hero card's badges.
 *  live    shipped and running
 *  dated   has a ship date, orderable today
 *  planned no date committed */
export type Status = "live" | "dated" | "planned";

export interface Layer {
  name: string;
  tagline: string;
  body: string;
  status: Status;
  label: string;
  icon: IconKey;
}

export const layers: Layer[] = [
  {
    name: "Lyzr Agent Platform",
    tagline: "Agentic OS and Control Plane",
    body: "1,000+ agents live in production. Every function. Every industry. One governance layer.",
    status: "live",
    label: "Live",
    icon: "controlplane",
  },
  {
    name: "Lyzr Nitro",
    tagline: "Production modules for hyperscaler platforms",
    body: "Simulation, SuperFlow, ShadowLM, Architect, CI/CD. Takes agents to production.",
    status: "live",
    label: "Live",
    icon: "nitro",
  },
  {
    name: "Lyzr LLMs",
    tagline: "Open source models built for responsible AI",
    body: "Fine-tunable on your data. No token meter. Built for enterprise accountability.",
    status: "planned",
    label: "Coming",
    icon: "models",
  },
  {
    name: "Lyzr Optimus",
    tagline: "On-prem hardware appliance",
    body: "Physical. Air-gapped. No external calls. 1M+ agents, 10,000 concurrent users.",
    status: "dated",
    label: "Shipping Q4",
    icon: "optimus",
  },
];
