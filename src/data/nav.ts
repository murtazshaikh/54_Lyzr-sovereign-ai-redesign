import type { IconKey } from "./icons";
import type { MarkKey } from "./marks";

export interface NavLink {
  label: string;
  href: string;
  desc?: string;
  badge?: "New" | "OSS";
  icon?: IconKey;
  mark?: MarkKey;
  muted?: boolean;
  external?: boolean;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
  /** Tinted panel treatment, as on the source site's product lists. */
  panel?: boolean;
}

export interface NavFeatured {
  source: string;
  title: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
  featured?: NavFeatured[];
  /** Panel width class. */
  size?: "sm" | "md" | "lg";
}

const h = "#";

export const nav: NavItem[] = [
  {
    label: "Solutions",
    href: h,
    size: "lg",
    columns: [
      {
        title: "By industry",
        links: [
          { label: "Banking", desc: "Lending, onboarding, and compliance", href: h },
          { label: "Insurance", desc: "Claims, underwriting, and policy", href: h },
          { label: "Government", desc: "Secure public-sector AI services", href: h },
          { label: "Healthcare", desc: "Patient and clinical workflow agents", href: h },
          { label: "Fintech", desc: "Fraud, onboarding, and payments", href: h },
          { label: "E-commerce", desc: "Discovery, support, and conversion", href: h },
        ],
      },
      {
        title: "By function",
        links: [
          { label: "Revenue", desc: "Pipeline generation and sales", href: h },
          { label: "Marketing", desc: "Content, campaigns, and demand", href: h },
          { label: "Customer Service", desc: "Resolution and ticket deflection", href: h },
          { label: "Human Resources", desc: "Hiring, onboarding, and people ops", href: h },
          { label: "Procurement", desc: "Sourcing, supplier, and contracts", href: h },
          { label: "Legal", desc: "Contract review and compliance", href: h },
        ],
      },
      {
        title: "By team",
        links: [
          { label: "Compliance & Governance", desc: "Control plane, audit trails, and RAI", href: h },
          { label: "AI & Automation", desc: "Agent building, evaluation, and deployment", href: h },
          { label: "Revenue & Sales", desc: "Pipeline intelligence and deal acceleration", href: h },
          { label: "IT & Platform", desc: "Agent infrastructure and platform engineering", href: h },
          { label: "Digital Transformation", desc: "Enterprise AI strategy and process reimagination", href: h },
        ],
      },
      {
        title: "By role",
        links: [
          { label: "CIO", desc: "Governance, control, and agent infrastructure", href: h },
          { label: "CTO", desc: "Sovereign AI and production architecture", href: h },
          { label: "CEO", desc: "Agentic OS and enterprise transformation", href: h },
          { label: "Managing Director", desc: "Co-sell, joint GTM, and SI partnerships", href: h },
          { label: "Head of AI", desc: "Agent deployment, simulation, and scale", href: h },
        ],
      },
    ],
  },
  {
    label: "Platform",
    href: h,
    size: "md",
    columns: [
      {
        title: "Products",
        panel: true,
        links: [
          { label: "Agent Studio", icon: "studio", href: h, external: true },
          { label: "Architect", icon: "architect", href: h, external: true },
          { label: "Control Plane", icon: "controlplane", badge: "New", href: h, external: true },
          { label: "Agentic OS", icon: "agenticos", badge: "New", href: h, external: true },
          { label: "Sovereign AI", icon: "sovereign", badge: "New", href: h, external: true },
          { label: "Lyzr Nitro", icon: "nitro", href: h, muted: true },
          { label: "Lyzr Optimus", icon: "optimus", href: h, muted: true },
        ],
      },
      {
        title: "Modules",
        links: [
          { label: "Responsible AI", href: h },
          { label: "Orchestration as a Service", href: h },
          { label: "Agents as a Service", href: h },
          { label: "Types of Agents", href: h },
          { label: "Hallucination Manager", href: h },
          { label: "Knowledge Base", href: h },
          { label: "Knowledge Graph", href: h },
        ],
      },
      {
        title: "Open source & dev",
        links: [
          { label: "AI Agent Memory", href: h },
          { label: "OpenGAP", badge: "OSS", href: h },
          { label: "GitAgent", badge: "OSS", href: h },
          { label: "Docs & API", href: h },
        ],
      },
    ],
  },
  { label: "Customers", href: "#proof" },
  { label: "Pricing", href: "#optimus" },
  {
    label: "Partners",
    href: h,
    size: "sm",
    columns: [
      {
        title: "Technology partners",
        panel: true,
        links: [
          { label: "Amazon Web Services", mark: "aws", href: h, external: true },
          { label: "Google Cloud", mark: "gcp", href: h, external: true },
          { label: "Microsoft Azure", mark: "azure", href: h, external: true },
          { label: "NVIDIA", mark: "nvidia", href: h, muted: true },
        ],
      },
      {
        title: "Ecosystem partners",
        links: [
          { label: "Consulting Partners", href: h },
          { label: "Reseller Partners", href: h },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: h,
    size: "lg",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Blogs", href: h },
          { label: "Playbook", href: h },
          { label: "Templates", href: h },
          { label: "Courses", href: h },
          { label: "Research", href: h },
          { label: "Types of Agents", href: h },
        ],
      },
      {
        title: "Playbooks & templates",
        links: [
          { label: "Agents to Production", href: h },
          { label: "Banking Dispute Management", href: h },
          { label: "The Field Guide for Analysts", href: h },
          { label: "AI Sales Agents Use Cases", href: h },
          { label: "Insurance AI Agents Use Cases", href: h },
          { label: "Architect Agent Use Cases", href: h },
        ],
      },
      {
        title: "Analyze",
        links: [
          { label: "Case Studies", href: h },
          { label: "Comparison", href: h },
          { label: "Assessments", href: h },
          { label: "Glossary", href: h },
          { label: "State of AI Agents", href: h },
          { label: "Wall of Love", href: h },
          { label: "Enterprise Assessment", href: h },
          { label: "Analyst Recognition", href: h },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Partner Program", href: h },
          { label: "AWS", href: h },
          { label: "Community", href: h },
          { label: "Book a Demo", href: h },
        ],
      },
    ],
    featured: [
      {
        source: "Founderpath",
        title: "Nathan Latka: Still Shocked Lyzr's Siva Beat Palantir",
        href: h,
      },
      {
        source: "Yahoo Finance",
        title: "AI Agent Startup Just Let Its Agent Run Its $100M Fundraise",
        href: h,
      },
    ],
  },
];
