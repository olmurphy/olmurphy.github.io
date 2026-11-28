import type {
  CountryVisit,
  PlacesContent,
  SubdivisionVisit,
  VisitEntry,
} from "@data/en/places";

// 1. ISO 3166-1 Numeric -> Alpha-2 映射表（覆盖 world-atlas 全部国家/地区）
const ISO_NUMERIC_TO_ALPHA2: Record<string, string> = {
  "004": "AF",
  "008": "AL",
  "010": "AQ",
  "012": "DZ",
  "016": "AS",
  "020": "AD",
  "024": "AO",
  "028": "AG",
  "031": "AZ",
  "032": "AR",
  "036": "AU",
  "040": "AT",
  "044": "BS",
  "048": "BH",
  "050": "BD",
  "051": "AM",
  "052": "BB",
  "056": "BE",
  "060": "BM",
  "064": "BT",
  "068": "BO",
  "070": "BA",
  "072": "BW",
  "076": "BR",
  "084": "BZ",
  "090": "SB",
  "096": "BN",
  "100": "BG",
  "104": "MM",
  "108": "BI",
  "112": "BY",
  "116": "KH",
  "120": "CM",
  "124": "CA",
  "132": "CV",
  "140": "CF",
  "144": "LK",
  "148": "TD",
  "152": "CL",
  "156": "CN",
  "158": "TW",
  "170": "CO",
  "174": "KM",
  "178": "CG",
  "180": "CD",
  "188": "CR",
  "191": "HR",
  "192": "CU",
  "196": "CY",
  "203": "CZ",
  "204": "BJ",
  "208": "DK",
  "212": "DM",
  "214": "DO",
  "218": "EC",
  "222": "SV",
  "226": "GQ",
  "231": "ET",
  "232": "ER",
  "233": "EE",
  "238": "FK",
  "242": "FJ",
  "246": "FI",
  "250": "FR",
  "260": "TF",
  "262": "DJ",
  "266": "GA",
  "268": "GE",
  "270": "GM",
  "275": "PS",
  "276": "DE",
  "288": "GH",
  "300": "GR",
  "304": "GL",
  "308": "GD",
  "320": "GT",
  "324": "GN",
  "328": "GY",
  "332": "HT",
  "340": "HN",
  "344": "HK",
  "348": "HU",
  "352": "IS",
  "356": "IN",
  "360": "ID",
  "364": "IR",
  "368": "IQ",
  "372": "IE",
  "376": "IL",
  "380": "IT",
  "384": "CI",
  "388": "JM",
  "392": "JP",
  "398": "KZ",
  "400": "JO",
  "404": "KE",
  "408": "KP",
  "410": "KR",
  "414": "KW",
  "417": "KG",
  "418": "LA",
  "422": "LB",
  "426": "LS",
  "428": "LV",
  "430": "LR",
  "434": "LY",
  "438": "LI",
  "440": "LT",
  "442": "LU",
  "446": "MO",
  "450": "MG",
  "454": "MW",
  "458": "MY",
  "462": "MV",
  "466": "ML",
  "470": "MT",
  "478": "MR",
  "480": "MU",
  "484": "MX",
  "496": "MN",
  "498": "MD",
  "499": "ME",
  "504": "MA",
  "508": "MZ",
  "512": "OM",
  "516": "NA",
  "524": "NP",
  "528": "NL",
  "540": "NC",
  "548": "VU",
  "554": "NZ",
  "558": "NI",
  "562": "NE",
  "566": "NG",
  "578": "NO",
  "586": "PK",
  "591": "PA",
  "598": "PG",
  "600": "PY",
  "604": "PE",
  "608": "PH",
  "616": "PL",
  "620": "PT",
  "624": "GW",
  "626": "TL",
  "630": "PR",
  "634": "QA",
  "642": "RO",
  "643": "RU",
  "646": "RW",
  "682": "SA",
  "686": "SN",
  "688": "RS",
  "694": "SL",
  "702": "SG",
  "703": "SK",
  "704": "VN",
  "705": "SI",
  "706": "SO",
  "710": "ZA",
  "716": "ZW",
  "724": "ES",
  "728": "SS",
  "729": "SD",
  "732": "EH",
  "740": "SR",
  "748": "SZ",
  "752": "SE",
  "756": "CH",
  "760": "SY",
  "762": "TJ",
  "764": "TH",
  "768": "TG",
  "780": "TT",
  "784": "AE",
  "788": "TN",
  "792": "TR",
  "795": "TM",
  "800": "UG",
  "804": "UA",
  "807": "MK",
  "818": "EG",
  "826": "GB",
  "834": "TZ",
  "840": "US",
  "854": "BF",
  "858": "UY",
  "860": "UZ",
  "862": "VE",
  "887": "YE",
  "894": "ZM",
};

// 2. 根据当前语言获取国家本地化名称
export function getLocalizedCountryName(
  isoNumeric: string,
  fallbackEnglishName: string,
  lang: "en" | "zh",
): string {
  if (lang === "en") return fallbackEnglishName;

  const alpha2 = ISO_NUMERIC_TO_ALPHA2[normalizeIso(isoNumeric)];
  if (!alpha2) return fallbackEnglishName;

  try {
    const displayNames = new Intl.DisplayNames(["zh-Hans"], { type: "region" });
    return displayNames.of(alpha2) ?? fallbackEnglishName;
  } catch {
    return fallbackEnglishName;
  }
}
export interface SubdivisionSummaryMeta {
  count: number;
  hasCurrent: boolean;
  spanText: string;
  cities: string[];
}

export interface PlacesMetrics {
  countries: number;
  subdivisions: number;
  visits: number;
  cities: number;
}

export interface WorldCountryOption {
  iso: string;
  name: string;
  rawName: string;
  visited: boolean;
  subCount: number;
  feature: GeoJSON.Feature;
}

export function normalizeIso(iso: string | number | null | undefined): string {
  if (iso == null) return "000";
  return String(iso).padStart(3, "0");
}

export function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatVisitRange(
  visit: VisitEntry,
  presentLabel: string,
): string {
  if (visit.isCurrent) {
    return `${visit.start} – ${presentLabel}`;
  }
  if (!visit.end || visit.start === visit.end) {
    return visit.start;
  }
  return `${visit.start} – ${visit.end}`;
}

export function getSubdivisionSummaryMeta(
  sub: SubdivisionVisit,
  presentLabel: string,
): SubdivisionSummaryMeta {
  const visits = sub.visits ?? [];
  const hasCurrent = visits.some((v) => Boolean(v.isCurrent));
  const citySet = new Set<string>();

  for (const v of visits) {
    for (const city of v.cities ?? []) {
      citySet.add(city);
    }
  }

  // Visits are ordered newest-first; oldest is last, newest is index 0
  let spanText = "";
  if (visits.length === 1) {
    spanText = formatVisitRange(visits[0], presentLabel);
  } else if (visits.length > 1) {
    const oldest = visits[visits.length - 1];
    const newest = visits[0];
    const endLabel = newest.isCurrent
      ? presentLabel
      : (newest.end ?? newest.start);
    spanText = `${oldest.start} – ${endLabel}`;
  }

  return {
    count: visits.length,
    hasCurrent,
    spanText,
    cities: Array.from(citySet),
  };
}

export function computePlacesMetrics(
  countries: readonly CountryVisit[],
): PlacesMetrics {
  let subdivisions = 0;
  let visits = 0;
  const citySet = new Set<string>();

  for (const country of countries) {
    subdivisions += country.subdivisions.length;
    for (const sub of country.subdivisions) {
      for (const visit of sub.visits ?? []) {
        visits += 1;
        for (const city of visit.cities ?? []) {
          citySet.add(city);
        }
      }
    }
  }

  return {
    countries: countries.length,
    subdivisions,
    visits,
    cities: citySet.size,
  };
}

export function buildWorldCountryIndex(
  worldGeo: GeoJSON.FeatureCollection,
  visitedByIso: Map<string, CountryVisit>,
  lang: "en" | "zh" = "en",
): WorldCountryOption[] {
  const seenIso = new Set<string>();
  const items: WorldCountryOption[] = [];

  for (const feat of worldGeo.features) {
    const iso = normalizeIso(feat.id);
    const rawName = String((feat.properties as any)?.name ?? "");
    if (!rawName || iso === "000" || seenIso.has(iso)) continue;
    seenIso.add(iso);

    const visitedObj = visitedByIso.get(iso);
    const localizedName = visitedObj
      ? visitedObj.name
      : getLocalizedCountryName(iso, rawName, lang);

    items.push({
      iso,
      name: localizedName,
      rawName, // 保留英文原名，方便中文界面下输入英文也能搜到，但不直接显示
      visited: Boolean(visitedObj),
      subCount: visitedObj ? visitedObj.subdivisions.length : 0,
      feature: feat,
    });
  }

  items.sort((a, b) => {
    if (a.visited !== b.visited) return a.visited ? -1 : 1;
    return a.name.localeCompare(b.name, lang === "zh" ? "zh-Hans-CN" : "en");
  });

  return items;
}

export function filterCountryOptions(
  options: readonly WorldCountryOption[],
  query: string,
): {
  visited: WorldCountryOption[];
  other: WorldCountryOption[];
} {
  const q = query.trim().toLowerCase();
  const filtered = q
    ? options.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.rawName.toLowerCase().includes(q),
      )
    : options;

  return {
    visited: filtered.filter((i) => i.visited),
    other: filtered.filter((i) => !i.visited),
  };
}

export function getSubdivisionDisplayName(sub: SubdivisionVisit): string {
  return sub.displayName ?? sub.name;
}

export function getVisitCountLabel(
  meta: SubdivisionSummaryMeta,
  content: PlacesContent,
): string {
  if (meta.hasCurrent) return content.currentResidenceLabel;
  if (meta.count > 1) {
    return `${meta.count} ${content.visitPlural}`;
  }
  return "";
}
