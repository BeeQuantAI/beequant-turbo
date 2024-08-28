import { useTranslations } from "next-intl";
import clsx from "clsx";

type FormContainerProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function FormContainer({
  children,
  title,
  description,
  className,
  ...props
}: FormContainerProps) {
  const t = useTranslations();

  return (
    <div className="dark:bg-primary-900 bg-primary-50 shadow-settingPage dark:shadow-settingPage flex flex-col rounded-lg p-5">
      <div className={clsx("flex flex-col gap-[3px]", className)} {...props}>
        <h3 className="text text-base font-bold uppercase">{title}</h3>
        <h5 className="text-primary-700 dark:text-primary-100 text-sm capitalize opacity-70">
          {description.replace(description[0], description[0].toUpperCase())}
        </h5>
      </div>
      {children}
    </div>
  );
}
