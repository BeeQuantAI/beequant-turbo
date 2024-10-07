"use client";
import { useTheme } from "@src/module/system";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchUserInfo } from "@src/module/auth/user-store";
import { useRouter } from "@src/configs/navigation";
import { AuthRoute } from "@src/module/auth/route";

export function LoginCallback({ token }: { token: string }) {
  const getTheme = useTheme();
  const router = useRouter();
  const [OAuthLogin, setOAuthLogin] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { theme } = getTheme;
      if (theme) {
        setTheme(theme);
      }
    }
  }, []);

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

  const backgroundColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${backgroundColor} bg-opacity-50`}
    >
      <p className={`mb-4 text-center text-lg ${textColor}`}>
        Taking you to the dashboard...
      </p>
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
        role="status"
      ></div>
    </div>
  );
}
