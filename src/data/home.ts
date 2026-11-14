export interface ResearchPillar {
  title: string;
  description: string;
}

export interface NewsItem {
  date: string;
  text: string;
}

export const HOME_HERO = {
  portraitSrc: "/photo.jpg",
  portraitAlt: "Portrait of Owen Li Murphy",
  portraitPlaceholder: "add photo.jpg",
  affiliation: "M.S. Computer Science (Machine Learning), Georgia Tech",
} as const;

export const RESEARCH_OVERVIEW = {
  heading: "Research interests",
  intro:
    "My goal is to build machine-learning methods that are reliable enough to be useful in biology, and I’m focused on three areas:",
  pillars: [
    {
      title: "Computational biology",
      description:
        "deep learning for single-cell and spatial omics, structural biology, and computer-aided drug discovery.",
    },
    {
      title: "Reliable deep learning",
      description:
        "confidence, abstention, and robustness under distribution shift.",
    },
    {
      title: "Mathematical foundations",
      description:
        "spectral graph theory, differential geometry, and functional analysis as tools for understanding learning systems.",
    },
  ] satisfies readonly ResearchPillar[],
  moreLabel: "More on my research →",
  moreHref: "/research",
} as const;

export const NEWS_ITEMS: readonly NewsItem[] = [
  {
    date: "Aug 2027",
    text: "Planning to begin the in-person M.S. in Computer Science (Research Thesis Option) at Georgia Tech.",
  },
  {
    date: "Jan 2027",
    text: "Attending CES in Las Vegas with Global Business AI to showcase our AI platform.",
  },
  {
    date: "Nov 2026",
    text: "Preparing Ph.D. applications in computer science and computational biology.",
  },
  {
    date: "Aug 2026",
    text: "Joined Global Business AI (GBizAI) in Shanghai as an AI & Software Engineer.",
  },
  {
    date: "2026",
    text: "Submitted a paper on multi-agent swarm governance to NeurIPS 2026.",
  },
  {
    date: "Fall 2025",
    text: "Began the M.S. in Computer Science (ML specialization) at Georgia Tech via OMSCS.",
  },
];
