export interface LinkGroup {
  title: string;
  links: string[];
}

/** Primary groups, shown beside the subscribe block. */
export const primaryGroups: LinkGroup[] = [
  {
    title: "Company",
    links: ["About Us", "Wall of Love", "Pricing", "News", "Contact Us", "Careers", "Lyzr raises Series A"],
  },
  {
    title: "Solutions",
    links: ["Banking", "Insurance", "Sales", "Marketing", "HR", "Customer Service", "Financial Services"],
  },
  {
    title: "Agents",
    links: [
      "Jazon, AI SDR",
      "Skott, AI Marketer",
      "Dwight, AI RFP Scout",
      "Diane, AI HR agent",
      "Kathy, AI Competitor Analyst",
      "Jeff, AI Support agent",
    ],
  },
  {
    title: "Platform",
    links: ["Agent Studio", "Responsible AI", "OGI", "Enterprise", "AWS partnership"],
  },
];

/** Secondary groups, below the rule. */
export const secondaryGroups: LinkGroup[] = [
  {
    title: "Case Studies",
    links: [
      "Leading HR tech innovator",
      "Leading energy provider",
      "Global IT giant",
      "HR & workforce leader",
      "Customer service leader",
      "Industrial manufacturing firm",
    ],
  },
  {
    title: "Comparisons",
    links: [
      "Lyzr vs Agentforce",
      "Lyzr vs LangGraph",
      "Lyzr vs CrewAI",
      "Lyzr vs Microsoft Copilot",
      "Lyzr vs Google AgentKit",
      "Lyzr vs n8n",
    ],
  },
  {
    title: "Templates",
    links: [
      "100 Use Cases for CFOs",
      "140+ Agentic Use Cases for Healthcare",
      "Customer Support Use Cases",
      "100+ Insurance Agent Use Cases",
      "101 AI Use Cases",
      "12 AI Marketing Use Cases",
      "AI Agents Use Cases for HR",
      "Banking Use Case",
    ],
  },
  {
    title: "Playbooks",
    links: [
      "HR Automation",
      "Sales Automation",
      "Banking Automation",
      "Content Marketing",
      "GTM Marketing",
      "Agents to production",
      "Performance Management",
      "Procurement Automation",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Glossary",
      "Webinars",
      "Courses",
      "Usecases",
      "Videos",
      "State of AI Agents",
      "AI Readiness Assessment",
      "Research",
    ],
  },
];

export const legal = ["Privacy policy", "Security", "Terms of Use"];

export const address = "525 Washington Blvd, 2410, Jersey City, NJ 07310, USA";
export const subscriberCount = "24,647+";
