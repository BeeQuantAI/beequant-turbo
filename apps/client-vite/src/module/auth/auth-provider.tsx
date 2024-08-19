"use client";
import { useEffect } from "react";
import { fetchUserInfo, useUser } from "./user-store";

type Props = {
  children: React.ReactNode;
};
export function AuthProvider({ children }: Props) {
  const user = useUser((s) => s.user);
  useEffect(() => {
    //!TODO: init load can not get user form local storage lol... I can fix this shit now..
    if (!user) fetchUserInfo();
  }, [user]);

  return children;
}
