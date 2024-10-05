import { CHANGE_PASSWORD } from "@src/graphql";
import { client } from "@src/boot/apollo";

export type ChangePasswordPayload = {
  newPassword: string;
  oldPassword: string;
};

export async function changePassword(input: ChangePasswordPayload) {
  const { data } = await client.mutate({
    mutation: CHANGE_PASSWORD,
    variables: { input: input },
  });
  return data?.changePassword.code;
}
