"use server";
import { getEnv } from "@src/utils";
import { GraphQLClient, ResponseMiddleware } from "graphql-request";
import { cookies } from "next/headers";
import { logout } from "@src/module/auth";

export async function getServerGqlClient() {
  const token = cookies().get("token")?.value;

  const responseMiddleware: ResponseMiddleware = (response) => {
    if ("headers" in response) {
      const newAccessToken = response.headers.get("x-new-access-token");
      const authStatus = response.headers.get("x-auth-status");
      if (newAccessToken) {
        cookies().set("token", newAccessToken, { path: "/" });
      }

      if (authStatus === "invalid") {
        logout();
      }
    }
  };

  return new GraphQLClient(getEnv().GraphqlEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseMiddleware,
  });
}
