import { mediaUrl } from "@config/storage";

export type LifeCategory = "places" | "active" | "making" | "everyday";

export interface LifeCategoryMeta {
  id: LifeCategory;
  label: string;
}

export interface CaptionPart {
  text: string;
  href?: string;
}

export interface LifePhoto {
  src: string;
  alt: string;
  category: LifeCategory;
  caption: string;
  captionParts?: readonly CaptionPart[];
  meta: string;
  todo?: boolean;
}

export const LIFE_CATEGORIES: readonly LifeCategoryMeta[] = [
  { id: "places", label: "Places" },
  { id: "active", label: "Active" },
  { id: "making", label: "Making" },
  { id: "everyday", label: "Everyday" },
];

// ...keep imports and interfaces unchanged...

export interface LifeContent {
  title: string;
  subtitle: string;
  intro: string;
  photos: readonly LifePhoto[];
}

export const LIFE_CONTENT: LifeContent = {
  title: "Life",
  subtitle:
    "Photos from outside the lab: places I've been, how I stay active, what I build, and the people around me.",
  intro:
    "Outside of work and coursework, I spend most weekends running with Move Crew along the riverfront in Shanghai, riding my road bike, or tinkering with hardware and 3D-printed builds. These snapshots are a small record of the cities, training routines, and friends along the way.",
  photos: [
    {
      src: mediaUrl("life/everyday/li_kun_family_guangzhou_2026.webp"),
      alt: "Spending time with Li Kun and his family in Guangzhou",
      category: "everyday",
      caption: "Visiting Li Kun and his family in Guangzhou",
      captionParts: [
        { text: "Visiting " },
        {
          text: "Li Kun",
          href: "https://www.linkedin.com/in/mac-li-16789b175/",
        },
        { text: " and his family in Guangzhou" },
      ],
      meta: "Guangzhou · 2026",
      todo: false,
    },
    {
      src: mediaUrl("life/places/three-gorges-dam-october-2026.webp"),
      alt: "View of the Three Gorges Dam spanning the Yangtze River in Hubei, China",
      category: "places",
      caption:
        "Three Gorges Dam — the world's largest power station at 22,500 MW across 32 main turbines",
      meta: "Yichang, Hubei · Oct 2026",
      todo: false,
    },
    {
      src: mediaUrl("life/active/running-move-crew-june-2026.webp"),
      alt: "Group photo after a Sunday morning run with Move Crew run club in Shanghai",
      category: "active",
      caption: "Sunday run with Move Crew",
      meta: "Shanghai · June 2026",
      todo: false,
    },
    {
      src: mediaUrl("life/places/shanghai-bund-daniel-iris.webp"),
      alt: "Evening skyline view along the Bund in Shanghai with Daniel Kaijzer and Iris",
      category: "places",
      caption: "Evening along the Bund with Daniel Kaijzer and Iris",
      captionParts: [
        { text: "Evening along the Bund with " },
        {
          text: "Daniel Kaijzer",
          href: "https://www.linkedin.com/in/danielkaijzer/",
        },
        { text: " and Iris" },
      ],
      meta: "Shanghai · March 2026",
      todo: false,
    },
    {
      src: mediaUrl("life/places/great-wall-of-china-aug-2025.webp"),
      alt: "View along the Great Wall of China winding over green mountain ridges near Beijing",
      category: "places",
      caption: "Hiking the Great Wall during language immersion",
      meta: "Beijing · Aug 2024",
      todo: false,
    },
    {
      src: mediaUrl("life/places/temple-of-heaven-2025.webp"),
      alt: "Hall of Prayer for Good Harvests at the Temple of Heaven in Beijing",
      category: "places",
      caption: "Visiting the Temple of Heaven during language immersion",
      meta: "Beijing · Aug 2024",
      todo: false,
    },
    {
      src: mediaUrl("life/everyday/friends-nyc-hendry-2024.webp"),
      alt: "Celebrating Hendry's birthday in New York City",
      category: "everyday",
      caption: "Birthday celebration for Hendry in NYC",
      captionParts: [
        { text: "Birthday celebration for " },
        {
          text: "Hendry",
          href: "https://www.linkedin.com/in/hendrychendrawan/",
        },
        { text: " in NYC" },
      ],
      meta: "New York City · 2024",
      todo: false,
    },
  ] satisfies readonly LifePhoto[],
} as const;
