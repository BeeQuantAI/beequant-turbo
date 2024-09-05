import { AuthRoute, LoginForm } from "@src/module/auth";

export const metadata = AuthRoute.Login.Metadata;

export default function Page() {
  return <LoginForm />;
}
