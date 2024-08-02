import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}
