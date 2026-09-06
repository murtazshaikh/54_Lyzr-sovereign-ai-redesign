export interface Resource {
  kind: string;
  /** Cover line one, set plain. */
  coverLead: string;
  /** Cover line two, set in the accent colour. */
  coverAccent: string;
  title: string;
  blurb: string;
  cta: string;
  /** One card carries the dark treatment. */
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    kind: "Playbook",
    coverLead: "How to Build Your",
    coverAccent: "Agentic Roadmap",
    title: "How to Build Your Agentic AI Roadmap in 2026",
    blurb: "The architect's guide to sequencing an agent programme, from first pilot to governed fleet.",
    cta: "Explore playbook",
  },
  {
    kind: "Template",
    coverLead: "101",
    coverAccent: "Enterprise AI Use Cases",
    title: "101 Enterprise AI Use Cases You Can Deploy Today",
    blurb: "Inside: 100+ production-ready agent use cases across Marketing, Sales, HR, Banking and Insurance.",
    cta: "Explore template",
    featured: true,
  },
  {
    kind: "Playbook",
    coverLead: "How to Take",
    coverAccent: "Agents to Production",
    title: "How to take agents to production",
    blurb: "A practical guide to turning AI prototypes into reliable, production-ready agents.",
    cta: "Explore playbook",
  },
];
