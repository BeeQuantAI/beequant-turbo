/* eslint-disable @next/next/no-img-element */
"use client";

import { Icon } from "@src/module/common";
import { useThemeStore } from "@src/module/system/theme-store";
import Link from "next/link";
// import SidebarSubmenu from "./sidebar-submenu";
// import routes from "@/helper/sidebar-routes";
import { usePathname } from "next/navigation";
import { routes } from "../helper/sidebar-routes";
import SidebarSubmenu from "./sidebar-submenu";
import { useUser } from "@src/module/auth/user-store";

interface LeftSidebarProps {}

function LeftSidebar(props: LeftSidebarProps) {
  const pathname = usePathname();
  const theme = useThemeStore((s) => s.theme);
  const user = useUser((s) => s.user);
  const close = () => {
    const leftSidebarDrawer = document.getElementById("left-sidebar-drawer");
    if (leftSidebarDrawer) leftSidebarDrawer.click();
  };

  return (
    <div className="drawer-side z-30 overflow-hidden">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={close}
        >
          <Icon icon="close" className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link href="/welcome">
            <img
              className="mask mask-squircle w-10"
              src={
                theme === "dark"
                  ? "/image/logo_dark.png"
                  : "/image/logo_light.png"
              }
              alt="bee Logo"
            />
            AlphaQuant
          </Link>
        </li>
        <div
          className="overflow-y-scroll pb-20 no-scrollbar"
          style={{ height: "85vh" }}
        >
          {routes.map((route, k: number) => (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <Link
                  href={route.path}
                  className={`${pathname == route.path ? "font-semibold bg-base-200 " : "font-normal"}`}
                >
                  {route.icon} {route.pageName}
                  {pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              )}
            </li>
          ))}
        </div>
      </ul>
      {/* Profile icon, opening menu on click */}
      <div className="dropdown bottom-0 absolute dropdown-top w-80 ">
        <div
          tabIndex={0}
          role="button"
          className="btn w-full bg-base-100 text-left justify-start "
        >
          <div className="avatar">
            <div className="w-6 rounded-full">
              <img src={"/"} alt="avatar" />
            </div>
          </div>
          {`hello ${user?.displayName}`}
          <Icon icon="arrow-down" className="w-4 " />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content visible w-52 px-4 z-[1]  menu  shadow bg-base-200 rounded-box "
        >
          <li className="">
            <Link href={"/settings/billing"}>
              <Icon icon="key" className="w-4 " />
              Bill History
            </Link>
          </li>
          <div className="divider py-2 m-0"></div>
          <li>
            <a className=" ">
              <Icon icon="key" className="w-4 " />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
