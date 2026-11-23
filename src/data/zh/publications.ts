import type { PublicationsContent } from "../en/publications";

export const PUBLICATIONS_CONTENT: PublicationsContent = {
  title: "论文发表",
  subtitle: "已发表论文、预印本与进行中的研究成果。",
  published: [],
  underReview: [
    {
      title: "Multi-agent swarm governance via multi-task peer prediction",
      venue: "已投稿至 NeurIPS 2026",
      coAuthors: "与 SIMIS 及复旦大学、清华大学的合作者共同完成",
      summary:
        "运用多任务同伴预测与无知识相关一致性机制，研究 AI 智能体群体的治理问题。",
      status: "审稿中",
      tags: ["博弈论", "机制设计", "多智能体系统"],
    },
  ],
  inProgress: [
    {
      title:
        "Confidence and abstention of CIFAR-10 Wide ResNets under distribution shift",
      venue: "佐治亚理工学院 CS 7643 深度学习课程 · 团队项目",
      summary:
        "比较标准训练与 AugMix 训练在 CIFAR-10-C 和 CIFAR-10.1 上的表现。",
      status: "进行中",
      tags: ["深度学习", "分布偏移", "选择性预测"],
    },
  ],
  talks: [],
};
