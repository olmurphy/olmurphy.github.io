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

export interface PressItem {
  title: string;
  titleEn?: string; // English translation of a non-English title
  outlet: string;
  date: string;
  language: "中文" | "English";
  kind: string; // "Student spotlight" | "Interview" | ...
  summary: string; // one or two sentences in English
  href: string;
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
  press: [
    {
      title: "【留学生风采】- 从德克萨斯到上海，寻根而行",
      titleEn:
        "International Student Spotlight: From Texas to Shanghai, Tracing My Roots",
      outlet: "留学生事务办公室", // replace with the 公众号 account name
      date: "2026", // replace with the publish date, e.g. "Nov 2026"
      language: "中文",
      kind: "Student spotlight",
      summary:
        "A first-person profile of my move from Texas to Shanghai: learning Chinese with spaced repetition, the La French Tech hackathon, the Move Crew run club, and my plans for a research career.",
      href: "https://mp.weixin.qq.com/s/AWw6Eon2wAx_Q4VqlWeH4g",
    },
  ] satisfies readonly PressItem[],
} as const;
