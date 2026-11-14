import { SITE } from "@config/site";
import { FEATURES } from "@config/features";
import { HOME_HERO } from "@data/home";
import { RESEARCH_CONTENT } from "@data/research";
import { PUBLICATIONS_CONTENT } from "@data/publications";
import { PROJECTS_CONTENT } from "@data/projects";
import { MEDIA_CONTENT } from "@data/media";

export type JsonLdObject = Record<string, unknown>;

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function buildGlobalGraph(): readonly JsonLdObject[] {
  const portraitUrl = new URL(HOME_HERO.portraitSrc, SITE.url).toString();

  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.chineseName,
      description: SITE.defaultDescription,
      inLanguage: "en",
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
      description: SITE.defaultDescription,
      jobTitle: "AI & Software Engineer; M.S. Computer Science Student",
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
          name: "Global Business AI (GBizAI)",
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
        ...RESEARCH_CONTENT.exploringAreas,
      ],
      knowsLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Mandarin Chinese" },
      ],
      homeLocation: {
        "@type": "Place",
        name: "Shanghai, China",
      },
    },
  ];
}

export function buildAboutJsonLd(): JsonLdObject {
  return {
    "@type": "ProfilePage",
    url: `${SITE.url}/about`,
    name: `About — ${SITE.name}`,
    mainEntity: { "@id": PERSON_ID },
  };
}

export function buildPublicationsJsonLd(): readonly JsonLdObject[] {
  const allPapers = [
    ...PUBLICATIONS_CONTENT.underReview,
    ...PUBLICATIONS_CONTENT.inProgress,
  ];

  return [
    {
      "@type": "CollectionPage",
      url: `${SITE.url}/publications`,
      name: `Publications — ${SITE.name}`,
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

export function buildProjectsJsonLd(): readonly JsonLdObject[] {
  const visibleProjects = PROJECTS_CONTENT.projects.filter(
    (p) => !p.featureFlag || FEATURES[p.featureFlag],
  );
  const visibleHackathons = PROJECTS_CONTENT.hackathons.filter(
    (h) => !h.featureFlag || FEATURES[h.featureFlag],
  );

  return [
    {
      "@type": "CollectionPage",
      url: `${SITE.url}/projects`,
      name: `Projects — ${SITE.name}`,
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

export function buildMediaJsonLd(): readonly JsonLdObject[] {
  return [
    {
      "@type": "CollectionPage",
      url: `${SITE.url}/media`,
      name: `Media — ${SITE.name}`,
      about: { "@id": PERSON_ID },
    },
    ...MEDIA_CONTENT.featuredTalks.map((talk) => ({
      "@type": "VideoObject",
      name: talk.title,
      description: talk.description,
      creator: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      thumbnailUrl: new URL(HOME_HERO.portraitSrc, SITE.url).toString(),
      ...(talk.douyinVideoId
        ? {
            embedUrl: `https://open.douyin.com/player/video?vid=${talk.douyinVideoId}&autoplay=0`,
          }
        : {}),
      ...(talk.links[0]?.href ? { url: talk.links[0].href } : {}),
    })),
    {
      "@type": "CreativeWorkSeries",
      name: MEDIA_CONTENT.seriesTitle,
      description: MEDIA_CONTENT.seriesDescription,
      creator: { "@id": PERSON_ID },
      url: "https://www.youtube.com/@owenmurphy2022/featured",
    },
  ];
}
