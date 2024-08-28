"use client";
import { locales, Locales } from "@src/configs/configs";
import { useTranslations } from "next-intl";
import { Select } from "../common/select";
import { Theme, useLanguage, useTheme } from "../system";

export function AppSettingPage() {
  const t = useTranslations();
  const { currentLocale, loading, languageSwitcher } = useLanguage();
  const { theme, setTheme } = useTheme();

  const languageLabels = ["English", "中文"] as const;
  const languageOptions = locales.map((locale, index) => {
    return {
      label: languageLabels[index],
      value: locale,
    };
  });

  const themes = ["light", "dark", "system"] as const;
  const themeLabels = [
    t("Shared.lightTheme"),
    t("Shared.darkTheme"),
    t("Shared.system"),
  ] as const;
  const themeOptions = themes.map((theme, index) => {
    return {
      label: themeLabels[index],
      value: theme,
    };
  });

  return (
    <div className="dark:bg-primary-900 bg-primary-50 shadow-settingPage dark:shadow-settingPage flex flex-col rounded-lg p-5">
      <div className="space-y-1">
        <h1 className="text-base font-bold">{t("AppSettingPage.title")}</h1>
        <h5 className="text-primary-700 dark:text-primary-100 text-sm opacity-70">
          {t("AppSettingPage.subtitle")}
        </h5>
      </div>
      {!loading && (
        <form className="my-[30px] flex flex-col gap-y-5">
          <Select
            label={t("AppSettingPage.language")}
            options={languageOptions}
            onChange={(e) => {
              const locale = e.target.value as Locales;
              languageSwitcher({ locale });
            }}
            value={currentLocale}
          />
          <Select
            label={t("Shared.theme")}
            value={theme}
            options={themeOptions}
            onChange={(e) => {
              setTheme(e.target.value as Theme);
            }}
          />
        </form>
      )}
    </div>
  );
}
