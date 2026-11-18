// src/data/en/home.ts
import type { HomeContent } from "../types";

export const HOME_CONTENT: HomeContent = {
  meta: {
    title: "Owen Li Murphy — Machine Learning & Computational Biology",
    description:
      "Personal academic website of Owen Li Murphy: deep learning, computational biology, and multi-agent systems.",
  },
  hero: {
    portraitSrc: "/photo.jpg",
    portraitAlt: "Portrait of Owen Li Murphy",
    portraitPlaceholder: "add photo.jpg",
    affiliation: "M.S. Computer Science (Machine Learning), Georgia Tech",
    bioHtml:
      "I'm a software engineer and aspiring researcher working at the intersection of <strong>deep learning</strong> and <strong>computational biology</strong>, with a background in mathematics and distributed systems. I'm preparing for a Masters in computer science or computational biology.",
  },
  researchOverview: {
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
    ],
    moreLabel: "More on my research →",
    moreHref: "/research",
  },
  newsHeading: "News",
  newsItems: [
    // {
    //   date: "Aug 2027",
    //   text: "Planning to begin the in-person M.S. in Computer Science (Research Thesis Track) at Georgia Tech.",
    // },
    {
      date: "Jan 2027",
      text: "Attending CES in Las Vegas with Global Business AI to showcase our AI platform.",
    },
    {
      date: "Nov 2026",
      text: "Preparing M.S. applications in computer science and computational biology.",
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
  ],
};
