'use client';
import React from 'react';
import { useEffect } from 'react';
import { useUser } from './user-store';
import { useFetchUserInfo } from './userHook';

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const user = useUser((s) => s.user);
  const { loading, error, refetch } = useFetchUserInfo();

  useEffect(() => {
    if (!user) {
      refetch();
    }
  }, [user, loading, error, refetch]);

  return children;
}
