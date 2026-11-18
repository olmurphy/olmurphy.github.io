// src/i18n/config.ts
export const LOCALES = ["en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  { htmlLang: string; hreflang: string; ogLocale: string; label: string }
> = {
  en: { htmlLang: "en", hreflang: "en", ogLocale: "en_US", label: "EN" },
  zh: {
    htmlLang: "zh-Hans",
    hreflang: "zh-Hans",
    ogLocale: "zh_CN",
    label: "中文",
  },
};

export function getLocaleStaticPaths() {
  return [
    { params: { lang: undefined }, props: { lang: "en" as Locale } },
    { params: { lang: "zh" }, props: { lang: "zh" as Locale } },
  ];
}
