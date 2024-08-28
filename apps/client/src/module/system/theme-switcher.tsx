"use client";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "../common";

export type Theme = (typeof supportedThemes)[number];
const supportedThemes = ["light", "dark", "system"] as const;

export function useTheme() {
  const { theme, setTheme } = useNextTheme();

  return { theme, setTheme } as {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  };
}

/**
 * https://github.com/pacocoursey/next-themes/tree/main/next-themes#avoid-hydration-mismatch
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className="hover:border-accent-600 hover:text-accent-600 border-accent-600 text-accent-600 dark:border-primary-100 dark:text-primary-100 dark:hover:border-primary-100 dark:hover:text-primary-100 rounded-md border-2 p-1 transition-colors duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted ? (
        <Icon icon={theme} className="h-6 w-6" />
      ) : (
        <Icon icon="loading" className="h-6 w-6 animate-spin" />
      )}
    </button>
  );
}
