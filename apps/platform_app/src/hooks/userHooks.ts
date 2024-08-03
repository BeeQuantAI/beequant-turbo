import { useQuery } from '@apollo/client';
import { useRouter, usePathname } from 'next/navigation';
import { useAppContext, connectFactory } from '@/shared/utils/contextFactory';
import { GET_USER } from '@/graphql/user';
import { IUser } from '@/shared/utils/types';

// import { useLocation, useHistory } from 'react-router-dom';

const KEY = 'userInfo';
const DEFAULT_VALUE = {};

export const useUserContext = () => useAppContext(KEY);

export const connect = connectFactory(KEY, DEFAULT_VALUE);

/**
 *  Hooks for loading basic user information
 */
export const useLoadUser = () => {
  const { setStore } = useUserContext();

  const router = useRouter();
  const pathName = usePathname();

  const { loading, refetch } = useQuery<{ getUserInfo: IUser }>(GET_USER, {
    onCompleted: (data) => {
      if (data.getUserInfo) {
        const { id, displayName } = data.getUserInfo;
        setStore({
          id,
          displayName,
          refetchHandler: refetch,
        });
        if (pathName.match('/login') && typeof window !== 'undefined') {
          router.push('/dashboard');
        }
      }
    },
    onError: () => {
      setStore({
        refetchHandler: refetch,
      });
      console.error('failed retrieving user info, backing to login');
      if (!pathName.match('/login') && typeof window !== 'undefined') {
        router.push(`/login?orgUrl=${pathName}`);
      }
    },
  });

  return { loading, refetch };
};
