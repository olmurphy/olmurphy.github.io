export interface ProfileLink {
  label: string;
  href: string;
  todo?: boolean;
}

export const PROFILE_LINKS: readonly ProfileLink[] = [
  { label: "Email", href: "/contact" },
  { label: "Google Scholar", href: "#", todo: true },
  { label: "GitHub", href: "#", todo: true },
  { label: "LinkedIn", href: "#", todo: true },
  { label: "CV (PDF)", href: "#", todo: true },
];
