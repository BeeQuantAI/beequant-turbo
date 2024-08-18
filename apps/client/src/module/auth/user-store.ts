import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
    name: 'user-storage',
  }),
);

export const clearUser = () => {
  useUser.setState(initialState);
};