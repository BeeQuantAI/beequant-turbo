import { GENERATE_ACCESS_TOKEN } from "@src/graphql";
import { client } from "@src/boot/apollo";
import Cookies from "js-cookie";
import { useRouter } from "@src/configs/navigation";
import { useUser } from "@src/module/auth/user-store";
import { REVOKE_TOKENS } from "@src/graphql/auth";

export async function generateAccessToken(id: string) {
  const { data } = await client.mutate({
    mutation: GENERATE_ACCESS_TOKEN,
    variables: { id },
  });
  return data?.generateAccessToken;
}

export const revokeTokensAndClear = async () => {
  try {
    await client.mutate({
      mutation: REVOKE_TOKENS,
    });
    Cookies.remove("token");
    useUser.persist.clearStorage();
  } catch (error) {
    Cookies.remove("token");
    useUser.persist.clearStorage();
  }
};

export function useLogout() {
  const router = useRouter();

  const clearDataAndRedirect = () => {
    Cookies.remove("token");
    useUser.persist.clearStorage();
    router.push("/");
  };

  const revokeTokensAndClear = async () => {
    try {
      await client.mutate({
        mutation: REVOKE_TOKENS,
      });
      clearDataAndRedirect();
    } catch (error) {
      clearDataAndRedirect();
    }
  };
  return { revokeTokensAndClear };
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete("token");

  redirect(AuthRoute.Login.Path);
}
