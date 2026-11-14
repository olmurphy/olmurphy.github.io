export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  name: "Owen Li Murphy",
  chineseName: "李晓党",
  tagline: "Deep learning · Computational biology · Multi-agent systems",
  defaultTitle: "Owen Li Murphy — Machine Learning & Computational Biology",
  defaultDescription:
    "Personal academic website of Owen Li Murphy: deep learning, computational biology, and multi-agent systems.",
  url: "https://olmurphy.github.io",
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Education & Experience", href: "/education" },
  { label: "Learning", href: "/learning" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];
