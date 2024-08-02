import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserInfo } from "./auth-service";

type User = {
  id: string;
  displayName?: string;
};
const initialState = {
  user: null as User | null,
};

export const useUser = create(
  persist(() => initialState, {
    name: "user-storage",
    // onRehydrateStorage: (state) => {
    //   console.log(state);
    //   return (state, error) => {
    //     if (state?.user === null) fetchUserInfo();
    //     console.dir(error);
    //   };
    // },
  })
);

export const fetchUserInfo = async () => {
  const { id, displayName } = await getUserInfo();
  useUser.setState(() => ({ user: { id, displayName } }));
};

export const clearUser = () => {
  useUser.setState(initialState);
};
