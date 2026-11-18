import type { TeachingContent } from "../en/teaching";

export const TEACHING_CONTENT: TeachingContent = {
  title: "教学经历",
  subtitle: "目前任教的课程以及曾经教授过的课程。",
  courses: [
    {
      title: "MTH 3300：数学基础",
      institution: "Baylor University",
      role: "教学助理（作业批改）",
      term: "2021年秋 – 2022年春（两个学期）",
      instructorName: "Dr. Daniel Herden",
      instructorHref:
        "https://math.artsandsciences.baylor.edu/person/daniel-herden-phd",
      summary:
        "连续两个学期批改证明题作业，内容涵盖形式逻辑、集合论、数学归纳法、关系与函数，面向数学专业本科生。",
      status: "Completed",
      tags: ["数学", "证明与逻辑", "本科"],
      todo: false,
    },
  ],
};
