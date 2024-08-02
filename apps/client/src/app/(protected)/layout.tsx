import { AuthProvider } from "@src/module/auth/auth-provider";

type Props = {
  children: React.ReactNode;
};
export default async function Layout({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

// app/[workspaceId]/layout.tsx
