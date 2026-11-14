export interface EducationEntry {
  degree: string;
  meta: string;
  details?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  datesTodo?: string;
  summaryTodo: string;
}

export interface SkillGroup {
  category: string;
  items?: string;
  todo?: string;
}

export const EDUCATION_CONTENT = {
  title: "Education & Experience",
  education: [
    {
      degree: "M.S. in Computer Science, Machine Learning specialization",
      meta: "Georgia Institute of Technology (OMSCS) · Fall 2025 – present",
      details:
        "Completed: Operating Systems, Machine Learning for Trading, Machine Learning. In progress: Deep Learning (CS 7643).",
    },
    {
      degree: "M.S. in Computer Science, Research Thesis Option (planned)",
      meta: "Georgia Institute of Technology, on campus · beginning August 2027",
    },
    {
      degree: "B.S. in Mathematics and Computer Science",
      meta: "Baylor University · 2018 – 2022 · GPA 3.9",
    },
    {
      degree: "Chinese language studies",
      meta: "Shanghai Jiao Tong University · Aug 2025 – Jun 2026 | Beijing Language and Culture University · Aug 2024",
      details: "HSK 6 certified.",
    },
  ] satisfies readonly EducationEntry[],
  experience: [
    {
      role: "Software Engineer",
      company: "IBM Consulting",
      datesTodo: "dates",
      summaryTodo: "Add 1–2 lines on what you built and the impact.",
    },
    {
      role: "Software Engineer",
      company: "American Express",
      datesTodo: "dates",
      summaryTodo: "Add 1–2 lines on what you built and the impact.",
    },
  ] satisfies readonly ExperienceEntry[],
  skills: [
    {
      category: "Machine learning",
      items:
        "PyTorch · deep learning · NLP · reinforcement learning · multi-agent systems",
      todo: "add: agent harnesses, libraries…",
    },
    {
      category: "Computational biology",
      todo: "name the tools and biological datasets you've actually worked with",
    },
    {
      category: "Compute & hardware",
      items: "NVIDIA GPUs · GPU memory hierarchies · Raspberry Pi · Arduino",
    },
    {
      category: "Systems & engineering",
      items:
        "Distributed systems · backend services · Docker · Git · Linux · Tailscale",
    },
    {
      category: "Programming",
      items: "Python · C++ · TypeScript",
    },
    {
      category: "Research practice",
      items:
        "Literature review · experiment design · technical writing · science communication",
    },
    {
      category: "Languages",
      items: "English (native) · Mandarin Chinese (fluent, HSK 6)",
    },
  ] satisfies readonly SkillGroup[],
} as const;
