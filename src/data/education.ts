export interface EducationEntry {
  degree: string;
  meta: string;
  details?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  summary: string;
}

export interface AwardEntry {
  title: string;
  issuer: string;
  date: string;
  description?: string;
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
      meta: "Baylor University · Aug 2018 – May 2022 · GPA 3.9",
    },
    {
      degree: "Chinese Language Studies",
      meta: "Shanghai Jiao Tong University · Two semesters (高三 equivalent)",
    },
    {
      degree: "Intensive Chinese Language Program",
      meta: "Beijing Language and Culture University · August 2025",
    },
  ] satisfies readonly EducationEntry[],
  experience: [
    {
      role: "AI / Software Engineer",
      company: "Global Business AI (GBizAI)",
      dates: "Aug 2026 – Present",
      summary:
        "Architecting enterprise multi-tenant chatbot management platforms and LLM streaming data planes.",
    },
    {
      role: "Software Engineer",
      company: "IBM Consulting",
      dates: "June 2022 – Sept 2025",
      summary:
        "Developed high-throughput enterprise backend systems, distributed services, and machine-learning algorithm integrations over three years.",
    },
  ] satisfies readonly ExperienceEntry[],
  awards: [
    {
      title: "David and Nancy Hidy Wilson Scholarship Fund",
      issuer: "Baylor University",
      date: "Junior Year",
      description:
        "Awarded to the top 1% of Computer Science students in the program.",
    },
    {
      title: "Dean's Academic Honor List",
      issuer: "Baylor University",
      date: "2018 – 2022",
      description:
        "Recognized consistently for maintaining a 3.9 GPA across rigorous dual-major coursework in Mathematics and Computer Science.",
    },
  ] satisfies readonly AwardEntry[],
  skills: [
    {
      category: "Machine learning",
      items:
        "PyTorch · deep learning · NLP · reinforcement learning · multi-agent systems · agent harnesses",
    },
    {
      category: "Computational biology",
      items:
        "Single-cell & spatial omics foundations · structural biology · molecular mechanics",
    },
    {
      category: "Compute & hardware",
      items: "NVIDIA GPUs · GPU memory hierarchies · Raspberry Pi · Arduino",
    },
    {
      category: "Systems & engineering",
      items:
        "Distributed systems · backend services · Docker · Git · Linux · Tailscale · PostgreSQL · Redis · Kafka",
    },
    {
      category: "Programming",
      items: "Python · C++ · TypeScript · JavaScript · Java",
    },
    {
      category: "Research practice",
      items:
        "Literature review · experiment design · technical writing · science communication",
    },
    {
      category: "Languages",
      items: "English (native) · Mandarin Chinese (fluent)",
    },
  ] satisfies readonly SkillGroup[],
} as const;
