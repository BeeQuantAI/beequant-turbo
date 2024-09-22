"use server";
import { Result } from "./../../../../platform_api/src/common/dto/result.type";
import { getEnv } from "@src/utils";
import {
  ClientError,
  GraphQLClient,
  RequestDocument,
  ResponseMiddleware,
} from "graphql-request";
import { cookies } from "next/headers";
import { logout } from "@src/module/auth";
import { redirect } from "@src/configs/navigation";
import { LandingRoute } from "@src/module/landing-page/route";
import { GraphQLError } from "graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { getNewAccessToken } from "../auth/auth-service";
// import { getNewAccessToken } from "../auth/auth-service";

export async function getServerGqlClient() {
  const token = cookies().get("token")?.value;
  const client = new GraphQLClient(getEnv().GraphqlEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const authRequest = async <T>(
    query: RequestDocument | TypedDocumentNode<T>,
    input?: object,
  ): Promise<T> => {
    try {
      return await client.request(query, input);
    } catch (error) {
      // console.log("error", error);
      if (error instanceof ClientError) {
        // console.log("error", error.response.errors?.[0]);
        const code = error.response?.errors?.[0]?.extensions?.code;
        // console.log("code", code);
        if (code === 40000) {
          const { generateNewAccessToken } = await getNewAccessToken();
          client.setHeader("Authorization", `Bearer ${generateNewAccessToken}`);
          try {
            await client.request(query, input);
          } catch (e) {
            logout();
            redirect(LandingRoute.Root.Path);
          }
        }
        // if (code === 40001) {
        //   console.log("Token invalid or expired. Logging out...");
        //   logout();
        // }
      }
      console.log(123);
      return await client.request(query, input);
    }
    const res = await client.request(query, input);
    console.log("res", res);
    return res;
  };
  // return client;
  return {
    ...client,
    request: authRequest,
  };
}
// if ("errors" in response) {
//   response.errors?.forEach((error: any) => {
//     console.error("GraphQL Error: ", error);
//     const code = error.extensions?.code;
//     if (code === "UNAUTHENTICATED") {
//       console.log("Token invalid or expired. Logging out...");
//       logout();
//       redirect(LandingRoute.Root.Path);
//     }
//   });
// }

// if ("headers" in response) {
//   console.log("response", response.headers);
//   const newAccessToken = response.headers.get("New-Access-Token");
//   const authStatus = response.headers.get("Auth-Status");
//   console.log("newAccessToken", newAccessToken);
//   console.log("authStatus", authStatus);
//   // if (authStatus === "invalid") {
//   //   console.log("开始登出");
//   //   // logout();
//   //   const cookieStore = cookies();
//   //   cookieStore.delete("token");
//   //   console.log("登出成功");
//   //   redirect(LandingRoute.Root.Path);
//   // }
//   if (newAccessToken) {
//     cookies().set("token", newAccessToken, { path: "/" });
//   }
// }
