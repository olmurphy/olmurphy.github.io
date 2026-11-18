// src/i18n/utils.ts
import { DEFAULT_LOCALE, type Locale } from "./config";

export function getLocaleFromPath(pathname: string): Locale {
  return /^\/zh(?:\/|$)/.test(pathname) ? "zh" : DEFAULT_LOCALE;
}

/** Prefix non-default locale paths cleanly: localePath('zh', '/research') -> '/zh/research' */
export function localePath(lang: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LOCALE) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

/** Swap current pathname to target locale while preserving route */
export function switchLocalePath(
  currentPathname: string,
  targetLang: Locale,
): string {
  const stripped = currentPathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  return localePath(targetLang, stripped);
}
