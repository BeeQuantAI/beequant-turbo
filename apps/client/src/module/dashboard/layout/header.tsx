import { AccountMenu } from "./account-menu";
import { SidebarToggleButton } from "./sidebar";

export function Header() {
  return (
    <header className="h-header dark:bg-primary-900 bg-primary-50 z-10 flex items-center shadow-md transition-colors duration-300">
      <SidebarToggleButton />

      <div className="px-2">Logo</div>

      <div className="ml-auto h-full px-4">
        <AccountMenu />
      </div>
    </header>
  );
}
