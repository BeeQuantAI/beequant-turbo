"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { GoMoon, GoSun } from "react-icons/go";
import { create } from "zustand";

export type Theme = "dark" | "light" | "system";

type State = {
  theme: Theme;
};

type Action = {
  setTheme: (theme: Theme) => void;
};

export const useThemeSetting = create<State & Action>((set) => ({
  theme: null as any,
  setTheme: (theme: Theme) => set({ theme }),
}));

function update() {
  document.documentElement.classList.add("changing-theme");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#0B1120");
  } else {
    document.documentElement.classList.remove("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#f8fafc");
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove("changing-theme");
  });
}

export function useTheme() {
  const { theme, setTheme } = useThemeSetting();
  const initial = useRef(true);

  useLayoutEffect(() => {
    const theme = localStorage.theme;
    if (theme === "light" || theme === "dark") {
      setTheme(theme);
    } else {
      setTheme("system");
    }
  }, [setTheme]);

  useLayoutEffect(() => {
    if (theme === "system") {
      localStorage.removeItem("theme");
    } else if (theme === "light" || theme === "dark") {
      localStorage.theme = theme;
    }
    if (initial.current) {
      initial.current = false;
    } else {
      update();
    }
  }, [theme]);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener("change", update);
    } else {
      mediaQuery.addListener(update);
    }

    function onStorage() {
      update();
      let theme = localStorage.theme;
      if (theme === "light" || theme === "dark") {
        setTheme(theme);
      } else {
        setTheme("system");
      }
    }
    window.addEventListener("storage", onStorage);

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener("change", update);
      } else {
        mediaQuery.removeListener(update);
      }

      window.removeEventListener("storage", onStorage);
    };
  }, [setTheme]);

  function themeSwitcher({ e }: { e: React.ChangeEvent<HTMLSelectElement> }) {
    const selectedTheme = e.target.value as Theme;
    setTheme(selectedTheme);
  }

  return { theme, setTheme, themeSwitcher };
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="hover:border-accent-600 hover:text-accent-600 border-accent-600 text-accent-600 dark:border-primary-100 dark:text-primary-100 dark:hover:border-primary-100 dark:hover:text-primary-100 rounded-md border-2 p-1 transition-colors duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <GoMoon className="h-6 w-6" />
      ) : (
        <GoSun className="h-6 w-6" />
      )}
    </button>
  );
}
