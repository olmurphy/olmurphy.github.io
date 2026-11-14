import type { APIRoute } from "astro";
import { SITE, NAV_ITEMS } from "@config/site";
import { FEATURES } from "@config/features";
import { RESEARCH_OVERVIEW } from "@data/home";
import { PROFILE_LINKS } from "@data/profile";

export const prerender = true;

export const GET: APIRoute = () => {
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

  const lines: string[] = [
    `# ${SITE.name} (${SITE.chineseName})`,
    "",
    `> ${SITE.tagline}. M.S. Computer Science (Machine Learning) student at Georgia Institute of Technology and AI/Software Engineer in Shanghai, preparing for a Ph.D. in computer science or computational biology.`,
    "",
    "## Core Research Areas",
    ...RESEARCH_OVERVIEW.pillars.map(
      (p) => `- **${p.title}**: ${p.description}`,
    ),
    "",
    "## Site Pages",
    ...activePages.map((item) => {
      const fullUrl = new URL(item.href, SITE.url).toString();
      const desc = pageDescriptions[item.href] ?? item.label;
      return `- [${item.label}](${fullUrl}): ${desc}`;
    }),
    "",
    "## Full Machine-Readable Profile",
    `- [Complete Plain-Text Portfolio](${SITE.url}/llms-full.txt): Consolidated Markdown version of all publications, projects, education, and experience.`,
    "",
    "## External Profiles",
    ...PROFILE_LINKS.filter((l) => !l.todo).map((l) => {
      const href = l.href.startsWith("/")
        ? new URL(l.href, SITE.url).toString()
        : l.href;
      return `- [${l.label}](${href})`;
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
