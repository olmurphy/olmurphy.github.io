import type { FeatureFlag } from "./features";

export type NavGroup = "Overview" | "Work" | "Background";

export interface NavItem {
  label: string;
  href: string;
  group: NavGroup;
  desktopPin?: boolean;
  featureFlag?: FeatureFlag;
}

export const SITE = {
  name: "Owen Li Murphy",
  chineseName: "李晓党",
  tagline: "Deep learning · Computational biology · Multi-agent systems",
  defaultTitle: "Owen Li Murphy — Machine Learning & Computational Biology",
  defaultDescription:
    "Personal academic website of Owen Li Murphy: deep learning, computational biology, and multi-agent systems.",
  url: "https://olmurphy.github.io",
  defaultOgImage: "/photo.jpg",
  defaultOgImageAlt: "Portrait of Owen Li Murphy",
} as const;

export const NAV_GROUPS: readonly NavGroup[] = [
  "Overview",
  "Work",
  "Background",
];

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/", group: "Overview", desktopPin: true },
  { label: "About", href: "/about", group: "Overview" },
  { label: "Timeline", href: "/timeline", group: "Overview" },
  { label: "Life", href: "/life", group: "Overview" },
  { label: "Research", href: "/research", group: "Work" },
  { label: "Publications", href: "/publications", group: "Work" },
  {
    label: "Writing",
    href: "/writing",
    group: "Work",
    featureFlag: "showWritingPage",
  },
  { label: "Projects", href: "/projects", group: "Work" },
  {
    label: "Teaching",
    href: "/teaching",
    group: "Work",
    featureFlag: "showTeachingPage",
  },
  {
    label: "Group",
    href: "/group",
    group: "Work",
    featureFlag: "showLabGroupPage",
  },
  { label: "Education & Experience", href: "/education", group: "Background" },
  { label: "Learning", href: "/learning", group: "Background" },
  { label: "Media", href: "/media", group: "Background" },
  { label: "Contact", href: "/contact", group: "Background", desktopPin: true },
];
