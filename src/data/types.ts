import type { KeyValueRow } from "@components/ui/KeyValueTable.astro";

export interface Link {
  label: string;
  href: string;
  todo?: boolean;
}

export interface FooterLink {
  label: string;
  href?: string;
  qrSrc?: string;
  qrAlt?: string;
}

export interface ResearchPillar {
  title: string;
  description: string;
}

export interface NewsItem {
  date: string;
  text: string;
}

export interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    portraitSrc: string;
    portraitAlt: string;
    portraitPlaceholder: string;
    affiliation: string;
    bioHtml: string;
  };
  researchOverview: {
    heading: string;
    intro: string;
    pillars: readonly ResearchPillar[];
    moreLabel: string;
    moreHref: string;
  };
  newsHeading: string;
  newsItems: readonly NewsItem[];
}

export interface AboutContent {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  subtitle: string;
  bioParagraphs: readonly string[];
  whyThisFieldHeading: string;
  whyThisField: string;
  backgroundHeading: string;
  background: string;
  outsideLabHeading: string;
  outsideLabItems: readonly {
    text: string;
    linkLabel?: string;
    linkHref?: string;
    suffix?: string;
  }[];
  quickFactsHeading: string;
  quickFacts: readonly KeyValueRow[];
}
