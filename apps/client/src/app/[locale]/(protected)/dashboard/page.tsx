import { DashboardRoute } from "@src/module/dashboard/route";
import TotalProfitEarned from '@src/app/[locale]/(protected)/dashboard/components/TotalProfitEarned';
import TotalAssets from '@src/app/[locale]/(protected)/dashboard/components/TotalAssets';
import PendingOrders from '@src/app/[locale]/(protected)/dashboard/components/PendingOrders';
import RecentTransactions from '@src/app/[locale]/(protected)/dashboard/components/RecentTransactions';

export const metadata = DashboardRoute.Root.Metadata;

export default function Page() {
  return (
    <div className="px-0 mx-0">
      <h1 className="text-[20px] font-sans text-primary-700 mb-8">BeeQuant Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"> {/* 调整 gap */}
          <TotalProfitEarned />
          <TotalAssets />
          <PendingOrders />
          <RecentTransactions />
        </div>
    </div>
  );
}
