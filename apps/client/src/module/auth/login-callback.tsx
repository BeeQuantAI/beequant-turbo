"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchUserInfo } from "@src/module/auth/user-store";
import { useRouter } from "@src/configs/navigation";
import { AuthRoute } from "@src/module/auth/route";
import { Loading } from "@src/module/common/loading-animation";

export function LoginCallback({ token }: { token: string }) {
  const router = useRouter();
  const [OAuthLogin, setOAuthLogin] = useState(false);

  useEffect(() => {
    if (token && typeof window !== "undefined") {
      const handleLogin = async () => {
        try {
          if (token) {
            token && Cookies.set("token", token);
            await fetchUserInfo();
            router.replace("/dashboard");
          } else {
            router.replace(AuthRoute.Login.Path);
          }
        } catch (error) {
          router.replace("/login");
        }
      };
      handleLogin();
    }
  }, [token, router]);

  return <Loading redirectFrom={"login-callback"} />;
}
