// src/data/en/about.ts
import type { AboutContent } from "../types";

export const ABOUT_CONTENT: AboutContent = {
  meta: {
    title: "About — Owen Li Murphy",
    description: "Background, interests, and academic path of Owen Li Murphy.",
  },
  title: "About",
  subtitle: "The person behind the CV.",
  bioParagraphs: [
    "I studied mathematics and computer science at Baylor University, then worked as a software engineer at IBM Consulting and later as an AI and software engineer at Global Business AI, focusing on high-throughput distributed systems and machine-learning infrastructure. Along the way I became more interested in why models behave the way they do than in simply deploying them, which pulled me toward research.",
    "I now live in Shanghai, where I studied Chinese at Shanghai Jiao Tong University. I have working proficiency in Mandarin and enjoy collaborating across both the English- and Chinese-speaking research communities.",
  ],
  whyThisFieldHeading: "Why this field",
  whyThisField:
    "Working on production ML infrastructure made clear how often modern models fail silently under distribution shift—a limitation that becomes critical in biology and medicine, where false confidence carries real experimental and clinical cost. My background in pure mathematics and distributed systems drew me toward building learning methods that are both theoretically grounded and reliable at scale, particularly for modeling single-cell systems, molecular structure, and multi-agent dynamics.",
  backgroundHeading: "Background & story",
  background:
    "I grew up in the United States and studied mathematics and computer science at Baylor before moving to New York to start my engineering career. Returning to China as an adoptee—first for language immersion in Beijing and now living and working in Shanghai—shaped how I think across cultures and academic traditions, and solidified my goal of pursuing graduate research in the U.S.",
  outsideLabHeading: "Outside the lab",
  outsideLabItems: [
    { text: "Calisthenics, flexibility training, and running." },
    {
      text: "Making educational videos — see ",
      linkLabel: "Media",
      linkHref: "/media",
      suffix: ".",
    },
    { text: "Tinkering with hardware: Raspberry Pi, Arduino, and a home lab." },
    { text: "Competitive programming (Python and C++)." },
  ],
  quickFactsHeading: "Quick facts",
  quickFacts: [
    {
      label: "Languages",
      value: "English (native), Mandarin Chinese (working proficiency)",
    },
    {
      label: "Based in",
      value: "Shanghai, China",
    },
    {
      label: "Next steps",
      value: "On-campus M.S. at Georgia Tech (Aug 2027), then Ph.D.",
    },
  ],
};
