import { AuthRoute, VerifyEmailPage } from "@src/module/auth";

export const metadata = AuthRoute.VerifyEmail.Metadata;

export default function Page({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <VerifyEmailPage searchParams={searchParams} />;
}