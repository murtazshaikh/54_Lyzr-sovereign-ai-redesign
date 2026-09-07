export interface Step {
  /** Two-digit index shown on the card. */
  num: string;
  /** Card title. */
  title: string;
  /** Card sub-line. */
  brief: string;
  /** Panel heading. */
  heading: string;
  /** Panel body copy. */
  body: string;
  /** Three supporting points. */
  points: string[];
}

export const steps: Step[] = [
  {
    num: "01",
    title: "Govern what you have",
    brief: "Connect existing agents. Control them from one plane.",
    heading: "Start with what you already have.",
    body: "Agents built on any framework, LangChain, Agentforce, Bedrock, custom, all connect to the Lyzr Control Plane. One governance layer over everything you already own. No migration. No rebuild.",
    points: [
      "Any framework, LangGraph, CrewAI, Agentforce, custom",
      "One registry, one identity layer, one audit trail",
      "Your existing agents. Governed immediately.",
    ],
  },
  {
    num: "02",
    title: "Ship reliably",
    brief: "Nitro production modules close the gap to production.",
    heading: "Get your agents to production, reliably.",
    body: "Lyzr Nitro fills every gap between a working prototype and a production-grade agent. Simulation, CI/CD, orchestration, and observability, all in one set of production modules.",
    points: [
      "50,000 simulations before any agent touches production",
      "Git-native CI/CD with approval gates and rollback",
      "Integrates with your existing hyperscaler platform",
    ],
  },
  {
    num: "03",
    title: "Own your models",
    brief: "Fine-tune open source LLMs on your own data.",
    heading: "Own the models your agents run on.",
    body: "Lyzr LLMs are open source models built specifically for enterprise responsibility. Pre-loaded on Optimus. Fine-tunable on your proprietary data. The intelligence you build on them stays yours.",
    points: [
      "Open source, no vendor lock-in on models",
      "Fine-tune on your data, yours to keep and deploy",
      "Built for responsible AI: bias evaluation, safety, auditability",
    ],
  },
  {
    num: "04",
    title: "Own the hardware",
    brief: "Optimus on-prem. Zero external calls. Full sovereignty.",
    heading: "Own the hardware the intelligence runs on.",
    body: "Lyzr Optimus is the physical appliance that completes the sovereign stack. Inside your walls. Air-gapped. No external API calls. The machine your enterprise AI runs on, owned outright.",
    points: [
      "1M+ agents, 10,000 concurrent users on Max tier",
      "95% savings vs frontier LLM API costs",
      "No Wi-Fi, no external calls, no third parties",
    ],
  },
];

/** How long each step holds before the belt advances.
 *
 *  5s. A step card runs about 14 words, which is ~4s of reading at a
 *  normal 200-250wpm, plus about a second to register the change.
 *  Faster feels twitchy: the panel moves before the card that caused
 *  it has been read. Slower and a reader who gives the section the
 *  usual 10-15 seconds may see only one transition and never learn
 *  there are four steps. */
export const DWELL_MS = 5000;
