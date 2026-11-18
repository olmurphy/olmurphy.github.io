import type { FeatureFlag } from "@config/features";

export type TimelineCategory = "academic" | "career" | "personal";

export interface DescriptionPart {
  text: string;
  href?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  eventHref?: string;
  description?: string;
  descriptionParts?: readonly DescriptionPart[];
  category: TimelineCategory;
  planned?: boolean;
  featureFlag?: FeatureFlag;
}

export interface TimelineGroup {
  year: string;
  events: readonly TimelineEvent[];
}

export interface TimelineContent {
  title: string;
  subtitle: string;
  legendNote: string;
  groups: readonly TimelineGroup[];
}

export const TIMELINE_CONTENT: TimelineContent = {
  title: "Timeline",
  subtitle:
    "The big moments so far—academic, career, and personal—newest first.",
  legendNote: "A dashed dot means planned or upcoming.",
  groups: [
    {
      year: "Ahead",
      events: [
        {
          date: "After the M.S.",
          title: "Ph.D. in computer science or computational biology",
          description:
            "The next step: research on reliable deep learning and deep learning for biology.",
          category: "academic",
          planned: true,
        },
        // {
        //   date: "Aug 2027",
        //   title: "Begin the in-person M.S. at Georgia Tech",
        //   description:
        //     "On-campus M.S. in Computer Science under the Research Thesis Track.",
        //   category: "academic",
        //   planned: true,
        // },
        {
          date: "Jan 2027",
          title: "MIT Reality Hack",
          description:
            "Participating in MIT's annual XR and spatial computing hackathon in Cambridge, MA.",
          category: "career",
          planned: true,
          featureFlag: "showUpcomingMitRealityHack",
        },
        {
          date: "Jan 2027",
          title: "CES in Las Vegas",
          description:
            "Attending with Global Business AI to showcase the company's AI platform.",
          category: "career",
          planned: true,
        },
      ],
    },
    {
      year: "2026",
      events: [
        {
          date: "Nov 2026",
          title: "Preparing Masters applications",
          description:
            "Applying to masters programs in computer science and computational biology.",
          category: "academic",
        },
        {
          date: "Aug 10, 2026",
          title: "Joined Global Business AI in Shanghai",
          description:
            "AI and software engineer, architecting enterprise multi-tenant chatbot management platforms and LLM streaming data planes.",
          category: "career",
        },
        {
          date: "May 2026",
          title: "Visiting researcher at SIMIS & NeurIPS 2026 submission",
          description:
            "Collaborated with Dr. Leon Witt and Dr. Lucy Klinger at SIMIS (affiliated with Fudan University) and submitted a paper on multi-agent swarm governance via multi-task peer prediction.",
          category: "academic",
        },
        {
          date: "Jan 16-17, 2026",
          title: "Built BetterMe at the La French Tech Shanghai Hackathon",
          eventHref:
            "https://www.frenchtechshanghai.com/upcoming-events/grow-ft-hackathon-2026/",
          description:
            "Designed and built a full-stack AI roleplay application end to end within 24 hours with Rahul Bura, Yasmine Kennou Filali, Charles Yin, and Yves B.",
          descriptionParts: [
            {
              text: "Designed and built a full-stack AI roleplay application end to end within 24 hours with ",
            },
            {
              text: "Rahul Bura",
              href: "https://www.linkedin.com/in/rahulbura/",
            },
            { text: ", " },
            {
              text: "Yasmine Kennou Filali",
              href: "https://www.linkedin.com/in/yasmine-kennou-filali/",
            },
            { text: ", " },
            {
              text: "Charles Yin",
              href: "https://www.linkedin.com/in/charles-yin-748386122/",
            },
            { text: ", and Yves B." },
          ],
          category: "career",
        },
      ],
    },
    {
      year: "2025",
      events: [
        {
          date: "Oct 19, 2025",
          title: "Joined Move Crew Shanghai run club",
          description:
            "Began running with Move Crew in Shanghai, integrating into the local running community and weekly runs.",
          category: "personal",
        },
        {
          date: "Sep 2025 – Jun 2026",
          title: "Studied Chinese at Shanghai Jiao Tong University",
          description:
            "Completed two semesters of intensive Chinese language coursework (高三 equivalent) in Shanghai.",
          category: "academic",
        },
        {
          date: "Sep 13, 2025",
          title: "Moved to Shanghai",
          description:
            "Relocated to Shanghai full-time to immerse in the language, culture, and local AI research ecosystem.",
          category: "personal",
        },
        {
          date: "Sep 13, 2025",
          title: "Concluded three years at IBM Consulting",
          description:
            "Wrapped up a software engineering role focused on distributed cloud backends and enterprise systems.",
          category: "career",
        },
        {
          date: "Aug 2025",
          title: "Began the M.S. in Computer Science at Georgia Tech",
          description:
            "Started the OMSCS program with a Machine Learning specialization (Operating Systems, Machine Learning for Trading, Machine Learning, and Deep Learning).",
          category: "academic",
        },
        {
          date: "Aug 2025",
          title: "Returned to China for the first time since being adopted",
          description:
            "Traveled to Beijing to study Chinese intensively at Beijing Language and Culture University (北京语言大学).",
          category: "personal",
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          date: "Jun 13, 2022",
          title: "Started at IBM Consulting as a software engineer",
          description:
            "Built high-throughput enterprise backend systems, distributed services, and machine-learning integrations.",
          category: "career",
        },
        {
          date: "May 15, 2022",
          title: "Moved to New York",
          description:
            "Relocated to New York after graduating from college to begin my software engineering career.",
          category: "personal",
        },
        {
          date: "May 14, 2022",
          title: "Graduated from Baylor University",
          description:
            "Earned a B.S. in Mathematics and Computer Science with a 3.9 GPA.",
          category: "academic",
        },
        {
          date: "Spring 2022",
          title:
            "Received full-time software engineering offers from IBM & Dematic",
          description:
            "Received competing full-time offers from IBM and global supply-chain automation company Dematic during the spring semester of senior year, accepting IBM.",
          category: "career",
        },
      ],
    },
    {
      year: "2018 – 2022",
      events: [
        {
          date: "Fall 2021 – Spring 2022",
          title: "Undergraduate Teaching Assistant at Baylor University",
          description:
            "Graded proof-based problem sets across two semesters for MTH 3300 (Foundations of Mathematics) under Dr. Daniel Herden.",
          category: "academic",
        },
        {
          date: "Junior Year",
          title: "David and Nancy Hidy Wilson Scholarship Fund",
          description:
            "Awarded to the top 1% of Computer Science students in the program at Baylor University.",
          category: "academic",
        },
        {
          date: "Aug 2018",
          title: "Started at Baylor University",
          description:
            "Began a dual major in Mathematics and Computer Science, earning Dean's Academic Honor List recognition throughout 2018–2022.",
          category: "academic",
        },
      ],
    },
  ] satisfies readonly TimelineGroup[],
} as const;
