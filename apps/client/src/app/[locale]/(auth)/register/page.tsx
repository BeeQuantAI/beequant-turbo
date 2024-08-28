import { AuthRoute, RegisterForm } from "@src/module/auth";

export const metadata = AuthRoute.Register.Metadata;

export default function Page() {
  return <RegisterForm />;
}
