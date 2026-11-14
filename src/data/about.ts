import type { KeyValueRow } from "@components/ui/KeyValueTable.astro";

export const ABOUT_CONTENT = {
  title: "About",
  subtitle: "The person behind the CV.",
  bioParagraphs: [
    "I studied mathematics and computer science at Baylor University, then worked as a software engineer at IBM Consulting and later as an AI and software engineer at Global Business AI, focusing on high-throughput distributed systems and machine-learning infrastructure. Along the way I became more interested in why models behave the way they do than in simply deploying them, which pulled me toward research.",
    "I now live in Shanghai, where I studied Chinese at Shanghai Jiao Tong University. I have working proficiency in Mandarin and enjoy collaborating across both the English- and Chinese-speaking research communities.",
  ],
  whyThisField:
    "Working on production ML infrastructure made clear how often modern models fail silently under distribution shift—a limitation that becomes critical in biology and medicine, where false confidence carries real experimental and clinical cost. My background in pure mathematics and distributed systems drew me toward building learning methods that are both theoretically grounded and reliable at scale, particularly for modeling single-cell systems, molecular structure, and multi-agent dynamics.",
  background:
    "I grew up in the United States and studied mathematics and computer science at Baylor before moving to New York to start my engineering career. Returning to China as an adoptee—first for language immersion in Beijing and now living and working in Shanghai—shaped how I think across cultures and academic traditions, and solidified my goal of pursuing graduate research in the U.S.",
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
  ] satisfies readonly KeyValueRow[],
} as const;
