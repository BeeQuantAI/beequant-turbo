import Link from "next/link";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const ExchangesPage = {
  Metadata: {
    title: "Crypto Exchanges | BeeQuant",
  },
  Path: "/crypto/exchanges" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={ExchangesPage.Path} className={className}>
      {children}
    </Link>
  ),
};
const Details = {
  Metadata: {
    title: "Crypto Details | BeeQuant",
  },
  Path: "/crypto/details" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Details.Path} className={className}>
      {children}
    </Link>
  ),
};

export const CryptoRoutes = {
  ExchangesPage,
  Details,
  // TODO: Add other routes
};

