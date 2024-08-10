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
        "data-[status=expanded]:w-sidebar group/container w-0 transition-[width] duration-300 data-[status=collapsed]:w-0 data-[status=collapsed]:md:w-16",
        "top-header absolute bottom-0 bg-slate-50 py-4 dark:bg-slate-900",
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
      className="flex aspect-square w-16 items-center justify-center overflow-x-hidden bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-700"
    >
      <Icon icon="menu" />
    </button>
  );
}
