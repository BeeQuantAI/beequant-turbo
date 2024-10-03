import { AuthRoute, ForgotPasswordForm } from "@src/module/auth";

export const metadata = AuthRoute.ForgetPassword.Metadata;

export default function Page() {
    return <ForgotPasswordForm />;
  }