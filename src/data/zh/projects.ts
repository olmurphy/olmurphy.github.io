import type { ProjectsContent } from "../en/projects";

export const PROJECTS_CONTENT: ProjectsContent = {
  title: "项目",
  subtitle: "我参与构建的项目：首先是研究项目，其次是工程项目。",
  projects: [
    {
      title: "CIFAR-10 置信度与弃权研究",
      tags: ["深度学习", "鲁棒性", "PyTorch"],
      summary:
        "为期两个月的项目，使用 AugMix 训练的 Wide ResNet 研究分布偏移下的模型置信度。",
      linkLabel: "GitHub / 代码",
      linkHref: "https://github.com/olmurphy/dl-neurips-bound",
      linkTodo: false,
    },
    {
      title: "AdmissionMatch 招生匹配平台",
      tags: ["平台", "Next.js", "FastAPI", "pgvector"],
      summary:
        "面向商学院申请者的 B2B2C 招生与匹配平台，使用 Next.js、FastAPI、PostgreSQL 和向量检索构建。",
    },
    {
      title: "聊天机器人管理平台",
      tags: ["React", "TypeScript", "系统设计"],
      summary:
        "采用 Dify / Langflow 风格的画布式工作流界面，为可扩展的分布式后端而设计。",
    },
    {
      title: "AI 表单自动填写浏览器扩展",
      tags: ["大语言模型", "浏览器扩展", "产品方案"],
      summary:
        "一项浏览器扩展产品设计，利用语义映射，在美国与中国的浏览器中自动填写申请表单。",
    },
  ],
  hackathons: [
    {
      title: "MIT Reality Hack",
      statusTag: "即将举行 · 2027年1月",
      tags: ["XR / 空间计算", "人工智能"],
      summary: "计划参加在马萨诸塞州剑桥举行的 MIT 年度 XR 与空间计算黑客松。",
      featureFlag: "showUpcomingMitRealityHack",
    },
    {
      title: "BetterMe",
      statusTag: "上海法国科技黑客松 · 2026年1月",
      statusHref:
        "https://www.frenchtechshanghai.com/upcoming-events/grow-ft-hackathon-2026/",
      tags: ["全栈开发", "大语言模型"],
      summary:
        "为欧莱雅打造 AI 虚拟形象导师，为多地零售团队提供一致的新员工培训、产品问答和销售辅导；在 24 小时内端到端完成。",
      team: [
        { name: "Rahul Bura", href: "https://www.linkedin.com/in/rahulbura/" },
        {
          name: "Yasmine Kennou Filali",
          href: "https://www.linkedin.com/in/yasmine-kennou-filali/",
        },
        {
          name: "Charles Yin",
          href: "https://www.linkedin.com/in/charles-yin-748386122/",
        },
        { name: "Yves B." },
      ],
      linkLabel: "GitHub / 代码",
      linkHref: "https://github.com/olmurphy/BetterMe",
      linkTodo: false,
    },
  ],
  hackathonPromptTodo:
    "请在此行上方添加新的黑客松经历：活动、日期、你的角色、作品，以及获奖或名次。",
};
