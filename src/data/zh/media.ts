import type { MediaContent } from "../en/media";

export const MEDIA_CONTENT: MediaContent = {
  title: "媒体与科普",
  subtitle: "教学、科学传播与广受关注的技术演讲。",
  featuredTalks: [
    {
      title: "区块链技术解析与架构设计",
      description:
        "深入讲解区块链共识机制、密码学与分布式架构，在中国数字平台累计获得超过 20 万次观看。",
      platform: "抖音与小红书",
      stats: "全平台累计超过 20 万次观看",
      douyinVideoId: "7620062047056743731",
      links: [
        {
          label: "在抖音观看 →",
          href: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7620062047056743731",
        },
        {
          label: "在小红书观看 →",
          href: "https://www.rednote.com/discovery/item/69bfe738000000002102d1bc?xsec_token=AB9Ejr8SjTOOD2pcwT1TlkptUKg7ctoh3UIVzn6vcEFAk=&xsec_source=pc_user",
        },
      ],
    },
  ],
  seriesTitle: "成为博学者之旅",
  seriesDescription:
    "一档关于跨学科学习的科普视频系列，以中英文发布于 YouTube、Instagram Reels、TikTok、小红书和视频号。",
  links: [
    {
      label: "YouTube 频道",
      href: "https://www.youtube.com/@owenmurphy2022/featured",
      todo: false,
    },
    {
      label: "抖音精选演讲",
      href: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7620062047056743731",
      todo: false,
    },
    {
      label: "小红书精选演讲",
      href: "https://www.rednote.com/discovery/item/69bfe738000000002102d1bc?xsec_token=AB9Ejr8SjTOOD2pcwT1TlkptUKg7ctoh3UIVzn6vcEFAk=&xsec_source=pc_user",
      todo: false,
    },
  ],
  editorialNote:
    "清晰地传达复杂的数学与技术概念，是我学术与工程理念的重要组成部分。",
  press: [
    {
      title: "【留学生风采】- 从德克萨斯到上海，寻根而行",
      titleEn: undefined,
      outlet: "留学生事务办公室",
      date: "2026",
      language: "中文",
      kind: "学生专题",
      summary:
        "以第一人称讲述我从德克萨斯迁居上海的经历，包括通过间隔重复学习中文、参加法国科技黑客松、加入 Move Crew 跑团，以及对研究职业生涯的规划。",
      href: "https://mp.weixin.qq.com/s/AWw6Eon2wAx_Q4VqlWeH4g",
    },
  ],
};
