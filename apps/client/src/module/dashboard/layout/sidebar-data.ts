"use client";
import { useLogout } from "@src/module/auth";
import { useTheme } from "@src/module/system";
import { useRouter } from "@src/configs/navigation";
import { AppSettingRoute, DashboardRoute } from "../route";
import { SidebarMenuItem } from "./sidebar-menu";
import { useTranslations } from "next-intl";
import { AccountRoute } from "@src/module/account/layout/route";
import { useUser } from "@src/module/auth/user-store";
import { CryptoRoutes } from "@src/module/crypto/route";
import { exchangeRoutes } from "@src/module/exchange";

export function useSidebar() {
  const t = useTranslations();
  const router = useRouter();
  const bots = useBotsMenu();
  const cryptoeconomy = useCryptoEconomyMenu();
  const theme = useThemeMenu();
  const account = useAccount();
  const logoutMenu = useLogoutMenu();

  const menu: SidebarMenuItem[] = [
    {
      type: "button",
      icon: "home",
      label: t("Sidebar.dashboard"),
      onClick: () => router.push(DashboardRoute.Root.Path),
    },
    { type: "divider" },
    bots,
    cryptoeconomy,
    { type: "divider" },
    theme,
    account,
    { type: "divider" },
    logoutMenu,
  ];

  return { menu };

  function useAccount(): SidebarMenuItem {
    return {
      type: "accordion",
      icon: "user",
      label: t("Sidebar.account.categoryName"),
      options: [
        {
          label: t("Sidebar.account.profile"),
          onClick: () => router.push(DashboardRoute.Profile.Path),
        },
        {
          label: t("Sidebar.account.exchangeManagement"),
          onClick: () => router.push(exchangeRoutes.exchangePage.Path),
        },
        {
          label: t("Shared.accountManagement"),
          onClick: () => router.push(AccountRoute.Management.Path),
        },
        {
          label: t("Sidebar.account.appSetting"),
          onClick: () => router.push(AppSettingRoute.AppSetting.Path),
        },
      ],
    };
  }

  function useBotsMenu(): SidebarMenuItem {
    return {
      type: "accordion",
      icon: "chart-bars",
      label: t("Sidebar.bots.categoryName"),
      options: [
        {
          label: t("Sidebar.bots.dashboard"),
          onClick: () => console.log("Navigate to Bots Dashboard"),
        },
        {
          label: t("Sidebar.bots.management"),
          onClick: () => console.log("Navigate to Bots Management"),
        },
        {
          label: t("Sidebar.bots.create"),
          onClick: () => console.log("Navigate to Bot Create"),
        },
        {
          label: t("Sidebar.bots.details"),
          onClick: () => console.log("Navigate to Bot Details"),
        },
      ],
    };
  }

  function useCryptoEconomyMenu(): SidebarMenuItem {
    return {
      type: "accordion",
      icon: "earth",
      label: t("Sidebar.cryptoEconomy.categoryName"),
      options: [
        {
          label: t("Sidebar.cryptoEconomy.prices"),
          onClick: () => console.log("Navigate to Prices"),
        },
        {
          label: t("Sidebar.cryptoEconomy.pricesDetails"),
          onClick: () => console.log("Navigate to Price Details"),
        },
        {
          label: t("Sidebar.cryptoEconomy.exchange"),
          onClick: () => router.push(CryptoRoutes.ExchangesPage.Path),
        },
        {
          label: t("Sidebar.cryptoEconomy.exchangeDetails"),
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
      label: t("Shared.theme"),
      options: [
        {
          label: t("Shared.lightTheme"),
          onClick: () => setTheme("light"),
        },
        {
          label: t("Shared.darkTheme"),
          onClick: () => setTheme("dark"),
        },
      ],
    };
  }

  function useLogoutMenu(): SidebarMenuItem {
    const { revokeTokensAndClear } = useLogout();
    return {
      type: "button",
      icon: "exit",
      label: t("Shared.logout"),
      onClick: async () => {
        await revokeTokensAndClear();
      },
    };
  }
}
