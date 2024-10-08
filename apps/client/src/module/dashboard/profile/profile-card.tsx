"use client";
import { useUser } from "@src/module/auth/user-store";
import { Loading } from "@src/module/common/loading-animation";
import { useTranslations } from "next-intl";

export function ProfileCard() {
  const t = useTranslations();
  const user = useUser((s) => s.user);
  return (
    <div className="bg-primary-50 dark:bg-primary-900 flex flex-col items-center gap-4 rounded-md p-4 shadow-md md:p-8">
      {!user && <Loading />}
      {!!user && (
        <>
          <img
            className="aspect-square w-40 rounded-full"
            src={user?.avatar}
            alt={`${user?.displayName}'s avatar`}
          />

          <div className="text-align: text-center">
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>{user?.mobile}</p>
          </div>
        </>
      )}
    </div>
  );
}
