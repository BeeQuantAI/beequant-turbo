import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserInfo } from "./auth-service";

type User = {
  id: string;
  displayName?: string;
  avatar?: string;
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
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
  }),
);

export const fetchUserInfo = async () => {
  const { id, displayName } = await getUserInfo();
  const fakeUser = {
    avatar: "https://picsum.photos/300", // fakeing one for now
    name: "John Doe",
    title: "Software Engineer",
    email: "john-doe@doe.com",
    phone: "+12 3456 7890",
  };

  useUser.setState(() => ({ user: { id, displayName, ...fakeUser } }));
};

export const clearUser = () => {
  useUser.setState(initialState);
};
