import type { IconKey } from "./icons";
import type { MarkKey } from "./marks";

export interface NavLink {
  label: string;
  /** Omitted for placeholder entries. A menu item with nowhere to go is
   *  rendered as text, not as an anchor: 211 links pointing at "#" tell
   *  a crawler the page links to itself, and announce to a screen
   *  reader as links that do nothing. */
  href?: string;
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
  href?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  featured?: NavFeatured[];
  /** Panel width class. */
  size?: "sm" | "md" | "lg";
}

export const nav: NavItem[] = [
  {
    label: "Solutions",
    size: "lg",
    columns: [
      {
        title: "By industry",
        links: [
          { label: "Banking", desc: "Lending, onboarding, and compliance" },
          { label: "Insurance", desc: "Claims, underwriting, and policy" },
          { label: "Government", desc: "Secure public-sector AI services" },
          { label: "Healthcare", desc: "Patient and clinical workflow agents" },
          { label: "Fintech", desc: "Fraud, onboarding, and payments" },
          { label: "E-commerce", desc: "Discovery, support, and conversion" },
        ]
      },
      {
        title: "By function",
        links: [
          { label: "Revenue", desc: "Pipeline generation and sales" },
          { label: "Marketing", desc: "Content, campaigns, and demand" },
          { label: "Customer Service", desc: "Resolution and ticket deflection" },
          { label: "Human Resources", desc: "Hiring, onboarding, and people ops" },
          { label: "Procurement", desc: "Sourcing, supplier, and contracts" },
          { label: "Legal", desc: "Contract review and compliance" },
        ]
      },
      {
        title: "By team",
        links: [
          { label: "Compliance & Governance", desc: "Control plane, audit trails, and RAI" },
          { label: "AI & Automation", desc: "Agent building, evaluation, and deployment" },
          { label: "Revenue & Sales", desc: "Pipeline intelligence and deal acceleration" },
          { label: "IT & Platform", desc: "Agent infrastructure and platform engineering" },
          { label: "Digital Transformation", desc: "Enterprise AI strategy and process reimagination" },
        ]
      },
      {
        title: "By role",
        links: [
          { label: "CIO", desc: "Governance, control, and agent infrastructure" },
          { label: "CTO", desc: "Sovereign AI and production architecture" },
          { label: "CEO", desc: "Agentic OS and enterprise transformation" },
          { label: "Managing Director", desc: "Co-sell, joint GTM, and SI partnerships" },
          { label: "Head of AI", desc: "Agent deployment, simulation, and scale" },
        ]
      },
    ]
  },
  {
    label: "Platform",
    size: "md",
    columns: [
      {
        title: "Products",
        panel: true,
        links: [
          { label: "Agent Studio", icon: "studio", external: true },
          { label: "Architect", icon: "architect", external: true },
          { label: "Control Plane", icon: "controlplane", badge: "New", external: true },
          { label: "Agentic OS", icon: "agenticos", badge: "New", external: true },
          { label: "Sovereign AI", icon: "sovereign", badge: "New", external: true },
          { label: "Lyzr Nitro", icon: "nitro", muted: true },
          { label: "Lyzr Optimus", icon: "optimus", muted: true },
        ]
      },
      {
        title: "Modules",
        links: [
          { label: "Responsible AI" },
          { label: "Orchestration as a Service" },
          { label: "Agents as a Service" },
          { label: "Types of Agents" },
          { label: "Hallucination Manager" },
          { label: "Knowledge Base" },
          { label: "Knowledge Graph" },
        ]
      },
      {
        title: "Open source & dev",
        links: [
          { label: "AI Agent Memory" },
          { label: "OpenGAP", badge: "OSS" },
          { label: "GitAgent", badge: "OSS" },
          { label: "Docs & API" },
        ]
      },
    ]
  },
  { label: "Customers", href: "#proof" },
  { label: "Pricing", href: "#optimus" },
  {
    label: "Partners",
    size: "sm",
    columns: [
      {
        title: "Technology partners",
        panel: true,
        links: [
          { label: "Amazon Web Services", mark: "aws", external: true },
          { label: "Google Cloud", mark: "gcp", external: true },
          { label: "Microsoft Azure", mark: "azure", external: true },
          { label: "NVIDIA", mark: "nvidia", muted: true },
        ]
      },
      {
        title: "Ecosystem partners",
        links: [
          { label: "Consulting Partners" },
          { label: "Reseller Partners" },
        ]
      },
    ]
  },
  {
    label: "Resources",
    size: "lg",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Blogs" },
          { label: "Playbook" },
          { label: "Templates" },
          { label: "Courses" },
          { label: "Research" },
          { label: "Types of Agents" },
        ]
      },
      {
        title: "Playbooks & templates",
        links: [
          { label: "Agents to Production" },
          { label: "Banking Dispute Management" },
          { label: "The Field Guide for Analysts" },
          { label: "AI Sales Agents Use Cases" },
          { label: "Insurance AI Agents Use Cases" },
          { label: "Architect Agent Use Cases" },
        ]
      },
      {
        title: "Analyze",
        links: [
          { label: "Case Studies" },
          { label: "Comparison" },
          { label: "Assessments" },
          { label: "Glossary" },
          { label: "State of AI Agents" },
          { label: "Wall of Love" },
          { label: "Enterprise Assessment" },
          { label: "Analyst Recognition" },
        ]
      },
      {
        title: "Connect",
        links: [
          { label: "Partner Program" },
          { label: "AWS" },
          { label: "Community" },
          { label: "Book a Demo" },
        ]
      },
    ],
    featured: [
      {
        source: "Founderpath",
        title: "Nathan Latka: Still Shocked Lyzr's Siva Beat Palantir"
      },
      {
        source: "Yahoo Finance",
        title: "AI Agent Startup Just Let Its Agent Run Its $100M Fundraise"
      },
    ]
  },
];
