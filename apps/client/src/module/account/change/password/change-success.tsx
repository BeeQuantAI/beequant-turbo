import { Button } from "@src/module/common";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DashboardRoute } from "@src/module/dashboard";

export function ChangeSuccess() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="box-border flex h-full flex-col justify-center">
      <div className="h-full">
        <h1 className="mb-5 text-[20px]">{t("UpdatePasswordPage.title")}</h1>
        <div className="dark:bg-primary-900 bg-primary-50 mb-5 flex flex-col items-center rounded p-5 shadow-lg">
          <div className="mb-5 flex max-w-[520px] justify-center self-center">
            <Image
              src="/img/success.png"
              priority
              alt="success pic"
              width={400}
              height={380.5}
            />
          </div>
          <div className="border-accent-400 dark:text-primary-100 mb-7 flex w-full max-w-[520px] flex-col border-l-4 px-3 text-xl">
            <span className="text-accent-400 font-bold">
              {t("UpdatePasswordPage.successedPage.title")}
            </span>
            <span>{t("UpdatePasswordPage.successedPage.succeed")}</span>
          </div>
          <div className="mb-6 w-full max-w-[520px]">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push(DashboardRoute.Root.Path)}
            >
              {t("UpdatePasswordPage.successedPage.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
