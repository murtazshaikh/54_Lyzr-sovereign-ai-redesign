import type { IconKey } from "./icons";

export interface Award {
  source: string;
  title: string;
}

export const awards: Award[] = [
  { source: "Gartner", title: "Tech Innovator in Agentic AI" },
  { source: "G2", title: "Top AI Agent Builder Software" },
  { source: "AWS", title: "Gen AI Innovator 2025" },
  { source: "CB Insights", title: "Top 100 AI Startup" },
  { source: "Everest Group", title: "AI Agent Platform for HR & BFSI" },
  { source: "IDC", title: "Top AI Agent Orchestration Platform" },
];

export interface Certification {
  icon: IconKey;
  label: string;
}

export const certifications: Certification[] = [
  { icon: "globe", label: "GDPR Compliant" },
  { icon: "shield", label: "SOC 2 Type II" },
  { icon: "lock", label: "ISO 27001 Certified" },
  { icon: "pulse", label: "HIPAA Compliant" },
  { icon: "audit", label: "CCPA" },
];
