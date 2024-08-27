import { AppSettingPage } from "@src/module/appsetting/app-setting-page";
import { AppSettingRoute } from "@src/module/dashboard";

export const metadata = AppSettingRoute.AppSetting.Metadata;

export default function Page() {
  return <AppSettingPage />;
}
