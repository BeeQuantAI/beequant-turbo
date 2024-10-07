"use client";
import { useTheme } from "../system";

export function Logo() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark" ? "/img/logo/logo_dark.png" : "/img/logo/logo_light.png";

  return <img className="h-8" src={logoSrc} alt="Logo" />;
}
