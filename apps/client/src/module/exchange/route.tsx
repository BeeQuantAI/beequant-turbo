import Link from "next/link";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const exchangePage = {
  Metadata: {
    title: "Exchange Management | BeeQuant",
  },
  Path: "/exchange" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={exchangePage.Path} className={className}>
      {children}
    </Link>
  ),
};

const createExchange = {
  Metadata: {
    title: "Connect New Exchange | BeeQuant",
  },
  Path: "/exchange/create-exchange",
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={createExchange.Path} className={className}>
      {children}
    </Link>
  ),
};

export const exchangeRoutes = {
  exchangePage,
  createExchange,
};
