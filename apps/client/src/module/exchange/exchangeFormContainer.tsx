import React from "react";
import { ProgressBar } from "./components/progress-bar";
import { Button } from "../common";
import { useTranslations } from "next-intl";

interface FormContainerProps {
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  progress: number;
  children: React.ReactNode;
  showBack?: boolean;
  showSubmit?: boolean;
  onBackClick?: () => void;
}

export function FormContainer({
  title,
  onSubmit,
  error,
  progress,
  children,
  showBack = false,
  showSubmit = false,
  onBackClick,
}: FormContainerProps) {
  const t = useTranslations();
  return (
    <div className="box-border flex w-full flex-col justify-center gap-10">
      <h1 className="text-[20px]">{t("ExchangePage.formContainer.heading")}</h1>{" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        className="dark:bg-primary-900 bg-primary-50 flex flex-col rounded-md p-5 shadow-lg"
      >
        <ProgressBar progress={progress} />
        <h2 className="mb-10 text-center text-xl">{title}</h2>
        <div className="mx-auto mb-20 flex w-1/2 flex-col justify-start">
          {error && (
            <span className="bg-error-300 text-error-900 text-error mb-2 rounded-md px-5 py-3 text-sm">
              {error}
            </span>
          )}
          {children}
        </div>

        <div className="mt-10 flex justify-between p-5">
          {showBack && (
            <Button variant="default" onClick={onBackClick}>
              {t("ExchangePage.formContainer.backButton")}
            </Button>
          )}
          <Button type="submit">
            {showSubmit
              ? t("ExchangePage.formContainer.submitButton")
              : t("ExchangePage.formContainer.nextButton")}
          </Button>
        </div>
      </form>
    </div>
  );
}
