import { Profile } from "../profile";
import { SidebarToggleButton } from "../sidebar/sidebar";

export function Header() {
  return (
    <header className="h-header dark:bg-primary-600 z-10 flex items-center bg-slate-50 shadow-md">
      <SidebarToggleButton />

      <div className="px-2">Logo</div>

      <div className="ml-auto h-full px-4">
        <Profile />
      </div>
    </header>
  );
}
