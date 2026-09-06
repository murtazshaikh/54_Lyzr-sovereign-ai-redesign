import type { IconKey } from "./icons";

export interface Stat {
  /** Numeric target for the count-up. */
  value: number;
  /** Rendered after the number: %, +, and so on. */
  suffix: string;
  caption: string;
}

export const stats: Stat[] = [
  { value: 1000, suffix: "+", caption: "Agents live in production" },
  { value: 95, suffix: "%", caption: "Savings vs frontier LLM API costs" },
  { value: 85, suffix: "%", caption: "Projects reaching production" },
  { value: 0, suffix: "%", caption: "Data leaving your environment" },
  { value: 500, suffix: "+", caption: "Enterprise customers" },
];

export interface Reason {
  icon: IconKey;
  title: string;
  body: string;
  value: number;
  suffix: string;
  caption: string;
}

export const reasons: Reason[] = [
  {
    icon: "cost",
    title: "Your AI spend has no ceiling, and no return",
    body: "Token costs scale with every deployment, every query, every expansion. You are building on infrastructure you do not own, paying more every quarter for the intelligence your own enterprise generates. At high volumes, owning your hardware breaks even in months, and compounds from there.",
    value: 95,
    suffix: "%",
    caption: "Cost reduction vs frontier API costs at enterprise volume",
  },
  {
    icon: "lock",
    title: "Your competitive advantage leaves your walls every day",
    body: "Every prompt your teams send carries your enterprise's most sensitive intelligence, your underwriting methodology, your pricing logic, your strategic data. On shared infrastructure, that intelligence does not stay with you. Sovereign AI is what keeps it inside.",
    value: 0,
    suffix: "%",
    caption: "Data that should ever leave your environment",
  },
  {
    icon: "audit",
    title: "Your board is asking who is accountable for AI decisions",
    body: "Governance in AI is not a checkbox. It is an architectural fact. When an agent makes a consequential decision, in compliance, in finance, in patient care, your organization needs a complete, unambiguous audit trail. That trace can only exist if you own the infrastructure it runs on.",
    value: 100,
    suffix: "%",
    caption: "Audit trail on every agent decision, no exceptions",
  },
];
