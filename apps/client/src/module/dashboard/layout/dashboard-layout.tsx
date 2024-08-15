import clsx from "clsx";
import React from "react";
import { Header } from "./header";
import { SidebarContainer } from "./sidebar";

type Props = {
  children: React.ReactNode;
};
export function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <Header />
      <SidebarContainer />

      <main
        className={clsx(
          "top-header bg-primary-100 dark:bg-primary-800 absolute bottom-0 right-0 overflow-y-scroll p-4 transition-[left] duration-300 md:p-8",
          "peer-data-[status=expanded]/sidebar:md:left-sidebar left-0 -z-10 peer-data-[status=collapsed]/sidebar:md:left-16",
        )}
      >
        {children}
      </main>
    </div>
  );
}
