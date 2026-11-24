import type {
  CountryVisit,
  PlacesContent,
  SubdivisionVisit,
  VisitEntry,
} from "@data/en/places";

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
): WorldCountryOption[] {
  const seenIso = new Set<string>();
  const options: WorldCountryOption[] = [];

  for (const feat of worldGeo.features) {
    const iso = normalizeIso(feat.id);
    const rawName = String((feat.properties as any)?.name ?? "").trim();
    if (!rawName || iso === "000" || seenIso.has(iso)) continue;
    seenIso.add(iso);

    const visitedObj = visitedByIso.get(iso);
    options.push({
      iso,
      name: visitedObj ? visitedObj.name : rawName,
      rawName,
      visited: Boolean(visitedObj),
      subCount: visitedObj ? visitedObj.subdivisions.length : 0,
      feature: feat,
    });
  }

  options.sort((a, b) => {
    if (a.visited !== b.visited) return a.visited ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return options;
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
