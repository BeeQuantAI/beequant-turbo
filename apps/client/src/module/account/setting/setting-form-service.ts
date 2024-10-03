"use server";

import {
  getServerGqlClient,
  graphql,
} from "@src/module/graphql";
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

interface UpdateUserResult {
  updateUser: boolean;
}

interface UpdateUserVariables {
  id: string;
  input: {
    displayName: string;
    realName: string;
    mobile: string;
  };
}

const updateUserMutation = graphql(`
    mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {
        updateUser(id: $id, input: $input)
    }
`) as TypedDocumentNode<UpdateUserResult, UpdateUserVariables>;

export type UpdateUserPayload = {
  id: string;
  displayName: string;
  realName: string;
  mobile: string;
};

export async function updateUserProfile(payload: UpdateUserPayload) {
    try {
        const gqlClient = await getServerGqlClient();
        const { updateUser } = await gqlClient.request(updateUserMutation, {
          id: payload.id,
          input: {
            displayName: payload.displayName,
            realName: payload.realName,
            mobile: payload.mobile
          },
        });
    
        if (updateUser) {
          return { success: true };
        } else {
          return {
            error: "Failed to update user profile",
          };
        }
      } catch (error) {
        return {
          error: "An error occurred while updating the profile."
        };
      }    
  }