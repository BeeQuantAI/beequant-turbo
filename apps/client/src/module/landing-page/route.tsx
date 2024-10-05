import { Link } from "@src/configs/navigation";
import React from "react";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const Root = {
  Metadata: {
    title: "Landing | BeeQuant",
  },
  Path: "/" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Root.Path} className={className}>
      {children}
    </Link>
  ),
};

export const LandingRoute = {
  Root,
};
