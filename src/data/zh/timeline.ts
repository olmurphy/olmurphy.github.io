import { TIMELINE_CONTENT as englishTimeline } from "../en/timeline";
import type { TimelineContent } from "../en/timeline";

const dates: Record<string, string> = {
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

const titles: Record<string, string> = {
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

const descriptions: Record<string, string> = {
  "The next step: research on reliable deep learning and deep learning for biology.":
    "下一步将开展可靠深度学习与生物学深度学习研究。",
  "Participating in MIT's annual XR and spatial computing hackathon in Cambridge, MA.":
    "计划参加在马萨诸塞州剑桥举行的 MIT 年度 XR 与空间计算黑客松。",
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

function translate(dictionary: Record<string, string>, value: string): string {
  const translation = dictionary[value];
  if (!translation) {
    throw new Error(`Missing Chinese timeline translation: ${value}`);
  }
  return translation;
}

export const TIMELINE_CONTENT: TimelineContent = {
  title: "时间线",
  subtitle: "至今的重要节点——学业、职业与个人经历，按时间倒序排列。",
  legendNote: "虚线圆点表示计划中或即将发生。",
  groups: englishTimeline.groups.map((group) => ({
    year: group.year === "Ahead" ? "未来计划" : group.year,
    events: group.events.map((event) => ({
      ...event,
      date: translate(dates, event.date),
      title: translate(titles, event.title),
      description: event.description
        ? translate(descriptions, event.description)
        : undefined,
      descriptionParts: event.descriptionParts?.map((part) => {
        if (part.text === ", ") return { ...part, text: "、" };
        if (part.text === ", and Yves B.") {
          return { ...part, text: "，以及 Yves B." };
        }
        if (
          part.text ===
          "Designed and built a full-stack AI roleplay application end to end within 24 hours with "
        ) {
          return {
            ...part,
            text: "在 24 小时内与团队从头设计并构建了一款全栈 AI 角色扮演应用，团队成员包括 ",
          };
        }
        if (part.href) return { ...part };
        throw new Error(
          `Missing Chinese timeline description part: ${part.text}`,
        );
      }),
    })),
  })),
};
