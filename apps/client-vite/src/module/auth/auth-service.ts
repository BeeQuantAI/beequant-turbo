"use server";
import {
  CreateUserInput,
  getServerGqlClient,
  graphql,
} from "@src/module/graphql";
import { z } from "zod";

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

    case 10003:
    default:
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

export async function logout() {}
