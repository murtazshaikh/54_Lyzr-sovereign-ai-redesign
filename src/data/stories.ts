export interface Metric {
  value: string;
  label: string;
}

export interface Story {
  company: string;
  summary: string;
  quote: string;
  metrics: Metric[];
  /** Capabilities named elsewhere on the page, so the proof ties back. */
  tags: string[];
}

export const stories: Story[] = [
  {
    company: "WTW",
    summary: "Reimagining retirement advisory",
    quote:
      "Brought customers back from ChatGPT to WTW's intelligent retirement advisor fully governed, compliant, and running in production for over a year.",
    metrics: [
      { value: "1 Yr+", label: "In production" },
      { value: "100%", label: "Compliant" },
    ],
    tags: ["BFSI compliance", "Hallucination Mgr", "Audit Trail"],
  },
  {
    company: "Hitachi",
    summary: "Marketing content at enterprise scale",
    quote:
      "A Marketing AgentHub converting knowledge-base uploads into multi-format content blogs, eBooks, social posts automatically. What used to take weeks now happens in hours.",
    metrics: [
      { value: "4×", label: "Content output" },
      { value: "Live", label: "In production" },
    ],
    tags: ["Content automation", "Lyzr GPT", "Multi-format"],
  },
  {
    company: "First Source",
    summary: "BPO operations at agent scale",
    quote:
      "A multi-agent BPO orchestration system handling customer support, compliance monitoring, and back-office processing in a highly regulated environment full traceability at every step.",
    metrics: [
      { value: "Multi", label: "Agent system" },
      { value: "Live", label: "Regulated industry" },
    ],
    tags: ["BPO automation", "Compliance", "Control Plane"],
  },
  {
    company: "Verifone",
    summary: "Payments intelligence, agent-driven",
    quote:
      "Agents automating payments operations, compliance checks, and merchant support workflows with full traceability, governance, and hallucination management at every step.",
    metrics: [
      { value: "Full", label: "Audit trail" },
      { value: "Live", label: "In production" },
    ],
    tags: ["Payments fintech", "Governance", "PII Detection"],
  },
  {
    company: "Accenture",
    summary: "Reimagining corporate venture capital",
    quote:
      "AgenticOS running 200+ agents, automating 15+ VC functions including deal sourcing, startup evaluation, due diligence, and investment memo generation all in production, all day, every day.",
    metrics: [
      { value: "200+", label: "Agents in production" },
      { value: "15+", label: "VC functions automated" },
    ],
    tags: ["Multi-agent orchestration", "Agent Studio", "Control Plane"],
  },
];
