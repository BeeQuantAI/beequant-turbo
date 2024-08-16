import { AuthRoute, RegisterForm } from "../../../module/auth";

export const metadata = AuthRoute.Register.Metadata;

export default function Page() {
  return <RegisterForm />;
}
