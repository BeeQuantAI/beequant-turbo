import { Link } from "@src/configs/navigation";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const Setting = {
  Metadata: {
    title: "Account Setting | BeeQuant",
  },
  Path: "/account/setting" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Setting.Path} className={className}>
      {children}
    </Link>
  ),
};

const Management = {
  Metadata: {
    title: "Account Management | BeeQuant",
  },
  Path: "/account/management" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Management.Path} className={className}>
      {children}
    </Link>
  ),
};

const ChangePassword = {
  Metadata: {
    title: "Change Password | BeeQuant",
  },
  Path: "/account/change/password" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={ChangePassword.Path} className={className}>
      {children}
    </Link>
  ),
};

export const AccountRoute = {
  Setting,
  Management,
  ChangePassword,
};
