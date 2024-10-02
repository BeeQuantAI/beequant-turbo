"use server";
import {
  getServerGqlClient,
  graphql,
  UpdateExchangeKeyInput,
} from "@src/module/graphql";

const getExchangeKeyByIdQuery = graphql(`
  query GetExchangeKeyById($id: String!) {
    getExchangeKeyById(id: $id) {
      code
      message
      data {
        displayName
        accessKey
        secretKey
        exchangeName
      }
    }
  }
`);

export async function getExchangeKeyById(id: string) {
  const gqlClient = await getServerGqlClient();
  const {
    getExchangeKeyById: { code, data },
  } = await gqlClient.request(getExchangeKeyByIdQuery, {
    id,
  });
  return { code, data };
}

const updateExchangeKeyMutation = graphql(`
  mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {
    updateExchangeKey(input: $input) {
      code
      message
    }
  }
`);

export type UpdateExchangeKeyPayload = UpdateExchangeKeyInput;
export async function updateExchangeKey(input: UpdateExchangeKeyPayload) {
  const gqlClient = await getServerGqlClient();
  const { updateExchangeKey } = await gqlClient.request(
    updateExchangeKeyMutation,
    {
      input,
    },
  );

  return updateExchangeKey;
}
