import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { AuthRoute} from '@src/module/auth';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_DEV_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== 'undefined' ? Cookies.get('token') : null;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const responseLink = new ApolloLink((
  operation,
  forward,
) => {
  return forward(operation).map((response) => {
    if (typeof window !== 'undefined') {
      const context = operation.getContext();
      const headers = context.response?.headers;
      const newAccessToken = headers?.get('x-new-access-token');
      const authStatus = headers?.get('x-auth-status');
      if (newAccessToken) Cookies.set('token', newAccessToken);
      if (authStatus === 'invalid') {
        Cookies.remove('token');
        localStorage.removeItem('user-storage');
        window.location.href = AuthRoute.Login.Path;
      }
    }
    return response;
  });
});


export const client = new ApolloClient({
  link: ApolloLink.from([authLink, responseLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
