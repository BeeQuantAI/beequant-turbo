"use server";
import {
  CreateUserInput,
  getServerGqlClient,
  graphql,
} from "@src/module/graphql";
import { cookies } from "next/headers";
import { z } from "zod";
import { AuthRoute } from "./route";
import { redirect } from "../../configs/navigation";
import { LandingRoute } from "@src/module/landing-page/route";

const authResultSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.string(),
});

const loginMutation = graphql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      code
      message
      data
    }
  }
`);

export type LoginPayload = {
  email: string;
  password: string;
};
export async function login(payload: LoginPayload) {
  const gqlClient = await getServerGqlClient();
  const { login } = await gqlClient.request(loginMutation, payload);

  switch (login.code) {
    case 200:
      const data = authResultSchema.parse(login);
      cookies().set("token", data.data);
      redirect("/dashboard");

    case 10003:
    case 10010:
    default:
      return {
        error: login.message,
        code: login.code,
      };
  }
}

const registerMutation = graphql(`
  mutation Register($input: CreateUserInput!) {
    register(input: $input) {
      code
      message
    }
  }
`);

export type RegisterPayload = CreateUserInput;
export async function register(input: RegisterPayload) {
  const gqlClient = await getServerGqlClient();
  const { register } = await gqlClient.request(registerMutation, {
    input,
  });

  switch (register.code) {
    case 200:
      // I don't [ads-friendly-content] know if this data is valid or not so screw it
      redirect(AuthRoute.RegisterSuccessed.Path);

    case 10004:
    case 10005:
    default:
      return {
        error: register.message,
      };
  }
}

const verifyEmailMutation = graphql(`
  mutation VerifyEmail($email: String!, $token: String!) {
    verifyEmail(email: $email, token: $token) {
      code
      message
    }
  }
`);

export type VerifyEmailPayload = {
  email: string;
  token: string;
};

export async function verifyEmail(payload: VerifyEmailPayload) {
  const gqlClient = await getServerGqlClient();
  const { verifyEmail } = await gqlClient.request(verifyEmailMutation, payload);

  switch (verifyEmail.code) {
    case 200:
      redirect(AuthRoute.VerifyEmailSuccessed.Path);
    case 10011:
      return {
        error: verifyEmail.message,
      };
  }
}

const getUserInfoQuery = graphql(`
  query getUserInfo {
    getUserInfo {
      id
      displayName
    }
  }
`);
export async function getUserInfo() {
  const gqlClient = await getServerGqlClient();
  const { getUserInfo } = await gqlClient.request(getUserInfoQuery);
  console.log("getUserInfo", getUserInfo);
  return getUserInfo;
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete("token");
  redirect(LandingRoute.Root.Path);
}
