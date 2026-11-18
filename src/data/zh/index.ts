import { HOME_CONTENT as home } from "./home";
import { ABOUT_CONTENT as about } from "./about";
import { CONTENT as en } from "../en";
import type { LocaleContent } from "../en";
import type { TimelineEvent } from "../en/timeline";

const timelineTitles: Record<string, string> = {
  "Ph.D. in computer science or computational biology":
    "攻读计算机科学或计算生物学博士",
  "MIT Reality Hack": "MIT Reality Hack",
  "CES in Las Vegas": "拉斯维加斯 CES 展会",
  "Preparing Masters applications": "准备硕士项目申请",
  "Joined Global Business AI in Shanghai": "加入上海 Global Business AI",
  "Visiting researcher at SIMIS & NeurIPS 2026 submission":
    "在 SIMIS 担任访问研究员并向 NeurIPS 2026 投稿",
  "Built BetterMe at the La French Tech Shanghai Hackathon":
    "在上海法国科技黑客松开发 BetterMe",
  "Joined Move Crew Shanghai run club": "加入上海 Move Crew 跑团",
  "Studied Chinese at Shanghai Jiao Tong University": "在上海交通大学学习汉语",
  "Moved to Shanghai": "迁居上海",
  "Concluded three years at IBM Consulting": "结束在 IBM Consulting 的三年工作",
  "Began the M.S. in Computer Science at Georgia Tech":
    "开始佐治亚理工学院计算机科学硕士课程",
  "Returned to China for the first time since being adopted":
    "被收养后首次回到中国",
  "Started at IBM Consulting as a software engineer":
    "加入 IBM Consulting 担任软件工程师",
  "Moved to New York": "迁居纽约",
  "Graduated from Baylor University": "毕业于贝勒大学",
  "Received full-time software engineering offers from IBM & Dematic":
    "收到 IBM 与 Dematic 的全职软件工程师录用通知",
  "Undergraduate Teaching Assistant at Baylor University":
    "担任贝勒大学本科教学助理",
  "David and Nancy Hidy Wilson Scholarship Fund":
    "获得 David 与 Nancy Hidy Wilson 奖学金",
  "Started at Baylor University": "进入贝勒大学就读",
};
const timelineDates: Record<string, string> = {
  "After the M.S.": "硕士毕业后",
  "Jan 2027": "2027年1月",
  "Nov 2026": "2026年11月",
  "Aug 10, 2026": "2026年8月10日",
  "May 2026": "2026年5月",
  "Jan 16-17, 2026": "2026年1月16–17日",
  "Oct 19, 2025": "2025年10月19日",
  "Sep 2025 – Jun 2026": "2025年9月 – 2026年6月",
  "Sep 13, 2025": "2025年9月13日",
  "Aug 2025": "2025年8月",
  "Jun 13, 2022": "2022年6月13日",
  "May 15, 2022": "2022年5月15日",
  "May 14, 2022": "2022年5月14日",
  "Spring 2022": "2022年春",
  "Fall 2021 – Spring 2022": "2021年秋 – 2022年春",
  "Junior Year": "大三",
  "Aug 2018": "2018年8月",
};

const timelineDescriptions: Record<string, string> = {
  "The next step: research on reliable deep learning and deep learning for biology.":
    "下一步将开展可靠深度学习与生物学深度学习研究。",
  "Participating in MIT's annual XR and spatial computing hackathon in Cambridge, MA.":
    "参加在马萨诸塞州剑桥举行的 MIT 年度 XR 与空间计算黑客松。",
  "Attending with Global Business AI to showcase the company's AI platform.":
    "随 Global Business AI 参展，展示公司的 AI 平台。",
  "Applying to masters programs in computer science and computational biology.":
    "申请计算机科学与计算生物学硕士项目。",
  "AI and software engineer, architecting enterprise multi-tenant chatbot management platforms and LLM streaming data planes.":
    "担任 AI 与软件工程师，负责企业级多租户聊天机器人管理平台及大语言模型流式数据平面的架构设计。",
  "Collaborated with Dr. Leon Witt and Dr. Lucy Klinger at SIMIS (affiliated with Fudan University) and submitted a paper on multi-agent swarm governance via multi-task peer prediction.":
    "在 SIMIS（与复旦大学有合作关系）与 Leon Witt 博士和 Lucy Klinger 博士合作，并提交了一篇关于多任务同伴预测与多智能体群体治理的论文。",
  "Designed and built a full-stack AI roleplay application end to end within 24 hours with Rahul Bura, Yasmine Kennou Filali, Charles Yin, and Yves B.":
    "与 Rahul Bura、Yasmine Kennou Filali、Charles Yin 和 Yves B. 合作，在 24 小时内从头设计并构建了一款全栈 AI 角色扮演应用。",
  "Began running with Move Crew in Shanghai, integrating into the local running community and weekly runs.":
    "开始参加上海 Move Crew 跑团活动，融入当地跑步社群与每周例跑。",
  "Completed two semesters of intensive Chinese language coursework (高三 equivalent) in Shanghai.":
    "在上海完成两个学期的汉语强化课程（相当于高中三年级水平）。",
  "Relocated to Shanghai full-time to immerse in the language, culture, and local AI research ecosystem.":
    "迁居上海，全身心体验当地语言与文化，并融入 AI 研究生态。",
  "Wrapped up a software engineering role focused on distributed cloud backends and enterprise systems.":
    "结束了专注于分布式云后端与企业系统的软件工程工作。",
  "Started the OMSCS program with a Machine Learning specialization (Operating Systems, Machine Learning for Trading, Machine Learning, and Deep Learning).":
    "开始佐治亚理工学院 OMSCS 项目并选择机器学习方向，修读操作系统、交易机器学习、机器学习与深度学习。",
  "Traveled to Beijing to study Chinese intensively at Beijing Language and Culture University (北京语言大学).":
    "前往北京语言大学强化学习汉语。",
  "Built high-throughput enterprise backend systems, distributed services, and machine-learning integrations.":
    "构建高吞吐企业后端系统、分布式服务及机器学习集成。",
  "Relocated to New York after graduating from college to begin my software engineering career.":
    "大学毕业后迁居纽约，开启软件工程师职业生涯。",
  "Earned a B.S. in Mathematics and Computer Science with a 3.9 GPA.":
    "获得数学与计算机科学理学学士学位，GPA 为 3.9。",
  "Received competing full-time offers from IBM and global supply-chain automation company Dematic during the spring semester of senior year, accepting IBM.":
    "大四春季同时收到 IBM 与全球供应链自动化公司 Dematic 的全职录用通知，最终选择加入 IBM。",
  "Graded proof-based problem sets across two semesters for MTH 3300 (Foundations of Mathematics) under Dr. Daniel Herden.":
    "在 Daniel Herden 博士指导下，为 MTH 3300《数学基础》连续两个学期批改证明题作业。",
  "Awarded to the top 1% of Computer Science students in the program at Baylor University.":
    "授予贝勒大学计算机科学专业排名前 1% 的学生。",
  "Began a dual major in Mathematics and Computer Science, earning Dean's Academic Honor List recognition throughout 2018–2022.":
    "开始数学与计算机科学双专业学习，并于 2018 至 2022 年间多次入选院长学术荣誉名单。",
};

export const CONTENT: LocaleContent = {
  ...en,
  home,
  about,
  research: {
    ...en.research,
    title: "研究",
    subtitle: "我的研究方向、兴趣所在与未来规划。",
    statement:
      "我的长期目标是构建足够可靠、能够服务于生物学与医学研究的机器学习方法。这意味着模型能够识别自身知识的边界，能够在大规模应用中值得信赖，并尊重其所处理科学问题的内在结构。",
    directions: [
      {
        title: "可靠深度学习",
        description:
          "模型置信度、选择性弃权与鲁棒性。研究经过良好校准的模型在分布偏移下能否保持可靠，并比较标准训练与 AugMix 等数据增强方法在 CIFAR-10 Wide ResNet 上的效果（在 CIFAR-10-C 与 CIFAR-10.1 上评估）。",
      },
      {
        title: "计算生物学",
        description:
          "面向生命科学的深度学习。打好研究单细胞与空间组学、结构生物学及计算机辅助药物发现的基础。",
      },
    ],
    exploringAreas: [
      "深度学习",
      "自然语言处理",
      "强化学习",
      "单细胞与空间组学",
      "结构生物学",
      "系统生物学",
      "药物发现",
      "计算神经科学",
      "系统发育学",
      "合成生物学",
      "精准医学",
    ],
    grantsEmptyTodo:
      "暂未列出 — 可在此添加研究奖学金、差旅资助或计算资源额度。",
    foundations:
      "我会在课程之外继续学习数学，包括线性代数与矩阵理论、谱图理论、抽象代数、泛函分析和微分几何，因为我相信扎实的理论基础能够提升应用机器学习研究的深度。同时，我也学习理论物理、计算机体系结构（GPU 与内存层级）、神经科学和化学。",
  },
  publications: {
    ...en.publications,
    title: "论文发表",
    subtitle: "已发表论文、预印本与进行中的研究成果。",
    underReview: en.publications.underReview.map((paper) => ({
      ...paper,
      venue: "已投稿至 NeurIPS 2026",
      coAuthors: "与 SIMIS 及复旦大学 / 清华大学合作者合作",
      summary:
        "运用多任务同伴预测与无知识相关一致性（Knowledge-Free Correlated Agreement）治理 AI 智能体群体。",
      status: "审稿中",
      tags: ["博弈论", "机制设计", "多智能体系统"],
    })),
    inProgress: en.publications.inProgress.map((paper) => ({
      ...paper,
      venue: "佐治亚理工学院 CS 7643 深度学习 · 团队项目",
      summary: "比较 CIFAR-10-C 与 CIFAR-10 上的标准训练和 AugMix 训练效果。",
      status: "进行中",
      tags: ["深度学习", "分布偏移", "选择性预测"],
    })),
  },
  projects: {
    ...en.projects,
    title: "项目",
    subtitle: "我参与构建的项目：首先是研究项目，其次是工程项目。",
    projects: en.projects.projects.map((project, index) => ({
      ...project,
      title:
        [
          "CIFAR-10 置信度与弃权研究",
          "AdmissionMatch 招生匹配平台",
          "聊天机器人管理平台",
          "AI 表单自动填写浏览器扩展",
        ][index] ?? project.title,
      summary:
        [
          "为期两个月的项目，使用 AugMix 训练的 Wide ResNet 研究分布偏移下的模型置信度。",
          "面向商学院申请者的 B2B2C 招生与匹配平台，基于 Next.js、FastAPI、PostgreSQL 和向量检索构建。",
          "采用画布式工作流界面的 Dify / Langflow 风格平台，为可扩展的分布式后端而设计。",
          "一项浏览器扩展产品设计，利用语义映射在美国与中国的浏览器中自动填写申请表。",
        ][index] ?? project.summary,
      tags: project.tags.map(
        (tag) =>
          ({
            "Deep learning": "深度学习",
            Robustness: "鲁棒性",
            Platform: "平台",
            "Systems design": "系统设计",
            Proposal: "产品方案",
          })[tag] ?? tag,
      ),
    })),
    hackathons: en.projects.hackathons.map((project, index) => ({
      ...project,
      title: index === 0 ? "MIT Reality Hack" : "BetterMe",
      statusTag:
        index === 0 ? "即将举行 · 2027年1月" : "上海法国科技黑客松 · 2026年1月",
      summary:
        index === 0
          ? "参加在马萨诸塞州剑桥举行的 MIT 年度 XR 与空间计算黑客松。"
          : "为欧莱雅打造 AI 虚拟形象导师，为多地零售团队提供一致的新员工培训、产品问答和销售辅导；在 24 小时内端到端完成。",
      tags: project.tags.map(
        (tag) =>
          ({
            "XR / Spatial Computing": "XR / 空间计算",
            "Full-stack": "全栈开发",
          })[tag] ?? tag,
      ),
    })),
    hackathonPromptTodo:
      "请在此行上方添加新的黑客松经历：活动、日期、你的角色、作品，以及获奖或名次。",
  },
  education: {
    ...en.education,
    title: "教育与工作经历",
    education: en.education.education.map((entry, index) => ({
      ...entry,
      degree:
        [
          "计算机科学硕士（机器学习方向）",
          "汉语学习",
          "汉语强化课程",
          "数学与计算机科学理学学士",
        ][index] ?? entry.degree,
      institutionSuffix: index === 0 ? "（OMSCS）" : entry.institutionSuffix,
      period:
        [
          "2025年秋季至今",
          "两个学期（相当于高中三年级水平）",
          "2025年8月",
          "2018年8月 – 2022年5月 · GPA 3.9",
        ][index] ?? entry.period,
      details:
        index === 0
          ? "已完成：操作系统、交易机器学习、机器学习。正在修读：深度学习（CS 7643）。"
          : entry.details,
    })),
    experience: en.education.experience.map((entry, index) => ({
      ...entry,
      role: "AI / 软件工程师" === entry.role ? "AI / 软件工程师" : "软件工程师",
      summary:
        index === 0
          ? "负责企业级多租户聊天机器人管理平台及大语言模型流式数据平面的架构设计。"
          : "三年来负责高吞吐企业后端系统、分布式服务及机器学习算法集成。",
    })),
    awards: en.education.awards.map((entry, index) => ({
      ...entry,
      title:
        index === 0
          ? "David 与 Nancy Hidy Wilson 奖学金基金"
          : "院长学术荣誉名单",
      date: index === 0 ? "大三" : "2018 – 2022",
      description:
        index === 0
          ? "授予该项目计算机科学专业排名前 1% 的学生。"
          : "因在数学与计算机科学双专业高强度课程中持续保持 3.9 GPA 而获表彰。",
    })),
    skills: en.education.skills.map((skill, index) => ({
      ...skill,
      category:
        [
          "机器学习",
          "计算生物学",
          "计算与硬件",
          "系统与工程",
          "编程",
          "科研实践",
          "语言",
        ][index] ?? skill.category,
      items:
        [
          "PyTorch · 深度学习 · 自然语言处理 · 强化学习 · 多智能体系统 · 智能体运行框架",
          "单细胞与空间组学基础 · 结构生物学 · 分子力学",
          "NVIDIA GPU · GPU 内存层级 · 树莓派 · Arduino",
          "分布式系统 · 后端服务 · Docker · Git · Linux · Tailscale · PostgreSQL · Redis · Kafka",
          "Python · C++ · TypeScript · JavaScript · Java",
          "文献综述 · 实验设计 · 技术写作 · 科学传播",
          "英语（母语） · 汉语普通话（工作交流水平）",
        ][index] ?? skill.items,
    })),
    visiting: en.education.visiting.map((entry) => ({
      ...entry,
      role: "访问研究员",
      institutionNote: " · 与复旦大学有合作关系",
      period: "2026年5月",
      summary:
        "合作研究基于博弈论的多智能体对齐、同伴预测机制与无知识相关一致性。",
    })),
  },
  timeline: {
    ...en.timeline,
    title: "时间线",
    subtitle: "至今的重要节点——学业、职业与个人经历，按时间倒序排列。",
    legendNote: "虚线圆点表示计划中或即将发生。",
    groups: en.timeline.groups.map((group) => ({
      ...group,
      year: group.year === "Ahead" ? "未来计划" : group.year,
      events: group.events.map((event: TimelineEvent) => ({
        ...event,
        date: timelineDates[event.date] ?? event.date,
        title: timelineTitles[event.title] ?? event.title,
        description: event.description
          ? (timelineDescriptions[event.description] ??
            event.description.replace(" with ", "，与"))
          : event.description,
        descriptionParts: event.descriptionParts?.map((part) => ({
          ...part,
          text:
            part.text ===
            "Designed and built a full-stack AI roleplay application end to end within 24 hours with "
              ? "与团队在 24 小时内从头设计并构建了一款全栈 AI 角色扮演应用，团队成员包括 "
              : part.text === ", and Yves B."
                ? " 与 Yves B."
                : part.text,
        })),
      })),
    })),
  },
  life: {
    ...en.life,
    title: "生活随记",
    subtitle: "实验室之外的影像：旅途、运动、创作与日常生活。",
    intro:
      "工作和课程之外，我大多在周末与 Move Crew 沿上海滨江跑步、骑公路车，或折腾硬件与 3D 打印作品。这些照片记录了沿途的城市、训练日常与朋友。",
    photos: en.life.photos.map((photo) => ({
      ...photo,
      alt:
        (
          {
            "View of the Three Gorges Dam spanning the Yangtze River in Hubei, China":
              "中国湖北横跨长江的三峡大坝",
            "Group photo after a Sunday morning run with Move Crew run club in Shanghai":
              "在上海与 Move Crew 跑团完成周日晨跑后的合影",
            "Evening skyline view along the Bund in Shanghai with Daniel Kaijzer and Iris":
              "与 Daniel Kaijzer 和 Iris 在上海外滩欣赏夜景",
            "View along the Great Wall of China winding over green mountain ridges near Beijing":
              "北京附近蜿蜒于青山之上的长城景色",
            "Hall of Prayer for Good Harvests at the Temple of Heaven in Beijing":
              "北京天坛祈年殿",
            "Celebrating Hendry's birthday in New York City":
              "在纽约市为 Hendry 庆祝生日",
          } as Record<string, string>
        )[photo.alt] ?? photo.alt,
      caption:
        (
          {
            "Three Gorges Dam — the world's largest power station at 22,500 MW across 32 main turbines":
              "三峡大坝——全球最大的水电站，32 台主力机组总装机容量达 22,500 兆瓦",
            "Sunday run with Move Crew": "与 Move Crew 的周日跑步",
            "Evening along the Bund with Daniel Kaijzer and Iris":
              "与 Daniel Kaijzer 和 Iris 共赏外滩夜景",
            "Hiking the Great Wall during language immersion":
              "语言沉浸学习期间徒步长城",
            "Visiting the Temple of Heaven during language immersion":
              "语言沉浸学习期间参观天坛",
            "Birthday celebration for Hendry in NYC":
              "在纽约为 Hendry 庆祝生日",
          } as Record<string, string>
        )[photo.caption] ?? photo.caption,
      meta: photo.meta
        .replace("Yichang, Hubei · Oct", "湖北宜昌 · 2026年10月")
        .replace("Shanghai · June", "上海 · 2026年6月")
        .replace("Shanghai · March", "上海 · 2026年3月")
        .replace("Beijing · Aug", "北京 · 2025年8月")
        .replace("New York City ·", "纽约市 ·"),
    })),
  },
  lifeCategories: [
    { id: "places", label: "旅行" },
    { id: "active", label: "运动" },
    { id: "making", label: "创作" },
    { id: "everyday", label: "日常" },
  ],
  learning: {
    ...en.learning,
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
  },
  media: {
    ...en.media,
    title: "媒体与科普",
    subtitle: "教学、科学传播与广受关注的技术演讲。",
    featuredTalks: en.media.featuredTalks.map((talk) => ({
      ...talk,
      title: "区块链技术解析与架构设计",
      description:
        "深入讲解区块链共识机制、密码学与分布式架构，在中国数字平台累计获得超过 20 万次观看。",
      links: talk.links.map((link, index) => ({
        ...link,
        label: index === 0 ? "在抖音观看 →" : "在小红书观看 →",
      })),
    })),
    seriesTitle: "成为博学者之旅",
    seriesDescription:
      "一档关于跨学科学习的科普视频系列，以中英文发布于 YouTube、Instagram Reels、TikTok、小红书和视频号。",
    links: en.media.links.map((link) => ({
      ...link,
      label: link.label
        .replace("YouTube Channel", "YouTube 频道")
        .replace("Douyin Featured Talk", "抖音演讲视频")
        .replace("Xiaohongshu Featured Talk", "小红书演讲视频"),
    })),
    editorialNote:
      "清晰地传达复杂的数学与技术概念，是我学术与工程理念的重要组成部分。",
    press: en.media.press.map((item) => ({
      ...item,
      kind: "学生专题",
      summary:
        "以第一人称讲述我从德克萨斯迁居上海的经历：通过间隔重复学习中文、参加法国科技黑客松、加入 Move Crew 跑团，以及对研究职业生涯的规划。",
    })),
  },
  teaching: {
    ...en.teaching,
    title: "教学经历",
    subtitle: "目前任教的课程以及曾经教授过的课程。",
    courses: en.teaching.courses.map((course) => ({
      ...course,
      title: "MTH 3300：数学基础",
      role: "教学助理（作业批改）",
      term: "2021年秋 – 2022年春（两个学期）",
      summary:
        "连续两个学期批改证明题作业，内容涵盖形式逻辑、集合论、数学归纳法、关系与函数，面向数学专业本科生。",
      tags: ["数学", "证明与逻辑", "本科"],
    })),
  },
  group: {
    ...en.group,
    title: "研究团队",
    subtitle: "博士生、硕士生、本科研究人员与校友。",
    prospectiveNote:
      "欢迎对可靠深度学习、计算生物学或多智能体系统感兴趣的博士与硕士申请者联系，并附上简历和研究兴趣。",
  },
  contact: {
    ...en.contact,
    title: "联系方式",
    intro: "欢迎研究人员、意向导师及同学与我联系交流。",
    channels: en.contact.channels.map((channel) => ({
      ...channel,
      label:
        (
          { Email: "电子邮箱", Location: "所在地", CV: "个人简历" } as Record<
            string,
            string
          >
        )[channel.label] ?? channel.label,
      value:
        channel.value === "Shanghai, China (UTC+8)"
          ? "中国上海（UTC+8）"
          : channel.value === "Google Scholar Profile"
            ? "Google Scholar 个人主页"
            : channel.value === "Download PDF"
              ? "下载 PDF"
              : channel.value,
    })),
  },
  profileLinks: en.profileLinks.map((link) => ({
    ...link,
    label:
      link.label === "Email"
        ? "电子邮箱"
        : link.label === "CV (PDF)"
          ? "个人简历（PDF）"
          : link.label,
  })),
  socialLinks: en.socialLinks.map((link) => ({
    ...link,
    label: link.label === "Buy me a coffee" ? "请我喝杯咖啡" : link.label,
    qrAlt:
      link.qrAlt === "QR code for Owen Murphy's WeChat Official Account"
        ? "Owen Murphy 微信公众号二维码"
        : link.qrAlt,
  })),
};
