import * as RxCheckbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import React from "react";
import { Icon } from "./icon";

type CheckboxProps = {
  name?: string;
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({
  label,
  color,
  type = "checkbox",
  ...props
}: CheckboxProps) {
  return (
    <div
      className={clsx(
        "group flex items-center gap-2 lg:gap-4",
        props.className,
      )}
    >
      <RxCheckbox.Root
        className="border-primary-300 data-[state=checked]:border-accent-400 group-hover:border-accent-400 aspect-square h-4 w-4 appearance-none rounded border transition-colors duration-300 lg:h-[36px] lg:w-[36px]"
        id={props.name || "checkbox"}
      >
        <RxCheckbox.Indicator className="text-accent-400 text-sm lg:text-[36px]">
          <Icon icon="check" />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>
      {label && (
        <label
          className="group-hover:text-accent-400 cursor-pointer transition-colors duration-300 dark:text-neutral-400"
          htmlFor={props.name || "checkbox"}
        >
          {label}
        </label>
      )}
    </div>
  );
}
