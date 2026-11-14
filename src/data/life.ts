import { mediaUrl } from "@config/storage";

export type LifeCategory = "places" | "active" | "making" | "everyday";

export interface LifeCategoryMeta {
  id: LifeCategory;
  label: string;
}

export interface LifePhoto {
  src: string;
  alt: string;
  category: LifeCategory;
  caption: string;
  meta: string;
  todo?: boolean;
}

export const LIFE_CATEGORIES: readonly LifeCategoryMeta[] = [
  { id: "places", label: "Places" },
  { id: "active", label: "Active" },
  { id: "making", label: "Making" },
  { id: "everyday", label: "Everyday" },
];

export const LIFE_CONTENT = {
  title: "Life",
  subtitle:
    "Photos from outside the lab: places I've been, how I stay active, what I build, and the people around me.",
  introTodo:
    "Write 2–3 sentences in your own voice about life outside research: what you do on a normal weekend, and what these photos say about you.",
  photos: [
    {
      src: mediaUrl("life/active/running-move-crew-june-2026.png"),
      alt: "Running with Move Crew in Shanghai",
      category: "active",
      caption: "Sunday run with Move Crew",
      meta: "Shanghai · June 2026",
      todo: true,
    },
    {
      src: mediaUrl("life/places/shanghai-bund-daniel-iris.png"),
      alt: "The Bund in Shanghai with Daniel and Iris",
      category: "places",
      caption: "Evening along the Bund with Daniel and Iris",
      meta: "Shanghai · 2025",
      todo: true,
    },
    {
      src: mediaUrl("life/places/temple-of-heaven-2025.png"),
      alt: "Temple of Heaven in Beijing",
      category: "places",
      caption: "Visiting the Temple of Heaven during language immersion",
      meta: "Beijing · Aug 2025",
      todo: true,
    },
    {
      src: mediaUrl("life/everyday/friends-nyc-hendry-2024.png"),
      alt: "With Hendry in New York City",
      category: "everyday",
      caption: "Catching up with Hendry in New York",
      meta: "New York City · 2024",
      todo: true,
    },
  ] satisfies readonly LifePhoto[],
} as const;
