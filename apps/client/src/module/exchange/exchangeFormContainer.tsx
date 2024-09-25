import { useTranslations } from "next-intl";
import { Button } from "../common";
import { ProgressBar } from "./components/progress-bar";

interface FormContainerProps {
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  progress: number;
  children: React.ReactNode;
  showBack?: boolean;
  showSubmit?: boolean;
  showCancel?: boolean;
  onBackClick?: () => void;
  onCancelClick?: () => void;
}

export function FormContainer({
  title,
  onSubmit,
  error,
  progress,
  children,
  showBack = false,
  showSubmit = false,
  showCancel = false,
  onBackClick,
  onCancelClick,
}: FormContainerProps) {
  const t = useTranslations();
  return (
    <div className="box-border flex w-full flex-col justify-center gap-10">
      <h1 className="text-[20px]">{t("ExchangePage.formContainer.heading")}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        className="dark:bg-primary-900 bg-primary-50 flex w-full flex-col rounded-md p-5 shadow-lg"
      >
        <ProgressBar progress={progress} />
        <h2 className="mb-10 text-center text-xl">{title}</h2>
        <div className="mx-auto mb-20 flex w-[90%] flex-col lg:w-1/2">
          {error && (
            <span className="bg-error-300 text-error-900 text-error mb-2 rounded-md px-5 py-3 text-sm">
              {error}
            </span>
          )}
          {children}
        </div>

        <div className="mt-10 flex justify-between p-5">
          {showCancel && (
            <Button variant="secondary" onClick={onCancelClick}>
              {t("ExchangePage.formContainer.cancelButton")}
            </Button>
          )}
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
