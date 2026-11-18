import { SITE } from "@config/site";
import { FEATURES } from "@config/features";
import { getContent } from "@data";
import { localePath } from "@i18n/utils";
import type { MediumPost } from "@lib/medium";
import type { Locale } from "@i18n/config";

export type JsonLdObject = Record<string, unknown>;

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function buildGlobalGraph(lang: Locale = "en"): readonly JsonLdObject[] {
  const content = getContent(lang);
  const portraitUrl = new URL(
    content.home.hero.portraitSrc,
    SITE.url,
  ).toString();

  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url:
        lang === "en"
          ? SITE.url
          : new URL(localePath(lang, "/"), SITE.url).toString(),
      name: SITE.name,
      alternateName: SITE.chineseName,
      description: content.home.meta.description,
      inLanguage: lang === "en" ? "en" : "zh-Hans",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      alternateName: [SITE.chineseName, "Owen Murphy"],
      givenName: "Owen",
      familyName: "Murphy",
      url: SITE.url,
      image: portraitUrl,
      description: content.home.meta.description,
      jobTitle:
        lang === "en"
          ? "AI & Software Engineer; M.S. Computer Science Student"
          : "AI 与软件工程师；计算机科学硕士生",
      sameAs: [
        "https://github.com/olmurphy",
        "https://scholar.google.com/citations?user=A667B6MAAAAJ&hl=zh-CN",
        "https://www.linkedin.com/in/owenmurphy2022/",
        "https://www.youtube.com/@owenmurphy2022",
      ],
      affiliation: [
        {
          "@type": "CollegeOrUniversity",
          name: "Georgia Institute of Technology",
          url: "https://www.gatech.edu/",
        },
        {
          "@type": "Organization",
          name: "Global Business AI",
        },
        {
          "@type": "ResearchOrganization",
          name: "Shanghai Institute for Mathematics and Interdisciplinary Sciences (SIMIS)",
          url: "https://www.simis.cn/",
        },
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Baylor University",
          url: "https://www.baylor.edu/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Georgia Institute of Technology",
          url: "https://www.gatech.edu/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Shanghai Jiao Tong University",
          url: "https://en.sjtu.edu.cn/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Beijing Language and Culture University",
          url: "https://www.blcu.edu.cn/",
        },
      ],
      knowsAbout: [
        "Deep Learning",
        "Computational Biology",
        "Multi-Agent Systems",
        "Selective Prediction",
        "Distribution Shift",
        "Spectral Graph Theory",
        ...content.research.exploringAreas,
      ],
      knowsLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Mandarin Chinese" },
      ],
      homeLocation: {
        "@type": "Place",
        name: lang === "en" ? "Shanghai, China" : "中国上海",
      },
    },
  ];
}

export function buildAboutJsonLd(lang: Locale = "en"): JsonLdObject {
  const content = getContent(lang).about;
  return {
    "@type": "ProfilePage",
    url: new URL(localePath(lang, "/about"), SITE.url).toString(),
    name: content.meta.title,
    mainEntity: { "@id": PERSON_ID },
  };
}

export function buildPublicationsJsonLd(
  lang: Locale = "en",
): readonly JsonLdObject[] {
  const content = getContent(lang).publications;
  const allPapers = [...content.underReview, ...content.inProgress];

  return [
    {
      "@type": "CollectionPage",
      url: new URL(localePath(lang, "/publications"), SITE.url).toString(),
      name: `${content.title} — ${SITE.name}`,
      about: { "@id": PERSON_ID },
    },
    ...allPapers.map((paper) => ({
      "@type": "ScholarlyArticle",
      headline: paper.title,
      name: paper.title,
      abstract: paper.summary,
      author: { "@id": PERSON_ID },
      keywords: paper.tags.join(", "),
      creativeWorkStatus: paper.status,
      ...(paper.linkHref && !paper.linkTodo && paper.linkHref !== "#"
        ? { url: paper.linkHref }
        : {}),
    })),
  ];
}

export function buildProjectsJsonLd(
  lang: Locale = "en",
): readonly JsonLdObject[] {
  const content = getContent(lang).projects;
  const visibleProjects = content.projects.filter(
    (p) => !p.featureFlag || FEATURES[p.featureFlag],
  );
  const visibleHackathons = content.hackathons.filter(
    (h) => !h.featureFlag || FEATURES[h.featureFlag],
  );

  return [
    {
      "@type": "CollectionPage",
      url: new URL(localePath(lang, "/projects"), SITE.url).toString(),
      name: `${content.title} — ${SITE.name}`,
      about: { "@id": PERSON_ID },
    },
    ...[...visibleProjects, ...visibleHackathons].map((project) => {
      const hasRepo =
        Boolean(project.linkHref) &&
        !project.linkTodo &&
        project.linkHref?.includes("github.com");

      return {
        "@type": hasRepo ? "SoftwareSourceCode" : "CreativeWork",
        name: project.title,
        description: project.summary,
        author: { "@id": PERSON_ID },
        keywords: project.tags.join(", "),
        ...(hasRepo ? { codeRepository: project.linkHref } : {}),
      };
    }),
  ];
}

export function buildMediaJsonLd(lang: Locale = "en"): readonly JsonLdObject[] {
  const content = getContent(lang);
  return [
    {
      "@type": "CollectionPage",
      url: new URL(localePath(lang, "/media"), SITE.url).toString(),
      name: `${content.media.title} — ${SITE.name}`,
      about: { "@id": PERSON_ID },
    },
    ...content.media.featuredTalks.map((talk) => ({
      "@type": "VideoObject",
      name: talk.title,
      description: talk.description,
      creator: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      thumbnailUrl: new URL(content.home.hero.portraitSrc, SITE.url).toString(),
      ...(talk.douyinVideoId
        ? {
            embedUrl: `https://open.douyin.com/player/video?vid=${talk.douyinVideoId}&autoplay=0`,
          }
        : {}),
      ...(talk.links[0]?.href ? { url: talk.links[0].href } : {}),
    })),
    {
      "@type": "CreativeWorkSeries",
      name: content.media.seriesTitle,
      description: content.media.seriesDescription,
      creator: { "@id": PERSON_ID },
      url: "https://www.youtube.com/@owenmurphy2022/featured",
    },
  ];
}

export function buildWritingJsonLd(
  lang: Locale = "en",
  posts: readonly MediumPost[] = [],
): readonly JsonLdObject[] {
  const content = getContent(lang).writing;
  return [
    {
      "@type": "Blog",
      url: new URL(localePath(lang, "/writing"), SITE.url).toString(),
      name: `${content.title} — ${SITE.name}`,
      description: content.meta.description,
      author: { "@id": PERSON_ID },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: post.url,
        ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
        ...(post.excerpt ? { description: post.excerpt } : {}),
        ...(post.coverSrc ? { image: post.coverSrc } : {}),
        author: { "@id": PERSON_ID },
      })),
    },
  ];
}
