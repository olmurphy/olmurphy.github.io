import type { KeyValueRow } from "@components/ui/KeyValueTable.astro";

export const CONTACT_CONTENT = {
  title: "Contact",
  intro:
    "I'm always glad to hear from researchers, prospective advisors, and fellow students.",
  channels: [
    {
      label: "Email",
      value: "owen261@icloud.com",
      href: "mailto:owen261@icloud.com",
    },
    {
      label: "Location",
      value: "Shanghai, China (UTC+8)",
    },
    {
      label: "GitHub",
      value: "github.com/olmurphy",
      href: "https://github.com/olmurphy",
    },
    {
      label: "Google Scholar",
      value: "Google Scholar Profile",
      href: "https://scholar.google.com/citations?user=A667B6MAAAAJ&hl=zh-CN",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/owenmurphy2022",
      href: "https://www.linkedin.com/in/owenmurphy2022/",
    },
    {
      label: "CV",
      value: "Download PDF",
      href: "/Owen_Li_Murphy_Resume.pdf",
      todo: false,
    },
  ] satisfies readonly KeyValueRow[],
} as const;
