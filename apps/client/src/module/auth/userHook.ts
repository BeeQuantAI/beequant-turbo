import { useQuery } from '@apollo/client';
import { GET_USER_INFO } from '@src/module/graphql/user';
import { useUser } from './user-store';
import { useEffect } from 'react';

export const useFetchUserInfo = () => {
  const { data, loading, error, refetch } = useQuery(GET_USER_INFO);

  useEffect(() => {
    if (data) {
      const { id, displayName } = data.getUserInfo;
      const fakeUser = {
        avatar: 'https://picsum.photos/300', // fakeing one for now
        name: 'John Doe',
        title: 'Software Engineer',
        email: 'john-doe@doe.com',
        phone: '+12 3456 7890',
      };

      useUser.setState(() => ({ user: { id, displayName, ...fakeUser } }));
    }
  }, [data]);

  return { loading, error, refetch };
};