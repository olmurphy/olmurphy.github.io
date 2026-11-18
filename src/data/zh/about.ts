// src/data/zh/about.ts
import type { AboutContent } from "../types";

export const ABOUT_CONTENT: AboutContent = {
  meta: {
    title: "关于我 — 李晓党 (Owen Li Murphy)",
    description: "李晓党 (Owen Li Murphy) 的成长背景、学术轨迹与研究志向。",
  },
  title: "关于我",
  subtitle: "简历之外的个人故事。",
  bioParagraphs: [
    "我本科就读于贝勒大学，获数学与计算机科学双专业理学学士学位。毕业后先后在 IBM Consulting 担任软件工程师、在 Global Business AI 担任 AI 与软件工程师，专注于高吞吐分布式系统与机器学习基础设施建设。在工程实践中，我逐渐发现自己对“模型为何如此运作”的兴趣远胜于单纯的系统部署，这也促使我坚定地走向学术研究道路。",
    "我目前定居上海，并曾在上海交通大学进修汉语，具备工作交流水平的普通话能力，也期待与中英文研究社群开展合作。",
  ],
  whyThisFieldHeading: "为何选择这一领域",
  whyThisField:
    "生产环境中的机器学习基础设施经验让我深刻体会到，现代模型在面临分布偏移时极易出现“静默失效”——这一局限在生物学与医学领域尤为致命，因为错误的置信度往往意味着高昂的实验与临床代价。纯数学与分布式系统的训练背景引导我去探索兼具理论根基与大规模可扩展性的学习方法，尤其关注单细胞系统建模、分子结构预测与多智能体动力学。",
  backgroundHeading: "成长背景与经历",
  background:
    "我在美国长大，在贝勒大学完成数学与计算机科学本科学业后前往纽约开启职业生涯。作为一名被收养者回到中国——先是在北京进行语言沉浸学习，如今在上海生活与工作——这段跨文化经历塑造了我融合东西方学术传统的思维方式，也进一步坚定了我赴美攻读研究型硕士及博士学位的目标。",
  outsideLabHeading: "科研之外",
  outsideLabItems: [
    { text: "街头健身（徒手力量训练）、柔韧性训练与长跑。" },
    {
      text: "制作跨学科科普视频 —— 详见",
      linkLabel: "媒体与科普",
      linkHref: "/media",
      suffix: "。",
    },
    {
      text: "硬件折腾与创客实践：树莓派、Arduino 与家庭服务器实验室。",
    },
    { text: "算法竞赛与编程（Python 与 C++）。" },
  ],
  quickFactsHeading: "基本信息",
  quickFacts: [
    {
      label: "语言能力",
      value: "英语（母语）、汉语普通话（工作流利）",
    },
    {
      label: "常驻城市",
      value: "中国 · 上海",
    },
    {
      label: "下一步计划",
      value: "2027年8月赴佐治亚理工学院攻读校内研究型硕士，随后攻读博士学位。",
    },
  ],
};
