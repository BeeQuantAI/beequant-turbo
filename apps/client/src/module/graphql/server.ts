"use server";
import { getEnv } from "@src/utils";
import { GraphQLClient, ResponseMiddleware } from "graphql-request";
import { cookies } from "next/headers";
import { logout } from "@src/module/auth";
import { redirect } from "@src/configs/navigation";
import { LandingRoute } from "@src/module/landing-page/route";

export async function getServerGqlClient() {
  const token = cookies().get("token")?.value;

  const responseMiddleware: ResponseMiddleware = (response) => {
    if ("errors" in response) {
      response.errors?.forEach((error: any) => {
        console.error("GraphQL Error: ", error);
        const code = error.extensions?.code;
        if (code === "UNAUTHENTICATED") {
          console.log("Token invalid or expired. Logging out...");
          logout();
          redirect(LandingRoute.Root.Path);
        }
      });
    }

    if ("headers" in response) {
      console.log("response", response.headers);
      const newAccessToken = response.headers.get("New-Access-Token");
      const authStatus = response.headers.get("Auth-Status");
      console.log("newAccessToken", newAccessToken);
      console.log("authStatus", authStatus);
      // if (authStatus === "invalid") {
      //   console.log("开始登出");
      //   // logout();
      //   const cookieStore = cookies();
      //   cookieStore.delete("token");
      //   console.log("登出成功");
      //   redirect(LandingRoute.Root.Path);
      // }
      if (newAccessToken) {
        cookies().set("token", newAccessToken, { path: "/" });
      }
    }
  };

  const client = new GraphQLClient(getEnv().GraphqlEndpoint, {
    // errorPolicy: "ignore",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseMiddleware,
  });

  return client;
}
