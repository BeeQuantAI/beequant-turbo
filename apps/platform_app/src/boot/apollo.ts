// import { currentOrg } from '@/utils';
import { AUTH_TOKEN } from '@/shared/constants/storage';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  // uri: import.meta.env.VITE_DEV_SERVER_URL,
  uri: process.env.NEXT_PUBLIC_DEV_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== 'undefined'
      ? sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN)
      : null;
  // const token = sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
