"use server";
import { getEnv } from "@src/utils";
import { GraphQLClient } from "graphql-request";

export async function getServerGqlClient() {
  const token = "";

  return new GraphQLClient(getEnv().GraphqlEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
