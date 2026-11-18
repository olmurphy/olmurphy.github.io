import type { APIRoute } from "astro";
import { SITE } from "@config/site";
import { FEATURES } from "@config/features";
import { getContent } from "@data";
import { getMediumPosts } from "@lib/medium";
import { getLocaleStaticPaths, type Locale } from "@i18n/config";

export const prerender = true;

export function getStaticPaths() {
  return getLocaleStaticPaths();
}

export const GET: APIRoute = async ({ params }) => {
  const lang: Locale = params.lang === "zh" ? "zh" : "en";
  const content = getContent(lang);
  const zh = lang === "zh";
  const visibleProjects = content.projects.projects.filter(
    (p) => !p.featureFlag || FEATURES[p.featureFlag],
  );
  const visibleHackathons = content.projects.hackathons.filter(
    (h) => !h.featureFlag || FEATURES[h.featureFlag],
  );
  const mediumPosts = FEATURES.showWritingPage ? await getMediumPosts() : [];

  const sections: string[] = [
    `# ${SITE.name} (${SITE.chineseName})`,
    `${content.home.hero.affiliation}`,
    `${zh ? "网站" : "Website"}: ${SITE.url}`,
    "",
    zh ? "## 关于我" : "## About",
    ...content.about.bioParagraphs,
    "",
    ...content.about.quickFacts.map((f) => `- **${f.label}**: ${f.value}`),
    "",
    zh ? "## 研究陈述与方向" : "## Research Statement & Directions",
    content.research.statement,
    "",
    ...content.research.directions.map(
      (d) => `- **${d.title}**: ${d.description}`,
    ),
    "",
    `**${zh ? "正在探索的领域" : "Exploring Areas"}**: ${content.research.exploringAreas.join(", ")}`,
    "",
    `**${zh ? "数学基础" : "Mathematical Foundations"}**: ${content.research.foundations}`,
    "",
    zh ? "## 论文与进行中的研究" : "## Publications & Works in Progress",
    zh ? "### 审稿中" : "### Under Review",
    ...content.publications.underReview.map(
      (p) =>
        `- **${p.title}** (${p.venue}) — ${p.summary} [${p.tags.join(", ")}]`,
    ),
    "",
    zh ? "### 进行中" : "### In Progress",
    ...content.publications.inProgress.map(
      (p) =>
        `- **${p.title}** (${p.venue}) — ${p.summary} [${p.tags.join(", ")}]`,
    ),
    "",
    ...(mediumPosts.length > 0
      ? [
          zh ? "## 随笔与文章 (Medium)" : "## Writing (Medium)",
          ...mediumPosts.map(
            (post) =>
              `- **${post.title}** (${post.dateLabel[lang]}, ${post.readTimeMinutes} ${zh ? "分钟阅读" : "min read"}) — ${post.excerpt} (${post.url})`,
          ),
          "",
        ]
      : []),
    zh ? "## 项目" : "## Projects",
    ...visibleProjects.map((p) => {
      const link = p.linkHref && !p.linkTodo ? ` (${p.linkHref})` : "";
      return `- **${p.title}** [${p.tags.join(", ")}]: ${p.summary}${link}`;
    }),
    "",
    zh ? "## 黑客松" : "## Hackathons",
    ...visibleHackathons.map((h) => {
      const link = h.linkHref && !h.linkTodo ? ` (${h.linkHref})` : "";
      return `- **${h.title}** (${h.statusTag ?? ""}): ${h.summary}${link}`;
    }),
    "",
    zh ? "## 教育经历" : "## Education",
    ...content.education.education.map(
      (e) =>
        `- **${e.degree}**, ${e.institution}${e.institutionSuffix ?? ""} (${e.period})${e.details ? ` — ${e.details}` : ""}`,
    ),
    "",
    zh ? "## 访问经历" : "## Visiting Appointments",
    ...content.education.visiting.map((v) => {
      const hosts = v.hosts?.map((h) => h.name).join(" & ");
      const collaboratorsLabel = zh ? "合作者：" : "Collaborators:";
      return `- **${v.role}**, ${v.institution} (${v.period})${hosts ? ` · ${collaboratorsLabel} ${hosts}` : ""}${v.summary ? ` — ${v.summary}` : ""}`;
    }),
    "",
    zh ? "## 工作经历" : "## Experience",
    ...content.education.experience.map(
      (exp) =>
        `- **${exp.role}**, ${exp.company} (${exp.dates}) — ${exp.summary}`,
    ),
    "",
    zh ? "## 教学经历" : "## Teaching",
    ...content.teaching.courses.map(
      (c) =>
        `- **${c.title}**, ${c.institution} — ${c.role} (${c.term}${c.instructorName ? `, ${zh ? "授课教师" : "Instructor"}: ${c.instructorName}` : ""}): ${c.summary}`,
    ),
    "",
    zh ? "## 奖项与荣誉" : "## Awards & Honors",
    ...content.education.awards.map(
      (a) =>
        `- **${a.title}**, ${a.issuer} (${a.date})${a.description ? ` — ${a.description}` : ""}`,
    ),
    "",
    zh ? "## 专业技能" : "## Technical Skills",
    ...content.education.skills.map(
      (s) => `- **${s.category}**: ${s.items ?? ""}`,
    ),
    "",
    zh ? "## 自主研习" : "## Independent Self-Study",
    ...content.learning.categories.flatMap((cat) => [
      `### ${cat.heading}`,
      ...cat.items.map(
        (item) =>
          `- ${item.title ?? ""}${item.book ? `*${item.book}*` : ""}${item.suffix ?? ""}`,
      ),
    ]),
    "",
    zh ? "## 媒体与演讲" : "## Media & Talks",
    ...content.media.featuredTalks.map(
      (t) =>
        `- **${t.title}** (${t.platform}, ${t.stats}): ${t.description} (${t.links.map((l) => l.href).join(" | ")})`,
    ),
    `- **${content.media.seriesTitle}**: ${content.media.seriesDescription}`,
    "",
    zh ? "## 近期动态" : "## Recent News",
    ...content.home.newsItems.map((n) => `- **${n.date}**: ${n.text}`),
    "",
    zh ? "## 联系方式" : "## Contact",
    ...content.contact.channels
      .filter((c) => !c.todo)
      .map((c) => `- **${c.label}**: ${c.href ?? c.value}`),
    "",
  ];

  return new Response(sections.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
