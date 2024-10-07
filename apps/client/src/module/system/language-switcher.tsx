"use client";
import { getNextLocale } from "@src/actions";
import { locales, Locales } from "@src/configs/configs";
import { useRouter } from "@src/configs/navigation";
import { useEffect, useState } from "react";
import { AppSettingRoute } from "../dashboard";
import { create } from "zustand";

type State = {
  currentLocale: Locales;
};

type Action = {
  setLanguage: (locale: Locales) => void;
};

export const useLanguageSetting = create<State & Action>((set) => ({
  currentLocale: "en",
  setLanguage: (locale) => set({ currentLocale: locale }),
}));

export function useLanguage() {
  type HandlerProps = {
    path?: string;
    locale?: Locales;
  };

  const { currentLocale, setLanguage } = useLanguageSetting();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getNextLocale().then((locale) => {
      setLanguage(locale as Locales);
      setLoading(false);
    });
  }, [setLanguage]);

  function languageSwitcher({
    path = AppSettingRoute.AppSetting.Path,
    locale,
  }: HandlerProps) {
    router.replace(path, {
      locale,
    });
  }

  return {
    currentLocale,
    setLanguage,
    loading,
    languageSwitcher,
  };
}
