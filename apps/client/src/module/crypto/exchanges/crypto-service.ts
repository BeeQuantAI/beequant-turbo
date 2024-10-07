import { client } from "@src/boot/apollo";
import { GET_MARKET_OVERVIEW } from "@src/graphql/crypto";

export async function getMarketOverview() {
  const { data } = await client.query({
    query: GET_MARKET_OVERVIEW,
    fetchPolicy: "network-only",
  });
  return data;
}
