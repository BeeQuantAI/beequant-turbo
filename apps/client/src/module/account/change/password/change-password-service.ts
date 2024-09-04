"use server";
import { getServerGqlClient, graphql } from "@src/module/graphql";

const changePasswordMutation = graphql(`
  mutation UpdatePassword($input: UpdatePasswordInput!) {
    changePassword(input: $input) {
      code
      message
    }
  }
`);

export type ChangePasswordPayload = {
  newPassword: string;
  oldPassword: string;
};

export async function changePassword(input: ChangePasswordPayload) {
  const gqlClient = await getServerGqlClient();
  const {
    changePassword: { code },
  } = await gqlClient.request(changePasswordMutation, {
    input,
  });
  return code;
}
