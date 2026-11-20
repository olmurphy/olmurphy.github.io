import type { EducationContent } from "../en/education";

export const EDUCATION_CONTENT: EducationContent = {
  title: "教育与工作经历",
  education: [
    {
      degree: "计算机科学硕士（机器学习方向）",
      institution: "佐治亚理工学院",
      institutionSuffix: "（OMSCS）",
      institutionHref: "https://www.gatech.edu/",
      logoSrc: "/logos/gatech.webp",
      period: "2025年秋季至今",
      details:
        "已完成：操作系统、交易机器学习、机器学习。正在修读：深度学习（CS 7643）。",
    },
    {
      degree: "汉语学习",
      institution: "上海交通大学",
      institutionHref: "https://en.sjtu.edu.cn/",
      logoSrc: "/logos/sjtu.webp",
      period: "两个学期（相当于高中三年级水平）",
    },
    {
      degree: "汉语强化课程",
      institution: "北京语言大学",
      institutionHref: "https://www.blcu.edu.cn/",
      logoSrc: "/logos/blcu.webp",
      period: "2025年8月",
    },
    {
      degree: "数学与计算机科学理学学士",
      institution: "贝勒大学",
      institutionHref: "https://www.baylor.edu/",
      logoSrc: "/logos/baylor.webp",
      period: "2018年8月 – 2022年5月",
      details: "GPA 3.9",
    },
  ],
  experience: [
    {
      role: "AI 与软件工程师",
      company: "Global Business AI (GBizAI)",
      dates: "2026年8月至今",
      summary:
        "负责企业级多租户聊天机器人管理平台及大语言模型流式数据平面的架构设计。",
    },
    {
      role: "软件工程师",
      company: "IBM Consulting",
      dates: "2022年6月 – 2025年9月",
      summary: "三年来负责高吞吐企业后端系统、分布式服务及机器学习算法集成。",
    },
  ],
  awards: [
    {
      title: "David 与 Nancy Hidy Wilson 奖学金基金",
      issuer: "贝勒大学",
      date: "大三",
      description: "授予项目中计算机科学专业排名前 1% 的学生。",
    },
    {
      title: "院长学术荣誉名单",
      issuer: "贝勒大学",
      date: "2018 – 2022",
      description:
        "因在数学与计算机科学双专业高强度课程中持续保持 3.9 GPA 而获表彰。",
    },
  ],
  skills: [
    {
      category: "机器学习",
      items:
        "PyTorch · 深度学习 · 自然语言处理 · 强化学习 · 多智能体系统 · 智能体运行框架",
    },
    {
      category: "计算生物学",
      items: "单细胞与空间组学基础 · 结构生物学 · 分子力学",
    },
    {
      category: "计算与硬件",
      items: "NVIDIA GPU · GPU 内存层级 · 树莓派 · Arduino",
    },
    {
      category: "系统与工程",
      items:
        "分布式系统 · 后端服务 · Docker · Git · Linux · Tailscale · PostgreSQL · Redis · Kafka",
    },
    {
      category: "编程",
      items: "Python · C++ · TypeScript · JavaScript · Java",
    },
    {
      category: "科研实践",
      items: "文献综述 · 实验设计 · 技术写作 · 科学传播",
    },
    {
      category: "语言",
      items: "英语（母语） · 汉语普通话（工作交流水平）",
    },
  ],
  visiting: [
    {
      role: "访问研究员",
      institution: "上海数学与交叉学科研究院（SIMIS）",
      institutionNote: " · 与复旦大学有合作关系",
      institutionHref: "https://www.simis.cn/",
      logoSrc: "/logos/fudan.webp",
      hosts: [{ name: "Dr. Leon Witt" }, { name: "Dr. Lucy Klinger" }],
      period: "2026年5月",
      summary:
        "合作研究基于博弈论的多智能体对齐、同伴预测机制与无知识相关一致性。",
      todo: false,
    },
  ],
};
