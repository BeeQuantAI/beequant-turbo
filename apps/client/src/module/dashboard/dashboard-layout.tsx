import { SidebarContainer } from "@src/module/dashboard";
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

      <main className="peer-data-[show-sidebar=true]:left-sidebar top-header absolute bottom-0 right-0 transition-[left] duration-300 peer-data-[show-sidebar=false]:left-16">
        {children}
      </main>
    </div>
  );
}
