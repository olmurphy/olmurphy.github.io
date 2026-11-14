export interface Link {
  label: string;
  href: string;
  todo?: boolean;
}

export const PROFILE_LINKS: readonly Link[] = [
  { label: "Email", href: "mailto:owen261@icloud.com" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=A667B6MAAAAJ&hl=zh-CN",
  },
  { label: "GitHub", href: "https://github.com/olmurphy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/owenmurphy2022/" },
  { label: "CV (PDF)", href: "/Owen_Li_Murphy_Resume.pdf", todo: false },
];

/** Footer "Social" column. Add or remove entries here and the footer updates itself. */
export const SOCIAL_LINKS: readonly Link[] = [
  { label: "Instagram", href: "https://www.instagram.com/owenmurphy2022/" },
  { label: "TikTok", href: "https://www.tiktok.com/@owenmurphy2022" },
  { label: "YouTube", href: "https://www.youtube.com/@owenmurphy2022" },
  { label: "X", href: "https://x.com/owenmurphy2022" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100077171944784",
  },
  {
    label: "小红书 (Xiaohongshu)",
    href: "https://www.xiaohongshu.com/user/profile/6584485a000000001d003274",
  },
  {
    label: "Podcast",
    href: "https://podcasts.apple.com/us/podcast/owen-murphy/id1812550142",
  },
  {
    label: "Buy me a coffee",
    href: "https://www.buymeacoffee.com/owenmurphy2022",
  },
];

/** Footer "Professional" column. */
export const PROFESSIONAL_LINKS: readonly Link[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/owenmurphy2022/" },
  { label: "GitHub", href: "https://github.com/olmurphy" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=A667B6MAAAAJ&hl=zh-CN",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/13647652/owen-murphy",
  },
  { label: "Medium", href: "https://owenmurphy2022.medium.com/" },
  { label: "Email", href: "mailto:owen261@icloud.com" },
];
