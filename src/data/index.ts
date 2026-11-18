import type { Locale } from "@i18n/config";
import { CONTENT as en } from "./en";
import { CONTENT as zh } from "./zh";

const CONTENT = { en, zh };

export function getContent(lang: Locale) {
  return CONTENT[lang];
}
