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

export const CryptoRoutes = {
  ExchangesPage,
  // TODO: Add other routes
};
