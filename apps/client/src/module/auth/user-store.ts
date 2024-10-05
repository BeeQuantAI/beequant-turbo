import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GET_USER } from "@src/graphql/user";
import { client } from "@src/boot/apollo";

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
    storage: createJSONStorage(() => localStorage),
  }),
);

export const fetchUserInfo = async () => {
  try {
    const { data } = await client.query({
      query: GET_USER,
      fetchPolicy: "network-only",
    });
    if (data?.getUserInfo) {
      const { id, displayName, email, ref, mobile, realName } =
        data.getUserInfo;
      useUser.setState(() => ({
        user: {
          id,
          displayName,
          mobile,
          realName,
          email,
          ref,
          avatar: "https://picsum.photos/300",
        },
      }));
    }
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};
