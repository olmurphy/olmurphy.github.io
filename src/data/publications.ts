export interface PublicationEntry {
  title: string;
  venue: string;
  coAuthors?: string;
  coAuthorsTodo?: boolean;
  summary: string;
  status: string;
  tags: readonly string[];
  linkLabel?: string;
  linkHref?: string;
  linkTodo?: boolean;
  bibtex?: string;
}

export const PUBLICATIONS_CONTENT = {
  title: "Publications",
  subtitle: "Papers, preprints, and works in progress.",
  published: [] satisfies readonly PublicationEntry[],
  underReview: [
    {
      title: "Multi-agent swarm governance via multi-task peer prediction",
      venue: "Submitted to NeurIPS 2026",
      coAuthors: "with SIMIS & Fudan/Tsinghua collaborators",
      summary:
        "Governance of AI agent swarms using multi-task peer prediction and Knowledge-Free Correlated Agreement.",
      status: "Under review",
      tags: ["Game theory", "Mechanism design", "Multi-agent systems"],
    },
  ] satisfies readonly PublicationEntry[],
  inProgress: [
    {
      title:
        "Confidence and abstention of CIFAR-10 Wide ResNets under distribution shift",
      venue: "Georgia Tech CS 7643 Deep Learning · team project",
      summary:
        "Compares standard and AugMix training on CIFAR-10-C and CIFAR-10.1.",
      status: "In progress",
      tags: ["Deep learning", "Distribution shift", "Selective prediction"],
    },
  ] satisfies readonly PublicationEntry[],
  talks: [] satisfies readonly PublicationEntry[],
} as const;
