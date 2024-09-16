import { DashboardRoute } from "@src/module/dashboard/route";
import { getUserInfo } from "@src/module/auth/auth-service";

export const metadata = DashboardRoute.Root.Metadata;

export default async function Page() {
  // const result = await getUserInfo();
  // console.log("result", result);

  return <div className="ring-1">Yeaaahh dashboard</div>;
}
