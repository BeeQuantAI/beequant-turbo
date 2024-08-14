"use client";
import { Icon } from "@src/module/common";
import { useToggle } from "@src/utils";
import clsx from "clsx";
import { useEffect } from "react";
import { useSidebar } from "./sidebar-data";
import { SidebarMenu } from "./sidebar-menu";

const toggleButtonId = "sidebar-toggle";

export function SidebarContainer() {
  const [showSidebar, toggleSidebar] = useToggle(false);
  const { menu } = useSidebar();

  useEffect(() => {
    const handleSidebarToggle = () => toggleSidebar();
    const sidebarCheckbox = document.getElementById(toggleButtonId);
    if (!sidebarCheckbox) return;

    sidebarCheckbox.addEventListener("click", handleSidebarToggle);
    return () => {
      sidebarCheckbox.removeEventListener("click", handleSidebarToggle);
    };

    // We know toggleSidebar is not to trigger a re-render so we are disabling this rule here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-status={showSidebar ? "expanded" : "collapsed"}
      className={clsx(
        "top-header peer/sidebar group/container dark:bg-primary-600 absolute bottom-0 overflow-hidden bg-slate-50 py-4 transition-[width] md:overflow-visible dark:text-white",
        "data-[status=expanded]:w-sidebar w-0 duration-300 data-[status=collapsed]:w-0 data-[status=collapsed]:md:w-16",
      )}
    >
      <SidebarMenu menu={menu} />
    </div>
  );
}

export function SidebarToggleButton() {
  return (
    <button
      id={toggleButtonId}
      className="dark:bg-primary-600 dark:hover:bg-primary-500 flex aspect-square w-16 items-center justify-center overflow-x-hidden bg-slate-50"
    >
      <Icon icon="menu" className="dark:text-neutral-50" />
    </button>
  );
}
