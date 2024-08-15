import { AuthRoute, RegisterSuccessed } from "@src/module/auth";

export const metadata = AuthRoute.RegisterSuccessed.Metadata;

export default function Page() {
  return <RegisterSuccessed />;
}
