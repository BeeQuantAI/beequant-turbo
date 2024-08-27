import { ChangePasswordForm } from "@src/module/account/change/password/change-password-form";
import { AccountRoute } from "@src/module/account/layout/route";

export const metadata = AccountRoute.ChangePassword.Metadata;

export default function Page() {
  return <ChangePasswordForm />;
}
