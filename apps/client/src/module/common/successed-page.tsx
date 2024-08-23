import React from "react";
import Image from "next/image";
import { Button } from "@src/module/common";
import successImg from "../../../public/image/success.png";
import { AuthRoute } from "../auth/route";
import { useTranslations } from "next-intl";

interface SuccessProps {
  title: string;
  message: string;
}

export function Successed({ title, message }: SuccessProps) {
  const t = useTranslations();
  return (
    <div className="dark:bg-primary-900 bg-primary-50 flex max-w-[520px] flex-col gap-5 px-[60px] py-[50px]">
      <div className="mb-5">
        <Image
          src={successImg}
          priority
          alt="success pic"
          width={400}
          height={380.5}
        />
      </div>

      <div className="border-accent-400 dark:text-primary-100 flex flex-col border-l-4 px-3 text-xl">
        <span className="text-accent-400 font-bold">{title}</span>
        <span>{message}</span>
      </div>

      <div className="mb-5 mt-3">
        <AuthRoute.Login.Link>
          <Button variant="outline" className="w-[400px]">
            {t("RegisterPage.succeed.backToLogin")}
          </Button>
        </AuthRoute.Login.Link>
      </div>
    </div>
  );
}
