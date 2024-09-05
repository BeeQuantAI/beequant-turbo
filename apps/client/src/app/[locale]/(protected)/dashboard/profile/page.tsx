import { DashboardRoute } from "@src/module/dashboard";
import { ProfileCard } from "@src/module/dashboard/profile/profile-card";

export const metadata = DashboardRoute.Profile.Metadata;

export default function Page() {
  return <ProfileCard />;
}
