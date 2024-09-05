import { DashboardLayout } from "@src/module/dashboard";
import { AuthProvider } from "@src/module/auth/auth-provider";

type Props = {
  children: React.ReactNode;
};
export default async function Layout({ children }: Props) {
  return (
    <AuthProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthProvider>
  );
}

// app/[workspaceId]/layout.tsx
