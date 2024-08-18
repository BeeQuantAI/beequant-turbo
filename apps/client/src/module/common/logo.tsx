"use client";

import { useTheme } from "../system";

export function Logo() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark" ? "/image/logo_dark.png" : "/image/logo_light.png";

  return <img className="h-8" src={logoSrc} alt="Logo" />;
}
