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
        "top-header peer/sidebar group/container dark:bg-primary-900 bg-primary-50 absolute bottom-0 overflow-hidden py-4 shadow-2xl transition-[width_background-color] duration-300 md:overflow-visible",
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
      className="dark:bg-primary-900 dark:hover:bg-primary-700 bg-primary-50 hover:bg-accent-50 flex aspect-square w-16 items-center justify-center overflow-x-hidden transition-colors duration-300"
    >
      <Icon icon="menu" className="dark:text-neutral-50" />
    </button>
  );
}
