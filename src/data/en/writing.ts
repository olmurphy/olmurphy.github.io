import type { WritingTopic } from "@lib/medium";

export interface WritingFilterOption {
  id: "all" | WritingTopic;
  label: string;
}

export interface WritingContent {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  subtitle: string;
  mediumProfileUrl: string;
  mediumFeedUrl: string;
  followButtonLabel: string;
  latestBadge: string;
  minReadSuffix: string;
  readOnMediumLabel: string;
  emptyFilterNote: string;
  emptyFeedNote: string;
  rssFooterPrefix: string;
  rssFooterFollowLabel: string;
  rssFooterMiddle: string;
  rssFooterFeedLabel: string;
  rssFooterSuffix: string;
  filters: readonly WritingFilterOption[];
}

export const WRITING_CONTENT: WritingContent = {
  meta: {
    title: "Writing — Owen Li Murphy",
    description:
      "Essays and technical writing by Owen Li Murphy on deep learning, computational biology, and engineering, published on Medium.",
  },
  title: "Writing",
  subtitle:
    "Essays and technical write-ups on deep learning, biology, and engineering. Every post lives on Medium.",
  mediumProfileUrl: "https://owenmurphy2022.medium.com/",
  mediumFeedUrl: "https://owenmurphy2022.medium.com/feed",
  followButtonLabel: "All posts on Medium ↗",
  latestBadge: "Latest",
  minReadSuffix: "min read",
  readOnMediumLabel: "Read on Medium →",
  emptyFilterNote: "No posts in this topic yet.",
  emptyFeedNote:
    "Recent posts could not be loaded at build time. View all essays directly on Medium.",
  rssFooterPrefix: "Prefer to follow along? ",
  rssFooterFollowLabel: "Follow me on Medium",
  rssFooterMiddle: " or add the ",
  rssFooterFeedLabel: "RSS feed",
  rssFooterSuffix: " to your reader.",
  filters: [
    { id: "all", label: "All" },
    { id: "research", label: "Research" },
    { id: "engineering", label: "Engineering" },
    { id: "learning", label: "Learning" },
  ],
} as const;
