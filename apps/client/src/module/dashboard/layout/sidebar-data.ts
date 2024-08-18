"use client";
import { useTheme } from "@src/module/system";
import { useRouter } from "next/navigation";
import { DashboardRoute } from "../route";
import { SidebarMenuItem } from "./sidebar-menu";
import { useRevokeTokens } from '@src/module/auth/useRevokeTokens';

export function useSidebar() {
  const router = useRouter();
  const bots = useBotsMenu();
  const cryptoeconomy = useCryptoEconomyMenu();
  const theme = useThemeMenu();
  const account = useAccount();
  // const logout = useLogout();
  const revokeTokens = useRevokeTokens();

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
    {
      type: "button",
      icon: "exit",
      label: "Log Out",
      onClick:async () => {
        await revokeTokens();
      },
    },
  ];

  return { menu };
}

function useBotsMenu(): SidebarMenuItem {
  return {
    type: "accordion",
    icon: "chart-bars",
    label: "Bots",
    options: [
      {
        label: "Bots Dashboard",
        onClick: () => console.log("Navigate to Bots Dashboard"),
      },
      {
        label: "Bots Management",
        onClick: () => console.log("Navigate to Bots Management"),
      },
      {
        label: "Bot Create",
        onClick: () => console.log("Navigate to Bot Create"),
      },
      {
        label: "Bot Details",
        onClick: () => console.log("Navigate to Bot Details"),
      },
    ],
  };
}

function useCryptoEconomyMenu(): SidebarMenuItem {
  return {
    type: "accordion",
    icon: "earth",
    label: "Cryptoeconomy",
    options: [
      {
        label: "Prices",
        onClick: () => console.log("Navigate to Prices"),
      },
      {
        label: "Price Details",
        onClick: () => console.log("Navigate to Price Details"),
      },
      {
        label: "Exchanges",
        onClick: () => console.log("Navigate to Exchanges"),
      },
      {
        label: "Exchange Details",
        onClick: () => console.log("Navigate to Exchange Details"),
      },
    ],
  };
}

function useThemeMenu(): SidebarMenuItem {
  const { setTheme } = useTheme();

  return {
    type: "accordion",
    icon: "diamond",
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
    icon: "user",
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
