export interface Spec {
  label: string;
  value: string;
}

export interface Tier {
  id: string;
  name: string;
  /** Short label under the rail stop. */
  meta: string;
  tagline: string;
  specs: Spec[];
}

export const tiers: Tier[] = [
  {
    id: "personal",
    name: "Personal",
    meta: "For CXOs",
    tagline: "Your intelligence. Your desk. No external calls.",
    specs: [
      { label: "Form factor", value: "Desktop workstation" },
      { label: "Network", value: "No Wi-Fi · Air-gapped" },
      { label: "Models", value: "Open source LLMs pre-loaded" },
      { label: "Fine-tuning", value: "Supported" },
      { label: "External API calls", value: "Zero" },
    ],
  },
  {
    id: "micro",
    name: "Micro",
    meta: "500 users",
    tagline: "500 concurrent users. Focused teams, room-ready.",
    specs: [
      { label: "Concurrent users", value: "500" },
      { label: "Form factor", value: "Compact · Office room" },
      { label: "Network", value: "No Wi-Fi · Air-gapped" },
      { label: "Models", value: "Open source LLMs + voice" },
      { label: "External API calls", value: "Zero" },
    ],
  },
  {
    id: "mini",
    name: "Mini",
    meta: "2,000 users",
    tagline: "2,000 concurrent users. Mid-market.",
    specs: [
      { label: "Concurrent users", value: "2,000" },
      { label: "Form factor", value: "4U rack · Liquid-cooled" },
      { label: "GPU", value: "6× NVIDIA L40S · 288 GB" },
      { label: "Models", value: "Large reasoning + voice" },
      { label: "External API calls", value: "Zero" },
    ],
  },
  {
    id: "max",
    name: "Max",
    meta: "10,000 users",
    tagline: "10,000 concurrent users. Full enterprise.",
    specs: [
      { label: "Concurrent users", value: "10,000" },
      { label: "Form factor", value: "Enterprise rack" },
      { label: "Agents", value: "1M+" },
      { label: "Models", value: "Full fleet · LLMs, voice, multimodal" },
      { label: "External API calls", value: "Zero" },
    ],
  },
];
