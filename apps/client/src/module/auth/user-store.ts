import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getUserInfo } from "./auth-service";

type User = {
  id: string;
  displayName?: string | null;
  avatar?: string;
  realName?: string | null;
  title?: string;
  email?: string | null;
  mobile?: string | null;
  ref?: string | null;
};
const initialState = {
  user: null as User | null,
};

export const useUser = create(
  persist(() => initialState, {
    name: "user-storage",
    storage: createJSONStorage(()=> sessionStorage),
  }),
);

export const fetchUserInfo = async () => {
  const { id, displayName, email, ref, mobile, realName } = await getUserInfo();
  useUser.setState(() => ({ user: { id, displayName, mobile, realName, email, ref, avatar: "https://picsum.photos/300"} }));
};
