import type { KeyValueRow } from "@components/ui/KeyValueTable.astro";

export const ABOUT_CONTENT = {
  title: "About",
  subtitle: "The person behind the CV.",
  bioParagraphs: [
    "I studied mathematics and computer science at Baylor University, then worked as a software engineer, including at IBM Consulting and American Express, focusing on high-throughput backend systems and machine-learning algorithms. Along the way I became more interested in why models work than in simply deploying them, which pulled me toward research.",
    "I now live in Shanghai, where I studied Chinese at Shanghai Jiao Tong University after an intensive program at Beijing Language and Culture University. I have professional proficiency in Mandarin and enjoy working across both the English- and Chinese-speaking research communities.",
  ],
  whyThisFieldTodo:
    "Write 3–5 sentences here in your own voice: what first pulled you toward ML and biology — a book, a problem, a moment. This is the most memorable paragraph on the site.",
  backgroundTodo:
    "Optional: a short paragraph on where you grew up, your family's background, and how living in the U.S. and China shaped your path. Keep it to what you're comfortable sharing publicly.",
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
      value: "M.S. at Georgia Tech, then Ph.D.",
    },
  ] satisfies readonly KeyValueRow[],
} as const;
