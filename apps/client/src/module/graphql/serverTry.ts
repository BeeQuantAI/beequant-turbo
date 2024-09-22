// "use server";
// import { getEnv } from "@src/utils";
// import {
//   ClientError,
//   GraphQLClient,
//   ResponseMiddleware,
// } from "graphql-request";
// import { cookies } from "next/headers";
// import { logout } from "@src/module/auth";
// import { redirect } from "@src/configs/navigation";
// import { LandingRoute } from "@src/module/landing-page/route";
// import { GraphQLError } from "graphql";
// import { getNewAccessToken } from "../auth/auth-service";

// export async function getServerGqlClient() {
//   const token = cookies().get("token")?.value;
//   const client = new GraphQLClient(getEnv().GraphqlEndpoint, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return client;
// }

// export async function clientRetry(
//   client: GraphQLClient,
//   query: string,
//   input: any,
// ) {
//   try {
//     return await client.request(query, input);
//   } catch (error) {
//     if (error instanceof ClientError) {
//       if (error.response.errors?.[0].message === "Unauthorized") {
//         const newToken = await getNewAccessToken();
//         if (newToken) {
//           client.setHeader("Authorization", `Bearer ${newToken}`);
//           return await client.request(query, input);
//         } else {
//           logout();
//           redirect(LandingRoute);
//         }
//       }
//     }
//     throw error;
//   }
// }
