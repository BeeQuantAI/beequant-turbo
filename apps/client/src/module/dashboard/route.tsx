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

const Profile = {
  Metadata: {
    title: "Profile | BeeQuant",
  },
  Path: "/dashboard/profile" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Profile.Path} className={className}>
      {children}
    </Link>
  ),
};

const AppSetting = {
  Metadata: {
    title: "App Setting | BeeQuant",
  },
  Path: "/appsetting" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Profile.Path} className={className}>
      {children}
    </Link>
  ),
};

const Setting = {
  Metadata: {
    title: "Setting | BeeQuant",
  },
  Path: "/dashboard/account/setting" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Setting.Path} className={className}>
      {children}
    </Link>
  ),
};

export const DashboardRoute = {
  Root,
  Profile,
  Setting,
};

export const AppSettingRoute = {
  AppSetting,
};
