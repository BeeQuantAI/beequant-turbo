import { SidebarContainer } from "@src/module/dashboard";
import clsx from "clsx";
import React from "react";
import { Header } from "./components/header";

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
          "top-header absolute bottom-0 right-0 overflow-y-scroll transition-[left] duration-300",
          "peer-data-[status=expanded]/sidebar:left-sidebar peer-data-[status=collapsed]/sidebar:left-16",
        )}
      >
        {children}
      </main>
    </div>
  );
}
