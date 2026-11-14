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

export const LIFE_CONTENT = {
  title: "Life",
  subtitle:
    "Photos from outside the lab: places I've been, how I stay active, what I build, and the people around me.",
  intro:
    "Outside of work and coursework, I spend most weekends running with Move Crew along the riverfront in Shanghai, riding my road bike, or tinkering with hardware and 3D-printed builds. These snapshots are a small record of the cities, training routines, and friends along the way.",
  photos: [
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
      meta: "Shanghai · 2025",
      todo: false,
    },
    {
      src: mediaUrl("life/places/temple-of-heaven-2025.webp"),
      alt: "Hall of Prayer for Good Harvests at the Temple of Heaven in Beijing",
      category: "places",
      caption: "Visiting the Temple of Heaven during language immersion",
      meta: "Beijing · Aug 2025",
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
