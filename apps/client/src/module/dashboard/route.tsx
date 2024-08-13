import Link from "next/link";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const Root = {
  Metadata: {
    title: "Dashboard | BeeQuant",
  },
  Path: "/dashboard" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Root.Path} className={className}>
      {children}
    </Link>
  ),
};

export const DashboardRoute = {
  Root,
};
