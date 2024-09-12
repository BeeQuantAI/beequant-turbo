"use client";
import { LinearIcon } from "@src/module/common";
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
        "top-header peer/sidebar group/container shadow-sidebar dark:bg-primary-900 bg-primary-50 absolute bottom-0 z-50 overflow-hidden py-[15px] transition-[width_background-color] duration-300 md:overflow-visible",
        "data-[status=expanded]:w-sidebar-expanded data-[status=collapsed]:md:w-sidebar-collapsed w-0 duration-300 data-[status=collapsed]:w-0",
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
      className="dark:bg-primary-900 dark:hover:bg-primary-700 bg-primary-50 w-header flex aspect-square items-center justify-center overflow-x-hidden transition-colors duration-300 hover:bg-[#fafbfe]"
    >
      <LinearIcon icon="menu" className="text-primary-400 text-[20px]" />
    </button>
  );
}
