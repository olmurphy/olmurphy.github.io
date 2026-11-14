export interface ProjectEntry {
  title: string;
  statusTag?: string;
  tags: readonly string[];
  metaTodo?: string;
  summary: string;
  linkLabel?: string;
  linkHref?: string;
  linkTodo?: boolean;
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
      title: "BetterMe",
      statusTag: "La French Tech Shanghai Hackathon 2025",
      tags: ["Full-stack", "LLMs"],
      summary:
        "A full-stack AI roleplay application designed and built end to end within a 24-hour hackathon.",
      linkLabel: "GitHub / Code",
      linkHref: "https://github.com/olmurphy/BetterMe",
      linkTodo: false,
    },
  ] satisfies readonly ProjectEntry[],
  hackathonPromptTodo:
    "Add each new hackathon above this line: event, date, your role, what you built, and any placement or award.",
} as const;
