"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { GoMoon, GoScreenNormal, GoSun } from "react-icons/go";
import { create } from "zustand";

type Theme = "dark" | "light" | "system";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: GoSun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: GoMoon,
  },
  {
    value: "system",
    label: "System",
    icon: GoScreenNormal,
  },
];

const useThemeSetting = create<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>((set) => ({
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

  return { theme, setTheme };
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="hover:border-primary-500 hover:text-primary-500 border-primary-400 text-primary-400 rounded-md border-2 p-1 transition-colors dark:border-slate-300 dark:text-slate-300 dark:hover:border-slate-100 dark:hover:text-slate-100"
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

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const { label } = themes.find((x) => x.value === theme) || themes[0];

  return (
    <div className="flex items-center justify-between">
      <div className="dark:highlight-white/5 relative flex items-center rounded-lg p-2 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10 dark:bg-slate-600 dark:text-slate-200 dark:ring-0">
        <GoSun className="mr-2 h-6 w-6 dark:hidden" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="mr-2 hidden h-6 w-6 dark:block"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          />
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            className="fill-slate-400"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            className="fill-slate-400"
          />
        </svg>
        {label}
        <svg className="ml-2 h-6 w-6 text-slate-400" fill="none">
          <path
            d="m15 11-3 3-3-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="absolute inset-0 h-full w-full appearance-none opacity-0"
        >
          {themes.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
