import type { APIRoute } from "astro";
import { SITE } from "@config/site";
import { FEATURES } from "@config/features";
import { HOME_HERO, RESEARCH_OVERVIEW, NEWS_ITEMS } from "@data/home";
import { ABOUT_CONTENT } from "@data/about";
import { RESEARCH_CONTENT } from "@data/research";
import { PUBLICATIONS_CONTENT } from "@data/publications";
import { PROJECTS_CONTENT } from "@data/projects";
import { EDUCATION_CONTENT } from "@data/education";
import { TEACHING_CONTENT } from "@data/teaching";
import { LEARNING_CONTENT } from "@data/learning";
import { MEDIA_CONTENT } from "@data/media";
import { CONTACT_CONTENT } from "@data/contact";

export const prerender = true;

export const GET: APIRoute = () => {
  const visibleProjects = PROJECTS_CONTENT.projects.filter(
    (p) => !p.featureFlag || FEATURES[p.featureFlag],
  );
  const visibleHackathons = PROJECTS_CONTENT.hackathons.filter(
    (h) => !h.featureFlag || FEATURES[h.featureFlag],
  );

  const sections: string[] = [
    `# ${SITE.name} (${SITE.chineseName})`,
    `${HOME_HERO.affiliation}`,
    `Website: ${SITE.url}`,
    "",
    "## About",
    ...ABOUT_CONTENT.bioParagraphs,
    "",
    ...ABOUT_CONTENT.quickFacts.map((f) => `- **${f.label}**: ${f.value}`),
    "",
    "## Research Statement & Directions",
    RESEARCH_CONTENT.statement,
    "",
    ...RESEARCH_CONTENT.directions.map(
      (d) => `- **${d.title}**: ${d.description}`,
    ),
    "",
    `**Exploring Areas**: ${RESEARCH_CONTENT.exploringAreas.join(", ")}`,
    "",
    `**Mathematical Foundations**: ${RESEARCH_CONTENT.foundations}`,
    "",
    "## Publications & Works in Progress",
    "### Under Review",
    ...PUBLICATIONS_CONTENT.underReview.map(
      (p) =>
        `- **${p.title}** (${p.venue}) — ${p.summary} [${p.tags.join(", ")}]`,
    ),
    "",
    "### In Progress",
    ...PUBLICATIONS_CONTENT.inProgress.map(
      (p) =>
        `- **${p.title}** (${p.venue}) — ${p.summary} [${p.tags.join(", ")}]`,
    ),
    "",
    "## Projects",
    ...visibleProjects.map((p) => {
      const link = p.linkHref && !p.linkTodo ? ` (${p.linkHref})` : "";
      return `- **${p.title}** [${p.tags.join(", ")}]: ${p.summary}${link}`;
    }),
    "",
    "## Hackathons",
    ...visibleHackathons.map((h) => {
      const link = h.linkHref && !h.linkTodo ? ` (${h.linkHref})` : "";
      return `- **${h.title}** (${h.statusTag ?? ""}): ${h.summary}${link}`;
    }),
    "",
    "## Education",
    ...EDUCATION_CONTENT.education.map(
      (e) =>
        `- **${e.degree}**, ${e.institution}${e.institutionSuffix ?? ""} (${e.period})${e.details ? ` — ${e.details}` : ""}`,
    ),
    "",
    "## Visiting Appointments",
    ...EDUCATION_CONTENT.visiting.map((v) => {
      const hosts = v.hosts?.map((h) => h.name).join(" & ");
      return `- **${v.role}**, ${v.institution} (${v.period})${hosts ? ` · Collaborators: ${hosts}` : ""}${v.summary ? ` — ${v.summary}` : ""}`;
    }),
    "",
    "## Experience",
    ...EDUCATION_CONTENT.experience.map(
      (exp) =>
        `- **${exp.role}**, ${exp.company} (${exp.dates}) — ${exp.summary}`,
    ),
    "",
    "## Teaching",
    ...TEACHING_CONTENT.courses.map(
      (c) =>
        `- **${c.title}**, ${c.institution} — ${c.role} (${c.term}${c.instructorName ? `, Instructor: ${c.instructorName}` : ""}): ${c.summary}`,
    ),
    "",
    "## Awards & Honors",
    ...EDUCATION_CONTENT.awards.map(
      (a) =>
        `- **${a.title}**, ${a.issuer} (${a.date})${a.description ? ` — ${a.description}` : ""}`,
    ),
    "",
    "## Technical Skills",
    ...EDUCATION_CONTENT.skills.map(
      (s) => `- **${s.category}**: ${s.items ?? ""}`,
    ),
    "",
    "## Independent Self-Study",
    ...LEARNING_CONTENT.categories.flatMap((cat) => [
      `### ${cat.heading}`,
      ...cat.items.map(
        (item) =>
          `- ${item.title ?? ""}${item.book ? `*${item.book}*` : ""}${item.suffix ?? ""}`,
      ),
    ]),
    "",
    "## Media & Talks",
    ...MEDIA_CONTENT.featuredTalks.map(
      (t) =>
        `- **${t.title}** (${t.platform}, ${t.stats}): ${t.description} (${t.links.map((l) => l.href).join(" | ")})`,
    ),
    `- **${MEDIA_CONTENT.seriesTitle}**: ${MEDIA_CONTENT.seriesDescription}`,
    "",
    "## Recent News",
    ...NEWS_ITEMS.map((n) => `- **${n.date}**: ${n.text}`),
    "",
    "## Contact",
    ...CONTACT_CONTENT.channels
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
