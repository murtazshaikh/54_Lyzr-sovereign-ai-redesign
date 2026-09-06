import type { ComplianceKey } from "./icons";

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
  icon: ComplianceKey;
  label: string;
}

export const certifications: Certification[] = [
  { icon: "gdpr", label: "GDPR Compliant" },
  { icon: "soc2", label: "SOC 2 Type II" },
  { icon: "iso", label: "ISO 27001 Certified" },
  { icon: "hipaa", label: "HIPAA Compliant" },
  { icon: "ccpa", label: "CCPA" },
];
