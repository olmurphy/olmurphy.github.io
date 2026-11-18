// src/data/zh/home.ts
import type { HomeContent } from "../types";

export const HOME_CONTENT: HomeContent = {
  meta: {
    title: "李晓党 (Owen Li Murphy) — 机器学习与计算生物学",
    description:
      "李晓党 (Owen Li Murphy) 的个人学术主页：聚焦可靠深度学习、计算生物学与多智能体系统。",
  },
  hero: {
    portraitSrc: "/photo.jpg",
    portraitAlt: "李晓党 (Owen Li Murphy) 个人肖像",
    portraitPlaceholder: "add photo.jpg",
    affiliation: "佐治亚理工学院 (Georgia Tech) 计算机科学硕士（机器学习方向）",
    bioHtml:
      "我是一名软件工程师与科研探索者，拥有数学与分布式系统背景，目前致力于<strong>深度学习</strong>与<strong>计算生物学</strong>的交叉研究，正在准备计算机科学或计算生物学方向的研究型硕士申请。",
  },
  researchOverview: {
    heading: "研究兴趣",
    intro:
      "我的研究目标是构建足够可靠、能够真正服务于生命科学研究的机器学习方法，目前重点关注以下三个方向：",
    pillars: [
      {
        title: "计算生物学",
        description:
          "面向单细胞与空间组学、结构生物学以及计算机辅助药物发现的深度学习方法。",
      },
      {
        title: "可靠深度学习",
        description:
          "分布偏移（Distribution Shift）下的模型置信度校准、选择性弃权（Abstention）与鲁棒性。",
      },
      {
        title: "数学基础",
        description:
          "运用谱图理论、微分几何与泛函分析等工具理解学习系统的内在机理。",
      },
    ],
    moreLabel: "深入了解我的研究 →",
    moreHref: "/research",
  },
  newsHeading: "近期动态",
  newsItems: [
    // {
    //   date: "Aug 2027",
    //   text: "Planning to begin the in-person M.S. in Computer Science (Research Thesis Track) at Georgia Tech.",
    // },
    {
      date: "2027年1月",
      text: "计划随 Global Business AI 赴拉斯维加斯参加 CES 展会，展示企业级 AI 平台。",
    },
    {
      date: "2026年11月",
      text: "正在准备计算机科学与计算生物学方向的研究生申请。",
    },
    {
      date: "2026年8月",
      text: "加入位于上海的 Global Business AI (GBizAI)，担任 AI 与软件工程师。",
    },
    {
      date: "2026年",
      text: "向 NeurIPS 2026 投稿关于基于多任务同伴预测的多智能体群体治理论文。",
    },
    {
      date: "2025年秋",
      text: "开始攻读佐治亚理工学院（Georgia Tech OMSCS）计算机科学硕士（机器学习方向）。",
    },
  ],
};
