import { Profile } from "../profile";
import { SidebarToggleButton } from "../sidebar/sidebar";

export function Header() {
  return (
    <header className="h-header z-10 flex items-center bg-slate-50 shadow-md dark:bg-primary-300">
      <SidebarToggleButton />

      <div className="px-2">Logo</div>

      <div className="ml-auto h-full px-4">
        <Profile />
      </div>
    </header>
  );
}
