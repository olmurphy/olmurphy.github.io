export interface EducationEntry {
  degree: string;
  institution: string;
  institutionSuffix?: string;
  institutionHref: string;
  logoSrc: string;
  period: string;
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

export interface VisitingHost {
  name: string;
  href?: string;
}

export interface VisitingEntry {
  role: string;
  institution: string;
  institutionNote?: string;
  institutionHref: string;
  logoSrc: string;
  hosts?: readonly VisitingHost[];
  period: string;
  summary?: string;
  todo?: boolean;
}

export interface EducationContent {
  title: string;
  education: readonly EducationEntry[];
  experience: readonly ExperienceEntry[];
  awards: readonly AwardEntry[];
  skills: readonly SkillGroup[];
  visiting: readonly VisitingEntry[];
}

export const EDUCATION_CONTENT: EducationContent = {
  title: "Education & Experience",
  education: [
    // {
    //   degree: "M.S. in Computer Science, Research Thesis Track (planned)",
    //   institution: "Georgia Institute of Technology",
    //   institutionSuffix: ", on campus",
    //   institutionHref: "https://www.gatech.edu/",
    //   logoSrc: "/logos/gatech.webp",
    //   period: "beginning August 2027",
    // },
    {
      degree: "M.S. in Computer Science, Machine Learning specialization",
      institution: "Georgia Institute of Technology",
      institutionSuffix: " (OMSCS)",
      institutionHref: "https://www.gatech.edu/",
      logoSrc: "/logos/gatech.webp",
      period: "Fall 2025 – present",
      details:
        "Completed: Operating Systems, Machine Learning for Trading, Machine Learning. In progress: Deep Learning (CS 7643).",
    },
    {
      degree: "Chinese Language Studies",
      institution: "Shanghai Jiao Tong University",
      institutionHref: "https://en.sjtu.edu.cn/",
      logoSrc: "/logos/sjtu.webp",
      period: "Two semesters (高三 equivalent)",
    },
    {
      degree: "Intensive Chinese Language Program",
      institution: "Beijing Language and Culture University",
      institutionHref: "https://www.blcu.edu.cn/",
      logoSrc: "/logos/blcu.webp",
      period: "August 2025",
    },
    {
      degree: "B.S. in Mathematics and Computer Science",
      institution: "Baylor University",
      institutionHref: "https://www.baylor.edu/",
      logoSrc: "/logos/baylor.webp",
      period: "Aug 2018 – May 2022",
      details: "GPA 3.9",
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
      items: "English (native) · Mandarin Chinese (working proficiency)",
    },
  ] satisfies readonly SkillGroup[],
  visiting: [
    {
      role: "Visiting Researcher",
      institution:
        "Shanghai Institute for Mathematics and Interdisciplinary Sciences (SIMIS)",
      institutionNote: " · Affiliated with Fudan University",
      institutionHref: "https://www.simis.cn/",
      logoSrc: "/logos/fudan.webp",
      hosts: [{ name: "Dr. Leon Witt" }, { name: "Dr. Lucy Klinger" }],
      period: "May 2026",
      summary:
        "Collaborating on game-theoretic multi-agent alignment, peer prediction mechanisms, and Knowledge-Free Correlated Agreement.",
      todo: false,
    },
  ] satisfies readonly VisitingEntry[],
} as const;
