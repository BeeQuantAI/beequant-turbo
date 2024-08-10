import { SidebarToggleButton } from "./sidebar";

export function Header() {
  return (
    <header className="h-header z-10 flex items-center bg-slate-50 shadow-md dark:bg-slate-900">
      <SidebarToggleButton />

      <div className="px-2">Header</div>
    </header>
  );
}
