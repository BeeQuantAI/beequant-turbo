import { AccountRoute } from "@src/module/account/layout/route";
import { AccountManagementPage } from "@src/module/account/management/account-management";

export const metadata = AccountRoute.Management.Metadata;

export default function Page() {
  return <AccountManagementPage />;
}
