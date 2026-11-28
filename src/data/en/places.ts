export type VisitKind = "stay" | "trip";

export interface VisitEntry {
  start: string;
  end?: string;
  isCurrent?: boolean;
  kind: VisitKind;
  role?: string;
  cities?: readonly string[];
  note?: string;
}

export interface SubdivisionVisit {
  name: string;
  displayName?: string;
  visits: readonly VisitEntry[];
}

export interface CountryVisit {
  isoNumeric: string;
  name: string;
  statusLabel?: string;
  period?: string;
  summary: string;
  subdivisionsUrl?: string;
  subdivisions: readonly SubdivisionVisit[];
}

export interface PlacesStatsLabels {
  countries: string;
  subdivisions: string;
  visits: string;
  cities: string;
}

export interface PlacesContent {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  clearSearchAria: string;
  visitedGroupLabel: string;
  allCountriesGroupLabel: string;
  noSearchResults: string;
  worldLabel: string;
  resetLabel: string;
  visitedBadge: string;
  unvisitedBadge: string;
  unvisitedNote: string;
  allSubdivisionsLabel: string;
  subdivisionsHeading: string;
  presentLabel: string;
  currentResidenceLabel: string;
  visitSingular: string;
  visitPlural: string;
  instructions: string;
  directoryHeading: string;
  directorySub: string;
  viewOnMap: string;
  stats: PlacesStatsLabels;
  countries: readonly CountryVisit[];
}

export const PLACES_CONTENT: PlacesContent = {
  title: "Places",
  subtitle:
    "Countries, states, and provinces I have lived in, studied in, or visited.",
  searchPlaceholder: "Search 240+ countries or regions...",
  clearSearchAria: "Clear search",
  visitedGroupLabel: "Visited Countries",
  allCountriesGroupLabel: "All Countries & Territories",
  noSearchResults: "No matching countries found.",
  worldLabel: "World",
  resetLabel: "Reset view",
  visitedBadge: "Visited",
  unvisitedBadge: "Not yet visited",
  unvisitedNote:
    "Haven't visited yet — explore another country from the search bar or click a highlighted region on the map.",
  allSubdivisionsLabel: "All regions",
  subdivisionsHeading: "States & Provinces",
  presentLabel: "Present",
  currentResidenceLabel: "Current Base",
  visitSingular: "visit",
  visitPlural: "visits",
  instructions:
    "Search any country above, scroll or pinch to zoom, or click a highlighted country to inspect states and provinces.",
  directoryHeading: "All Visited Countries & Regions",
  directorySub:
    "Click any country or region to inspect its visit timeline on the map",
  viewOnMap: "Explore on map →",
  stats: {
    countries: "Countries",
    subdivisions: "States & Provinces",
    visits: "Logged Visits & Stays",
    cities: "Cities",
  },
  countries: [
    {
      isoNumeric: "484",
      name: "Mexico",
      statusLabel: "Visited · Travel",
      period: "Mar 2019, Mar 2020",
      summary:
        "Visited Tijuana across the border for spring break trips in 2019 and 2020.",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json",
      subdivisions: [
        {
          name: "Baja California",
          displayName: "Baja California",
          visits: [
            {
              start: "Mar 2020",
              end: "Mar 2020",
              kind: "trip",
              role: "Spring Break",
              cities: ["Tijuana"],
              note: "Second spring break trip to Tijuana right before the COVID-19 pandemic lockdowns began.",
            },
            {
              start: "Mar 2019",
              end: "Mar 2019",
              kind: "trip",
              role: "Spring Break",
              cities: ["Tijuana"],
              note: "Spring break trip to Tijuana during undergraduate studies at Baylor.",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "840",
      name: "United States",
      statusLabel: "Home Country · Lived & Studied",
      period: "1999 – 2025",
      summary:
        "Grew up in the U.S., earned my B.S. in Mathematics and Computer Science at Baylor University, and started my software engineering career in New York.",
      subdivisions: [
        {
          name: "Texas",
          visits: [
            {
              start: "Dec 2026",
              end: "Dec 2026",
              kind: "trip",
              role: "Visit",
              cities: ["Dallas"],
              note: "Holiday trip back to Texas flying into Dallas Love Field.",
            },
            {
              start: "Aug 2018",
              end: "May 2022",
              kind: "stay",
              role: "Education",
              cities: ["Waco"],
              note: "B.S. in Mathematics & Computer Science at Baylor University (3.9 GPA), undergraduate TA for Foundations of Mathematics, and Dean's Honor List.",
            },
          ],
        },
        {
          name: "New York",
          visits: [
            {
              start: "Jun 2022",
              end: "Sep 2025",
              kind: "stay",
              role: "Career",
              cities: ["New York City"],
              note: "Software Engineer at IBM Consulting, developing high-throughput enterprise backend systems and distributed services.",
            },
          ],
        },
        {
          name: "New Jersey",
          visits: [
            {
              start: "2024",
              end: "Sep 2025",
              kind: "stay",
              role: "Residence",
              cities: ["Union City"],
              note: "Lived in Union City across the Hudson River from Manhattan prior to relocating to Shanghai.",
            },
          ],
        },
        {
          name: "Georgia",
          visits: [
            {
              start: "Aug 2025",
              isCurrent: true,
              kind: "stay",
              role: "Graduate Studies",
              cities: ["Atlanta"],
              note: "Georgia Tech M.S. in Computer Science (Machine Learning specialization).",
            },
          ],
        },
        {
          name: "California",
          visits: [
            {
              start: "Dec 2026",
              end: "Dec 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Los Angeles"],
              note: "Visited Los Angeles and transited through LAX.",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "156",
      name: "China",
      statusLabel: "Current Base · Lived & Studied",
      period: "Aug 2024, Sep 2025 – Present",
      summary:
        "Living and working in Shanghai as an AI & Software Engineer after intensive Mandarin studies in Beijing and Shanghai.",
      subdivisionsUrl:
        "https://cdn.jsdelivr.net/gh/longwosion/geojson-map-china@master/china.json",
      subdivisions: [
        {
          name: "上海市",
          displayName: "Shanghai",
          visits: [
            {
              start: "Sep 2025",
              isCurrent: true,
              kind: "stay",
              role: "Home Base & Work",
              cities: ["Shanghai"],
              note: "Home base; two semesters of Chinese studies at Shanghai Jiao Tong University (Sep 2025 – Jun 2026), AI & Software Engineer at Global Business AI (GBizAI), and Move Crew run club.",
            },
          ],
        },
        {
          name: "北京市",
          displayName: "Beijing",
          visits: [
            {
              start: "Aug 2025",
              end: "Aug 2025",
              kind: "trip",
              role: "Travel",
              cities: ["Beijing"],
              note: "Returned to Beijing to hike the Great Wall and tour the Temple of Heaven.",
            },
            {
              start: "Aug 2024",
              end: "Aug 2024",
              kind: "stay",
              role: "Language Immersion",
              cities: ["Beijing"],
              note: "Completed a one-month intensive Chinese language program at Beijing Language and Culture University (BLCU).",
            },
          ],
        },
        {
          name: "湖北省",
          displayName: "Hubei Province",
          visits: [
            {
              start: "Oct 2026",
              end: "Oct 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Yichang"],
              note: "Visited the Three Gorges Dam spanning the Yangtze River in Yichang.",
            },
          ],
        },
      ],
    },
  ],
};
