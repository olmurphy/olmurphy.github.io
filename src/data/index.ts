// src/data/index.ts
import type { Locale } from "../i18n/config";
import * as enAbout from "./en/about";
import * as zhAbout from "./zh/about";
// ...import remaining modules

const CONTENT = {
  en: { about: enAbout.ABOUT_CONTENT /*, ... */ },
  zh: { about: zhAbout.ABOUT_CONTENT /*, ... */ },
} as const;

export function getContent(lang: Locale) {
  return CONTENT[lang];
}
