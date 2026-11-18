import type { Locale } from "@i18n/config";
import { HOME_CONTENT as enHome } from "./en/home";
import { HOME_CONTENT as zhHome } from "./zh/home";
import { ABOUT_CONTENT as enAbout } from "./en/about";
import { ABOUT_CONTENT as zhAbout } from "./zh/about";

const CONTENT = {
  en: {
    home: enHome,
    about: enAbout,
  },
  zh: {
    home: zhHome,
    about: zhAbout,
  },
} as const;

export function getContent(lang: Locale) {
  return CONTENT[lang];
}
