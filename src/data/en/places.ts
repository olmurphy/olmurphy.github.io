export interface SubRegionVisit {
  /** Must match the state/province name in the subdivision map data */
  name: string;
  cities?: readonly string[];
  note?: string;
}

export interface CountryVisit {
  /** ISO 3166-1 numeric code as a 3-digit string (used by world-atlas) */
  isoNumeric: string;
  name: string;
  summary: string;
  /** Optional GeoJSON URL for state/province drill-down (US uses bundled us-atlas) */
  subdivisionsUrl?: string;
  subdivisions: readonly SubRegionVisit[];
}

export interface PlacesContent {
  title: string;
  subtitle: string;
  instructions: string;
  resetLabel: string;
  worldLabel: string;
  visitedBadge: string;
  subdivisionsHeading: string;
  countries: readonly CountryVisit[];
}

export const PLACES_CONTENT: PlacesContent = {
  title: "Places",
  subtitle:
    "Countries, states, and provinces I have lived in, studied in, or visited.",
  instructions:
    "Scroll or pinch to zoom, drag to pan, and click a highlighted country to inspect states and provinces.",
  resetLabel: "Reset view",
  worldLabel: "World",
  visitedBadge: "Visited",
  subdivisionsHeading: "States & Provinces",
  countries: [
    {
      isoNumeric: "840",
      name: "United States",
      summary:
        "Grew up in the U.S., studied at Baylor University, and started my software engineering career in New York.",
      subdivisions: [
        {
          name: "Texas",
          cities: ["Waco", "Dallas"],
          note: "B.S. in Mathematics & Computer Science at Baylor University (2018–2022).",
        },
        {
          name: "New York",
          cities: ["New York City"],
          note: "Software Engineer at IBM Consulting (2022–2025).",
        },
        {
          name: "New Jersey",
          note: "Lived in NJ prior to relocating to Shanghai.",
        },
        {
          name: "Georgia",
          cities: ["Atlanta"],
          note: "Georgia Tech M.S. in Computer Science.",
        },
        {
          name: "California",
          cities: ["Los Angeles"],
        },
      ],
    },
    {
      isoNumeric: "156",
      name: "China",
      summary:
        "Living and working in Shanghai as an AI & Software Engineer after intensive Mandarin studies.",
      subdivisionsUrl:
        "https://cdn.jsdelivr.net/gh/longwosion/geojson-map-china@master/china.json",
      subdivisions: [
        {
          name: "上海市",
          cities: ["Shanghai"],
          note: "Home base; Chinese studies at Shanghai Jiao Tong University, AI Engineer at GBizAI, and Move Crew run club.",
        },
        {
          name: "北京市",
          cities: ["Beijing"],
          note: "Intensive Chinese language program at Beijing Language and Culture University; visited the Great Wall and Temple of Heaven.",
        },
        {
          name: "湖北省",
          cities: ["Yichang"],
          note: "Visited the Three Gorges Dam (Oct 2026).",
        },
      ],
    },
  ],
} as const;
