export interface ProfileLink {
  label: string;
  href: string;
  todo?: boolean;
}

export const PROFILE_LINKS: readonly ProfileLink[] = [
  { label: "Email", href: "mailto:owen261@icloud.com" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=A667B6MAAAAJ&hl=zh-CN",
  },
  { label: "GitHub", href: "https://github.com/olmurphy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/owenmurphy2022/" },
  { label: "CV (PDF)", href: "/cv.pdf", todo: true },
];
