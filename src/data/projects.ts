import type { FeatureFlag } from "@config/features";

export interface TeamMember {
  name: string;
  href?: string;
}

export interface ProjectEntry {
  title: string;
  statusTag?: string;
  statusHref?: string;
  tags: readonly string[];
  metaTodo?: string;
  summary: string;
  team?: readonly TeamMember[];
  linkLabel?: string;
  linkHref?: string;
  linkTodo?: boolean;
  featureFlag?: FeatureFlag;
}

export const PROJECTS_CONTENT = {
  title: "Projects",
  subtitle: "Things I've built. Research projects first, then engineering.",
  projects: [
    {
      title: "CIFAR-10 confidence & abstention study",
      tags: ["Deep learning", "Robustness", "PyTorch"],
      summary:
        "A two-month project examining model confidence under distribution shift with AugMix-trained Wide ResNets.",
      linkLabel: "GitHub / Code",
      linkHref: "https://github.com/olmurphy/dl-neurips-bound",
      linkTodo: false,
    },
    {
      title: "AdmissionMatch",
      tags: ["Platform", "Next.js", "FastAPI", "pgvector"],
      summary:
        "A B2B2C recruitment and matching platform for business-school applicants, built on Next.js, FastAPI, and PostgreSQL with vector search.",
    },
    {
      title: "Chatbot management platform",
      tags: ["React", "TypeScript", "Systems design"],
      summary:
        "A Dify/Langflow-style interface with a canvas workflow view, designed for a scalable distributed backend.",
    },
    {
      title: "AI form-filling browser extension",
      tags: ["LLMs", "Browser extension", "Proposal"],
      summary:
        "A product design for an extension that uses semantic mapping to autofill application forms across U.S. and Chinese browsers.",
    },
  ] satisfies readonly ProjectEntry[],
  hackathons: [
    {
      title: "MIT Reality Hack",
      statusTag: "Upcoming · Jan 2027",
      tags: ["XR / Spatial Computing", "AI"],
      summary:
        "Participating in MIT's annual XR and spatial computing hackathon in Cambridge, MA.",
      featureFlag: "showUpcomingMitRealityHack",
    },
    {
      title: "BetterMe",
      statusTag: "La French Tech Shanghai Hackathon · Jan 2026",
      statusHref:
        "https://www.frenchtechshanghai.com/upcoming-events/grow-ft-hackathon-2026/",
      tags: ["Full-stack", "LLMs"],
      summary:
        "An AI avatar master trainer built for L'Oréal to deliver consistent onboarding, product Q&A, and sales coaching across multi-location retail floor teams—built end to end within 24 hours.",
      team: [
        { name: "Rahul Bura", href: "https://www.linkedin.com/in/rahulbura/" },
        {
          name: "Yasmine Kennou Filali",
          href: "https://www.linkedin.com/in/yasmine-kennou-filali/",
        },
        {
          name: "Charles Yin",
          href: "https://www.linkedin.com/in/charles-yin-748386122/",
        },
        { name: "Yves B." },
      ],
      linkLabel: "GitHub / Code",
      linkHref: "https://github.com/olmurphy/BetterMe",
      linkTodo: false,
    },
  ] satisfies readonly ProjectEntry[],
  hackathonPromptTodo:
    "Add each new hackathon above this line: event, date, your role, what you built, and any placement or award.",
} as const;
