"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useThemeStore } from "./theme-store";
import { Icon } from "../common";

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    themeChange(theme === "dark");
  }, [theme]);

  const handleThemeChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="swap">
      <input type="checkbox" onClick={handleThemeChange} />
      <Icon
        icon="dayTime"
        className={`w-6 h-6 ${theme === "dark" ? "swap-on" : "swap-off"}`}
      />
      <Icon
        icon="nightTime"
        className={`w-6 h-6 ${theme === "dark" ? "swap-off" : "swap-on"}`}
      />
    </label>
  );
}
