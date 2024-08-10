"use client";
import { useTheme } from "@src/module/system";
import { SidebarMenuItem } from "./sidebar-menu";

export function useSidebar() {
  const bots = useBotsMenu();
  const cryptoeconomy = useCryptoEconomyMenu();
  const theme = useThemeMenu();

  const menu: SidebarMenuItem[] = [
    {
      type: "button",
      icon: "home",
      label: "Dashboard",
      onClick: () => console.log("Navigate to Dashboard"),
    },
    { type: "divider" },
    bots,
    cryptoeconomy,
    { type: "divider" },
    theme,
    {
      type: "accordion",
      icon: "account",
      label: "Account",
      options: [
        {
          label: "Profile",
          onClick: () => console.log("Navigate to Profile"),
        },
        {
          label: "Account",
          onClick: () => console.log("Navigate to Account"),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      type: "button",
      icon: "exit",
      label: "Logout",
      onClick: () => console.log("Logout"),
    },
  ];

  return { menu };
}

function useBotsMenu(): SidebarMenuItem {
  return {
    type: "accordion",
    icon: "bots",
    label: "Bots",
    options: [
      {
        label: "Profile",
        onClick: () => console.log("Navigate to Profile"),
      },
      {
        label: "Account",
        onClick: () => console.log("Navigate to Account"),
      },
    ],
  };
}

function useCryptoEconomyMenu(): SidebarMenuItem {
  return {
    type: "accordion",
    icon: "crypto",
    label: "Cryptoeconomy",
    options: [
      {
        label: "Prices",
        onClick: () => console.log("Navigate to Prices"),
      },
    ],
  };
}

function useThemeMenu(): SidebarMenuItem {
  const { setTheme } = useTheme();

  return {
    type: "accordion",
    icon: "theme",
    label: "Theme",
    options: [
      {
        label: "Light Theme",
        onClick: () => setTheme("light"),
      },
      {
        label: "Dark Theme",
        onClick: () => setTheme("dark"),
      },
    ],
  };
}
