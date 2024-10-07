import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  Observable,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from '@apollo/client/link/ws';
import Cookies from "js-cookie";
import {
  generateAccessToken,
  revokeTokensAndClear,
} from "@src/module/auth/auth-service";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_DEV_SERVER_URL,
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3000/graphql`, 
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

let isRefreshing = false;

const handleToken = async () => {
  const token =
    typeof window !== "undefined" ? Cookies.get("token") || "" : null;
  const decoded = token && JSON.parse(atob(token.split(".")[1]));
  const exp = decoded?.exp ? decoded.exp * 1000 : null;
  const id = decoded?.id;
  return { token, id, exp };
};

const backToLogin = async () => {
  if (typeof window !== "undefined") {
    const currentUrl = window.location.href;
    await revokeTokensAndClear();
    window.location.href = `/login?redirect=${encodeURIComponent(currentUrl)}`;
  }
};

const authLink = setContext(async (_, { headers }) => {
  let { token } = await handleToken();
  const { id, exp } = await handleToken();
  const isTokenValid = token && exp && Date.now() <= exp;
  if (token) {
    if (!isTokenValid && !isRefreshing) {
      isRefreshing = true;
      try {
        const newToken = await generateAccessToken(id);
        if (newToken !== "" && newToken) {
          Cookies.set("token", newToken);
          token = newToken;
        } else {
          await backToLogin();
        }
      } catch (error) {
        await backToLogin();
      } finally {
        isRefreshing = false;
      }
    }
  }
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const responseLink = new ApolloLink((operation, forward) => {
  const { query } = operation;
  const definition = getMainDefinition(query);

  if (definition.kind === "OperationDefinition" && definition.operation === "subscription") {
    return forward(operation);
  }

  return forward(operation).map((response) => {
    if (typeof window !== "undefined") {
      const context = operation.getContext();
      const headers = context.response?.headers;
      const newAccessToken = headers?.get("New-Access-Token");
      if (newAccessToken) {
        Cookies.set("token", newAccessToken);
      }
    }
    return response;
  });
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      const statusCode = err.extensions?.statusCode;
      if (statusCode === 10024 || statusCode === 10025) {
        backToLogin().then();
        return new Observable(() => {});
      }
    }
  }
  return forward(operation);
});

const link = ApolloLink.from([authLink, errorLink, responseLink, splitLink]);

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link,
  cache: new InMemoryCache(),
});
