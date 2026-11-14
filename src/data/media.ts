export interface MediaLink {
  label: string;
  href: string;
  todo?: boolean;
}

export interface FeaturedTalk {
  title: string;
  description: string;
  platform: string;
  stats: string;
  douyinVideoId?: string;
  links: readonly MediaLink[];
}

export const MEDIA_CONTENT = {
  title: "Media",
  subtitle: "Teaching, science communication, and viral technical talks.",
  featuredTalks: [
    {
      title: "Blockchain Technical Breakdown & Architecture",
      description:
        "An in-depth technical explanation of blockchain consensus mechanisms, cryptography, and distributed architecture, reaching over 200k+ views combined across Chinese digital platforms.",
      platform: "Douyin & Xiaohongshu",
      stats: "200k+ views combined",
      douyinVideoId: "7620062047056743731",
      links: [
        {
          label: "Watch on Douyin →",
          href: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7620062047056743731",
        },
        {
          label: "Watch on Xiaohongshu →",
          href: "https://www.rednote.com/discovery/item/69bfe738000000002102d1bc?xsec_token=AB9Ejr8SjTOOD2pcwT1TlkptUKg7ctoh3UIVzn6vcEFAk=&xsec_source=pc_user",
        },
      ],
    },
  ] satisfies readonly FeaturedTalk[],
  seriesTitle: "Journey to Become a Polymath",
  seriesDescription:
    "An educational video series about learning across disciplines, published in English and Chinese on YouTube, Instagram Reels, TikTok, Xiaohongshu, and Shipinhao.",
  links: [
    {
      label: "YouTube Channel",
      href: "https://www.youtube.com/@owenmurphy2022/featured",
      todo: false,
    },
    {
      label: "Douyin Featured Talk",
      href: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7620062047056743731",
      todo: false,
    },
    {
      label: "Xiaohongshu Featured Talk",
      href: "https://www.rednote.com/discovery/item/69bfe738000000002102d1bc?xsec_token=AB9Ejr8SjTOOD2pcwT1TlkptUKg7ctoh3UIVzn6vcEFAk=&xsec_source=pc_user",
      todo: false,
    },
  ] satisfies readonly MediaLink[],
  editorialNote:
    "Communicating complex mathematical and technical concepts clearly is a core pillar of my academic and engineering philosophy.",
} as const;
