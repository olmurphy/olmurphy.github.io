import type { ProfileLink } from "./profile";

export const MEDIA_CONTENT = {
  title: "Media",
  subtitle: "Teaching and communication.",
  seriesTitle: "Journey to Become a Polymath",
  seriesDescription:
    "An educational video series about learning across disciplines, published in English and Chinese on YouTube, Instagram Reels, TikTok, Xiaohongshu, and Shipinhao.",
  links: [
    { label: "YouTube", href: "#", todo: true },
    { label: "Xiaohongshu", href: "#", todo: true },
    { label: "Embed your best episode here", href: "#", todo: true },
  ] satisfies readonly ProfileLink[],
  editorialNote:
    "Communicating clearly is a real asset for a researcher. Keep this page if you plan to continue the series; otherwise it can be folded into About.",
} as const;
