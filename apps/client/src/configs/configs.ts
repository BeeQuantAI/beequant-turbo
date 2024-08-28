export const defaultLocale = "en" as const;
export const locales = ["en", "zh-cn"] as const;

export type Locales = (typeof locales)[number];
