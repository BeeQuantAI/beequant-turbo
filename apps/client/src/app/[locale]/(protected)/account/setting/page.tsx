import { AccountSettingForm } from "@src/module/account/setting/setting-form";
import { AppSettingRoute } from "@src/module/dashboard";

export const metadata = AppSettingRoute.AppSetting.Metadata;
export default function Page() {
  return <AccountSettingForm />;
}
