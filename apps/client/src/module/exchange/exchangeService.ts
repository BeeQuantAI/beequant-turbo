"use server";
import {
  CreateExchangeKeyInput,
  getServerGqlClient,
  graphql,
} from "../graphql";

const createExchangeKeyMutation = graphql(`
  mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {
    createExchangeKey(input: $input) {
      code
      message
    }
  }
`);

export type CreateExchangePayload = CreateExchangeKeyInput;
export async function createExchangeKey(input: CreateExchangePayload) {
  const gqlClient = await getServerGqlClient();
  const { createExchangeKey } = await gqlClient.request(
    createExchangeKeyMutation,
    {
      input,
    },
  );

  switch (createExchangeKey.code) {
    case 200:
      return {
        code: 200,
      };
    case 10013:
      return {
        code: 10013,
      };
    case 10014:
      return {
        code: 10014,
      };
    case 10012:
      return {
        code: 10012,
      };
    case 10015:
      return { code: 10015 };
    default:
      console.log("Error from server:", createExchangeKey.message);
      return {
        error: createExchangeKey.message,
      };
  }
}
