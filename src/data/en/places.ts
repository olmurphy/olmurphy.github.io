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
      isoNumeric: "124",
      name: "Canada",
      statusLabel: "Visited · Travel",
      period: "Jul 2025",
      summary:
        "Traveled to Toronto in July 2025 to visit a friend and explore the city.",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson",
      subdivisions: [
        {
          name: "Ontario",
          displayName: "Ontario",
          visits: [
            {
              start: "Jul 12, 2025",
              end: "Jul 20, 2025",
              kind: "trip",
              role: "Travel",
              cities: ["Toronto"],
              note: "Visited a friend in Toronto and explored the city.",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "044",
      name: "The Bahamas",
      statusLabel: "Visited · Travel",
      period: "Dec 2024",
      summary: "Spent the Christmas holidays in The Bahamas in December 2024.",
      subdivisions: [
        {
          name: "New Providence",
          displayName: "New Providence (Nassau)",
          visits: [
            {
              start: "Dec 22, 2024",
              end: "Dec 28, 2024",
              kind: "trip",
              role: "Holiday Travel",
              cities: ["Nassau"],
              note: "Christmas holiday trip to The Bahamas.",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "826",
      name: "United Kingdom",
      statusLabel: "Visited · Travel",
      period: "Feb 2020",
      summary:
        "Visited London and Guildford in February 2020 to see my brother perform in Oklahoma! at the Guildford School of Acting.",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/martinjc/UK-GeoJSON/master/json/administrative/eng/lad.json",
      subdivisions: [
        {
          name: "Guildford",
          displayName: "Guildford (Surrey)",
          visits: [
            {
              start: "Feb 19, 2020",
              end: "Feb 23, 2020",
              kind: "trip",
              role: "Family & Travel",
              cities: ["Guildford"],
              note: "Visited Guildford School of Acting (University of Surrey) to watch my brother perform in the musical Oklahoma!.",
            },
          ],
        },
        {
          name: "City of London",
          displayName: "London",
          visits: [
            {
              start: "Feb 19, 2020",
              end: "Feb 23, 2020",
              kind: "trip",
              role: "Travel",
              cities: ["London"],
              note: "Explored London during a trip to the UK.",
            },
          ],
        },
      ],
    },
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
          name: "广东省",
          displayName: "Guangdong",
          visits: [
            {
              start: "Nov 22, 2026",
              end: "Nov 22, 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Shenzhen"],
              note: "Visited Shenzhen and spent time with Li Kun (Mac Li), his wife, and his family.",
            },
            {
              start: "Nov 19, 2026",
              end: "Nov 22, 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Guangzhou"],
              note: "Traveled to Guangzhou to visit Canton Tower and catch up with Li Kun (Mac Li), his wife, and his family.",
            },
          ],
        },
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
          name: "湖北省",
          displayName: "Hubei",
          visits: [
            {
              start: "Oct 4, 2026",
              end: "Oct 4, 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Yichang"],
              note: "Visited the Three Gorges Dam spanning the Yangtze River in Yichang.",
            },
            {
              start: "Oct 1, 2026",
              end: "Oct 5, 2026",
              kind: "trip",
              role: "Family & Travel",
              cities: ["Wuhan"],
              note: "Visited my partner's family and explored Wuhan during the National Day holiday.",
            },
          ],
        },
        {
          name: "江苏省",
          displayName: "Jiangsu",
          visits: [
            {
              start: "Nov 15, 2025",
              end: "Nov 16, 2025",
              kind: "trip",
              role: "Travel",
              cities: ["Suzhou"],
              note: "Weekend trip to Suzhou.",
            },
          ],
        },

        {
          name: "香港特别行政区",
          displayName: "Hong Kong",
          visits: [
            {
              start: "Feb 19, 2026",
              end: "Feb 22, 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Hong Kong"],
              note: "Traveled to Hong Kong.",
            },
          ],
        },
        {
          name: "澳门特别行政区",
          displayName: "Macau",
          visits: [
            {
              start: "Feb 22, 2026",
              end: "Feb 22, 2026",
              kind: "trip",
              role: "Travel",
              cities: ["Macau"],
              note: "Day trip to Macau.",
            },
          ],
        },
        {
          name: "浙江省",
          displayName: "Zhejiang",
          visits: [
            {
              start: "Mar 14, 2026",
              end: "Mar 14, 2026",
              kind: "trip",
              role: "Sourcing & Trade",
              cities: ["Yiwu"],
              note: "Visited Yiwu International Trade City (District 2) for cross-border product sourcing and supplier research.",
            },
          ],
        },

        {
          name: "山西省",
          displayName: "Shanxi",
          visits: [
            {
              start: "Sep 1, 2024",
              end: "Sep 8, 2024",
              kind: "trip",
              role: "Travel",
              cities: ["Taiyuan"],
              note: "Traveled to Taiyuan with a friend and visited her family.",
            },
          ],
        },
        {
          name: "北京市",
          displayName: "Beijing",
          visits: [
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
      ],
    },
  ],
};
