"use client";
import { useThemeStore } from "./theme-store";

export function ThemeProvider(props: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  return <div data-theme={theme}>{props.children}</div>;
}
