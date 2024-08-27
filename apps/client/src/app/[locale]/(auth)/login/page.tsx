import { AuthRoute, LoginForm } from "@src/module/auth";

export const metadata = AuthRoute.Login.Metadata;

export default function Page({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  const token = searchParams.token as string;
  return <LoginForm token={token}/>;
}
