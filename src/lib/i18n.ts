import { i18n, type Lang } from "@/content/i18n";

export const languages = ["en", "nl"] as const;
export type Language = Lang;

export function isValidLanguage(lang: string): lang is Language {
  return (languages as readonly string[]).includes(lang);
}

export function getDictionary(lang: Language) {
  return i18n[lang];
}

export function getLocalized<T extends Record<Language, string>>(
  field: T,
  lang: Language,
) {
  return field[lang];
}
