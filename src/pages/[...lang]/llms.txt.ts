import type { APIRoute } from "astro";
import { SITE, NAV_ITEMS } from "@config/site";
import { FEATURES } from "@config/features";
import { getContent } from "@data";
import { getLocaleStaticPaths, type Locale } from "@i18n/config";
import { UI } from "@i18n/ui";
import { localePath } from "@i18n/utils";

export const prerender = true;

export function getStaticPaths() {
  return getLocaleStaticPaths();
}

export const GET: APIRoute = ({ params }) => {
  const lang: Locale = params.lang === "zh" ? "zh" : "en";
  const content = getContent(lang);
  const activePages = NAV_ITEMS.filter(
    (item) => !item.featureFlag || FEATURES[item.featureFlag],
  );

  const pageDescriptions: Record<string, string> = {
    "/": "Overview, research interests, and recent news.",
    "/about": "Biography, academic trajectory, and background.",
    "/timeline": "Chronological academic, career, and personal milestones.",
    "/life": "Photography and life outside research.",
    "/research":
      "Research statement, current directions, and mathematical foundations.",
    "/publications": "Papers under review, works in progress, and preprints.",
    "/writing":
      "Essays and technical writing on deep learning, biology, and engineering.",
    "/projects":
      "Machine learning, systems engineering, and hackathon projects.",
    "/teaching": "Teaching assistantships and academic instruction.",
    "/group": "Advised students and research collaborators.",
    "/education":
      "Degrees, visiting appointments, industry experience, honors, and technical skills.",
    "/learning":
      "Independent self-study curriculum across mathematics, CS, and natural sciences.",
    "/media":
      "Technical talks, educational video series, and science communication.",
    "/contact": "Email, GitHub, Google Scholar, LinkedIn, and CV.",
  };
  const chineseDescriptions: Record<string, string> = {
    "/": "个人简介、研究兴趣与近期动态。",
    "/about": "个人经历、学术轨迹与成长背景。",
    "/timeline": "学业、职业与个人经历时间线。",
    "/life": "摄影记录与科研之外的生活。",
    "/research": "研究陈述、当前方向与数学基础。",
    "/publications": "审稿中论文、研究成果与预印本。",
    "/writing": "发布于 Medium 的深度学习、计算生物学与系统工程随笔。",
    "/projects": "机器学习、系统工程与黑客松项目。",
    "/teaching": "助教经历与教学工作。",
    "/group": "指导学生与研究合作者。",
    "/education": "学位、访问经历、工作经验、荣誉与技能。",
    "/learning": "数学、计算机科学与自然科学领域的自主学习。",
    "/media": "技术演讲、科普视频系列与科学传播。",
    "/contact": "电子邮箱、GitHub、Google 学术搜索、LinkedIn 与简历。",
  };

  const lines: string[] = [
    `# ${SITE.name} (${SITE.chineseName})`,
    "",
    lang === "en"
      ? `> ${SITE.tagline}. M.S. Computer Science (Machine Learning) student at Georgia Institute of Technology and AI/Software Engineer in Shanghai, preparing for a Masters in computer science or computational biology.`
      : `> ${content.home.meta.description} 目前就读于佐治亚理工学院计算机科学硕士（机器学习方向），并在上海担任 AI 与软件工程师，计划继续攻读计算机科学或计算生物学研究生学位。`,
    "",
    lang === "en" ? "## Core Research Areas" : "## 核心研究领域",
    ...content.home.researchOverview.pillars.map(
      (p) => `- **${p.title}**: ${p.description}`,
    ),
    "",
    lang === "en" ? "## Site Pages" : "## 网站页面",
    ...activePages.map((item) => {
      const fullUrl = new URL(localePath(lang, item.href), SITE.url).toString();
      const desc =
        lang === "en"
          ? (pageDescriptions[item.href] ?? item.label)
          : (chineseDescriptions[item.href] ?? item.label);
      return `- [${UI[lang].navLabels[item.href] ?? item.label}](${fullUrl}): ${desc}`;
    }),
    "",
    lang === "en"
      ? "## Full Machine-Readable Profile"
      : "## 完整机器可读个人资料",
    lang === "en"
      ? `- [Complete Plain-Text Portfolio](${SITE.url}/llms-full.txt): Consolidated Markdown version of all publications, projects, education, and experience.`
      : `- [完整纯文本作品集](${SITE.url}${localePath(lang, "/llms-full.txt")}): 汇总论文、项目、教育与工作经历的 Markdown 文档。`,
    "",
    lang === "en" ? "## External Profiles" : "## 外部主页",
    ...content.profileLinks
      .filter((l) => !l.todo)
      .map((l) => {
        const href = l.href.startsWith("/")
          ? new URL(l.href, SITE.url).toString()
          : l.href;
        return `- [${lang === "zh" && l.label === "Email" ? "电子邮箱" : l.label}](${href})`;
      }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
