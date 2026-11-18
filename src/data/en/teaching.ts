export type CourseStatus = "Current" | "Completed";

export interface CourseEntry {
  title: string;
  institution: string;
  role: string;
  term: string;
  instructorName?: string;
  instructorHref?: string;
  summary: string;
  status: CourseStatus;
  tags: readonly string[];
  materialsLabel?: string;
  materialsHref?: string;
  todo?: boolean;
}

export interface TeachingContent {
  title: string;
  subtitle: string;
  courses: readonly CourseEntry[];
}

export const TEACHING_CONTENT: TeachingContent = {
  title: "Teaching",
  subtitle: "Classes I'm teaching now and classes I've taught in the past.",
  courses: [
    {
      title: "MTH 3300: Foundations of Mathematics",
      institution: "Baylor University",
      role: "Teaching Assistant (Grader)",
      term: "Fall 2021 – Spring 2022 (2 semesters)",
      instructorName: "Dr. Daniel Herden",
      instructorHref:
        "https://math.artsandsciences.baylor.edu/person/daniel-herden-phd",
      summary:
        "Graded proof-based problem sets across two semesters, covering formal logic, set theory, mathematical induction, relations, and functions for undergraduate mathematics majors.",
      status: "Completed",
      tags: ["Mathematics", "Proofs & Logic", "Undergraduate"],
      todo: false,
    },
  ] satisfies readonly CourseEntry[],
} as const;
