import type { WritingContent } from "../en/writing";

export const WRITING_CONTENT: WritingContent = {
  meta: {
    title: "随笔与文章 — 李晓党",
    description:
      "李晓党发布于 Medium 的深度学习、计算生物学与系统工程随笔及技术文章。",
  },
  title: "随笔与文章",
  subtitle:
    "关于深度学习、计算生物学与系统工程的随笔及技术笔记，所有文章均发布于 Medium。",
  mediumProfileUrl: "https://owenmurphy2022.medium.com/",
  mediumFeedUrl: "https://owenmurphy2022.medium.com/feed",
  followButtonLabel: "在 Medium 查看全部 ↗",
  latestBadge: "最新",
  minReadSuffix: "分钟阅读",
  readOnMediumLabel: "在 Medium 阅读 →",
  emptyFilterNote: "该分类下暂无文章。",
  emptyFeedNote: "构建时暂未获取到最新文章列表，请直接前往 Medium 主页浏览。",
  rssFooterPrefix: "想要持续关注？欢迎 ",
  rssFooterFollowLabel: "在 Medium 关注我",
  rssFooterMiddle: " 或将 ",
  rssFooterFeedLabel: "RSS 订阅源",
  rssFooterSuffix: " 添加到你的阅读器。",
  filters: [
    { id: "all", label: "全部" },
    { id: "research", label: "科研" },
    { id: "engineering", label: "工程" },
    { id: "learning", label: "学习笔记" },
  ],
};
