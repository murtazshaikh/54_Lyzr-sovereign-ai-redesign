/** Status ladder shared by every badge on the page.
 *  live    shipped and running        green,  solid dot
 *  dated   has a ship date, orderable purple, ring dot
 *  planned no date committed          slate,  no dot */
export type Status = "live" | "dated" | "planned";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  status: Status;
  statusLabel: string;
  body: string;
  points: string[];
  value: number;
  suffix: string;
  caption: string;
}

export const products: Product[] = [
  {
    id: "stack-agent-platform",
    name: "Lyzr Agent Platform",
    tagline: "Agentic OS and Control Plane",
    status: "live",
    statusLabel: "Live now",
    body: "Every function. Every industry. One governance layer. 1,000+ agents live in production across 500+ enterprise customers. Runs on your cloud or on Optimus hardware.",
    points: [
      "Agentic OS for marketing, sales, HR, customer service",
      "Control Plane, every agent governed and auditable",
      "Agent Studio, Architect, Cognis memory, simulation",
    ],
    value: 1000,
    suffix: "+",
    caption: "Agents live in production",
  },
  {
    id: "stack-nitro",
    name: "Lyzr Nitro",
    tagline: "Production modules for hyperscaler platforms",
    status: "live",
    statusLabel: "Live now",
    body: "The production-grade building blocks that fill what every hyperscaler agent platform is missing. Integrates with AWS Bedrock, Azure AI Foundry, and Google Vertex AI.",
    points: [
      "50,000 simulations before any agent touches production",
      "SuperFlow for hybrid BPMN orchestration",
      "ShadowLM, Architect, Agent CI/CD",
    ],
    value: 50,
    suffix: "k",
    caption: "Simulations before production",
  },
  {
    id: "stack-optimus",
    name: "Lyzr Optimus",
    tagline: "The on-prem agent factory",
    status: "dated",
    statusLabel: "Shipping Q4 · Pre-orders open",
    body: "Physical hardware you own. Pre-loaded with open source models and the full Lyzr agent platform. No Wi-Fi. No external API calls. No token meter. Intelligence that stays inside.",
    points: [
      "1M+ agents, 10,000 concurrent users (Max tier)",
      "Fine-tune models on your data, yours to keep",
      "95% savings vs frontier LLM API costs",
    ],
    value: 95,
    suffix: "%",
    caption: "Savings vs frontier LLM API costs",
  },
];
