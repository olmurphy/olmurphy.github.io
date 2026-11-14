import type { KeyValueRow } from "@components/ui/KeyValueTable.astro";

export const CONTACT_CONTENT = {
  title: "Contact",
  intro:
    "I'm always glad to hear from researchers, prospective advisors, and fellow students.",
  channels: [
    {
      label: "Email",
      value: "you@example.com",
      href: "mailto:you@example.com",
      todo: true,
    },
    {
      label: "Location",
      value: "Shanghai, China (UTC+8)",
    },
    {
      label: "GitHub",
      value: "github.com/username",
      href: "#",
      todo: true,
    },
    {
      label: "Google Scholar",
      value: "link",
      href: "#",
      todo: true,
    },
    {
      label: "LinkedIn",
      value: "link",
      href: "#",
      todo: true,
    },
    {
      label: "CV",
      value: "Download PDF",
      href: "#",
      todo: true,
    },
  ] satisfies readonly KeyValueRow[],
} as const;
