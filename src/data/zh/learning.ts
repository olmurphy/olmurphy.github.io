import type { LearningContent } from "../en/learning";

export const LEARNING_CONTENT: LearningContent = {
  title: "自主研习",
  subtitle: "课程之外的学习内容，展现我的思考方式，也常常成为交流的起点。",
  reflection:
    "从谱图理论、矩阵分析等基础内容，到 GPU 内存层级与生物化学，我通过自学教材、从基本原理出发建立知识体系。这改变了我阅读机器学习论文的方式：当我看到变分、谱与动力学结构在电动力学、统计物理和分子系统中反复出现时，便能剥离库的抽象封装，专注于底层数学机制。",
  categories: [
    {
      heading: "数学",
      items: [
        { title: "研究生层次的线性代数与矩阵理论" },
        { book: "图论", suffix: " — Diestel" },
        { book: "抽象代数", suffix: " — Dummit 与 Foote" },
        {
          title: "谱图理论；接下来：",
          book: "光滑流形导论",
          suffix: " — Lee",
        },
      ],
    },
    {
      heading: "计算机科学",
      items: [
        { book: "计算机体系结构", suffix: " — Hennessy 与 Patterson" },
        { book: "分布式系统", suffix: " — van Steen 与 Tanenbaum" },
        { book: "计算机网络", suffix: " — Kurose 与 Ross" },
        { title: "编译原理（Aho 等）、高性能计算（Grama）、云计算（Hwang）" },
      ],
    },
    {
      heading: "自然科学",
      items: [
        { book: "电动力学导论", suffix: " — Griffiths" },
        { book: "有机化学", suffix: " — Clayden" },
        { title: "生物化学、遗传学与神经科学" },
        { title: "机器人学 — Lynch 与 Park、Spong、Thrun" },
      ],
    },
  ],
};
