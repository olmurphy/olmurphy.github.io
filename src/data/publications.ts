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
}

export const PUBLICATIONS_CONTENT = {
  title: "Publications",
  subtitle: "Papers, preprints, and works in progress.",
  publishedEmptyTodo:
    "None yet — when a paper is accepted, move it here and add the venue and year.",
  underReview: [
    {
      title: "Multi-agent swarm governance via multi-task peer prediction",
      venue: "Submitted to NeurIPS 2026",
      coAuthors: "co-authors",
      coAuthorsTodo: true,
      summary:
        "Governance of AI agent swarms using multi-task peer prediction and Knowledge-Free Correlated Agreement.",
      status: "Under review",
      tags: ["Game theory", "Mechanism design", "Multi-agent systems"],
      linkLabel: "preprint link",
      linkHref: "#",
      linkTodo: true,
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
  talksEmptyTodo:
    "None yet — add any presentations here, even course or lab-group talks.",
} as const;
