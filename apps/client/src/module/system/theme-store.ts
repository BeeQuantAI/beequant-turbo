import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const themeData =
  typeof window !== undefined ? localStorage.getItem("theme-store") : null;

export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      theme: themeData
        ? themeData.includes("dark")
          ? "dark"
          : "light"
        : "dark",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);
