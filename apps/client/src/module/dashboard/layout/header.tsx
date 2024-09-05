import { Logo } from "@src/module/common/logo";
import { DashboardRoute } from "../route";
import { AccountMenu } from "./account-menu";
import { SidebarToggleButton } from "./sidebar";

export function Header() {
  return (
    <header className="h-header dark:bg-primary-900 bg-primary-50 shadow-header z-20 flex items-center transition-colors duration-300">
      <SidebarToggleButton />

      <DashboardRoute.Root.Link>
        <Logo />
      </DashboardRoute.Root.Link>

      <AccountMenu />
    </header>
  );
}
