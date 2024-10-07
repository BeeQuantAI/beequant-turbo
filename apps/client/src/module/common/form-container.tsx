"use client";

import clsx from "clsx";
import { Icon, Icons } from "./icon";

type FormContainerProps = {
  children?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  icon?: Icons;
  refreshHandler?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function FormContainer({
  children,
  title,
  description,
  className,
  icon,
  refreshHandler,
  ...props
}: FormContainerProps) {
  return (
    <div className="dark:bg-primary-900 bg-primary-50 shadow-settingPage dark:shadow-settingPage flex flex-col space-y-[30px] rounded-lg p-5">
      <div className={clsx("flex flex-col gap-[3px]", className)} {...props}>
        <h3
          className={clsx(
            icon && "flex justify-between gap-4",
            "text text-base font-bold uppercase",
          )}
        >
          {title}
          {icon && refreshHandler && (
            <span>
              <Icon
                icon={icon}
                onClick={() => {
                  refreshHandler();
                }}
                className="text cursor-pointer text-lg font-bold uppercase"
              />
            </span>
          )}
        </h3>
        <h5 className="text-primary-700 dark:text-primary-100 text-sm capitalize opacity-70">
          {description &&
            description.replace(description[0], description[0].toUpperCase())}
        </h5>
      </div>
      {children}
    </div>
  );
}
