"use client";
import { Icon } from "@src/module/common";
import { ThemeSwitcher } from "@src/module/system";
// import BellIcon from "@heroicons/react/24/outline/BellIcon";
// import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
// import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
// import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();
  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md">
      {/* Menu toggle for mobile view or small screen */}
      <div className="flex-1">
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <Icon icon="menu" />
        </label>
        <h1 className="text-2xl font-semibold ml-2">{pathname}</h1>
      </div>

      <div className="flex-none">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
