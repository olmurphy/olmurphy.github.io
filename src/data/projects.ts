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
        "A two-month, four-person project examining model confidence under distribution shift with AugMix-trained Wide ResNets.",
      linkLabel: "Report / code",
      linkHref: "#",
      linkTodo: true,
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
      statusTag: "24-hour hackathon",
      tags: ["Full-stack", "LLMs"],
      metaTodo: "event name, date, result",
      summary:
        "A full-stack AI roleplay application designed and built end to end within a 24-hour hackathon.",
      linkLabel: "Demo / code",
      linkHref: "#",
      linkTodo: true,
    },
  ] satisfies readonly ProjectEntry[],
  hackathonPromptTodo:
    "Add each new hackathon above this line: event, date, your role, what you built, and any placement or award.",
} as const;
