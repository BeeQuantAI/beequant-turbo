"use server";
import {
  CreateUserInput,
  getServerGqlClient,
  graphql,
} from "@src/module/graphql";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AuthRoute } from "./route";

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
      return {
        error: login.message,
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
      redirect(AuthRoute.Login.Path);

    case 10004:
    case 10005:
    default:
      return {
        error: register.message,
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

  return getUserInfo;
}
