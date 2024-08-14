"use client";
import { logout } from "@src/module/auth";
import { useTheme } from "@src/module/system";
import { useRouter } from "next/navigation";
import { DashboardRoute } from "../route";
import { SidebarMenuItem } from "./sidebar-menu";

export function useSidebar() {
  const router = useRouter();
  const bots = useBotsMenu();
  const cryptoeconomy = useCryptoEconomyMenu();
  const theme = useThemeMenu();
  const account = useAccount();
  const logout = useLogout();

  const menu: SidebarMenuItem[] = [
    {
      type: "button",
      icon: "home",
      label: "Dashboard",
      onClick: () => router.push(DashboardRoute.Root.Path),
    },
    { type: "divider" },
    bots,
    cryptoeconomy,
    { type: "divider" },
    theme,
    account,
    { type: "divider" },
    logout,
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

function useAccount(): SidebarMenuItem {
  return {
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
  };
}

function useLogout(): SidebarMenuItem {
  return {
    type: "button",
    icon: "exit",
    label: "Logout",
    onClick: () => logout(),
  };
}
