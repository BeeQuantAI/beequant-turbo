"use server";
import { getEnv } from "@src/utils";
import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";

export async function getServerGqlClient() {
  const token = cookies().get("token")?.value;

  return new GraphQLClient(getEnv().GraphqlEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
