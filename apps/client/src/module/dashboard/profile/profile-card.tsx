"use client";
import { useUser } from "@src/module/auth/user-store";

export function ProfileCard() {
  const user = useUser((s) => s.user);
  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-slate-50 p-4 shadow-md md:p-8 dark:bg-slate-900">
      {!user && "Loading..."}
      {!!user && (
        <>
          <img
            className="aspect-square w-40 rounded-full"
            src={user?.avatar}
            alt={`${user?.displayName}'s avatar`}
          />

          <div>
            <p>{user?.name}</p>
            <p className="text-sm text-slate-500">{user?.title}</p>
          </div>

          <div>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
          </div>
        </>
      )}
    </div>
  );
}
