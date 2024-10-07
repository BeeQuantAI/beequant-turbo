import { AuthRoute, ResetPasswordForm } from "@src/module/auth";

export const metadata = AuthRoute.ResetPassword.Metadata;

export default function Page({ searchParams }: {
  searchParams: { [key: string]: string | undefined }
}) {
  return <ResetPasswordForm searchParams={searchParams} />;
}
