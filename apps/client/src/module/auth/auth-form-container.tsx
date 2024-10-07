import { useTranslations } from "next-intl";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  children: React.ReactNode;
  title?: string;
};
export function AuthFormContainer(props: Props) {
  const t = useTranslations();
  const defaultTitle = t("Shared.welcome");

  return (
    <form
      className="dark:bg-primary-900 bg-primary-50 flex w-full max-w-[520px] flex-col gap-5 px-[60px] py-[50px] transition-colors duration-300 max-sm:px-[30px] max-sm:py-[35px]"
      onSubmit={props.onSubmit}
    >
      <div className="border-accent-400 flex flex-col border-l-4 px-2.5">
        <span className="text-2xl">{props.title || defaultTitle}</span>
        <span className="text-2xl font-bold tracking-wide">
          {t("Shared.beequant")}
          <span className="text-accent-400">{t("Shared.ai")}</span>
        </span>
        <span className="text-primary-300 text-sm">{t("Shared.slogan")}</span>
      </div>

      {props.error && (
        <span className="bg-error-300 text-error-900 text-error rounded-md px-5 py-3 text-sm">
          {props.error}
        </span>
      )}

      {props.children}
    </form>
  );
}
