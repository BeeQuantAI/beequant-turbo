"use client";

import { Button } from "@src/module/common";
import { DashboardRoute } from "@src/module/dashboard";
import { useTranslations } from "next-intl";

interface NotFoundProps {
  message: string;
}

export function NotFoundContent({ message }: NotFoundProps) {
  const t = useTranslations();

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
          <DashboardRoute.Root.Link>
            <Button variant="default">{t("NotFoundPage.backHome")}</Button>
          </DashboardRoute.Root.Link>
        </div>
      </div>
    </main>
  );
}
