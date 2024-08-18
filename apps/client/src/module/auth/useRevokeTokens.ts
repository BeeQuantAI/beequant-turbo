import { REVOKE_TOKENS } from '@src/module/graphql/auth';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { AuthRoute } from "./route";

export const useRevokeTokens = () => {
  const router = useRouter();

  const clearDataAndRedirect = () => {
    Cookies.remove('token');
    localStorage.removeItem('user-storage');
    router.push(AuthRoute.Login.Path);
  };

  const [revokeTokens] = useMutation(REVOKE_TOKENS, {
    onCompleted: clearDataAndRedirect,
    onError: clearDataAndRedirect,
  });

  return revokeTokens;
};