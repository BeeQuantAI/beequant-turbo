import { ThemeToggle } from "@src/module/system";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <span className="fixed right-2 top-2">
        <ThemeToggle />
      </span>
      {children}
    </div>
  );
}
