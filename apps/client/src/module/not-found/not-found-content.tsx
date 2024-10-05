"use client";
import { Button } from "@src/module/common/button";
import { DashboardRoute } from "@src/module/dashboard";
import { LandingRoute } from "@src/module/landing-page/route";
import { useTranslations } from "next-intl";
import getToken from "./get-token";
import { useEffect, useState } from "react";
import { AuthRoute } from "@src/module/auth";

interface NotFoundProps {
  message: string;
}

export function NotFoundContent({ message }: NotFoundProps) {
  const t = useTranslations("NotFoundPage");
  const [token, setToken] = useState<string | "">("");

  useEffect(() => {
    getToken().then((token) => {
      setToken(token || "");
    });
    document.title = AuthRoute.PageNotFound.Metadata.title;
  }, []);

  const buttonLabel = token ? t("returnToDashboard") : t("returnToLanding");

  return (
    <main>
      <div className="dark:bg-primary-800 bg-primary-50 flex h-screen overflow-auto bg-[url('/img/bg_404.png')] bg-cover bg-center bg-no-repeat text-center">
        <div className="m-auto p-[0.625rem]">
          <img
            src="/img/404.png"
            alt="404"
            className="w-full max-w-[31.25rem]"
          />
          <div className="mb-5 mt-[5.625rem] text-[1.1875rem]">{message}</div>
          {token ? (
            <DashboardRoute.Root.Link>
              <Button variant="default">{buttonLabel}</Button>
            </DashboardRoute.Root.Link>
          ) : (
            <LandingRoute.Root.Link>
              <Button variant="default">{buttonLabel}</Button>
            </LandingRoute.Root.Link>
          )}
        </div>
      </div>
    </main>
  );
}
