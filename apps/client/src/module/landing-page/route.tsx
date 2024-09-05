import { Link } from "@src/configs/navigation";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const Root = {
  Metadata: {
    title: "Home | BeeQuant",
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
