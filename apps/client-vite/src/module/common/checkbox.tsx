import * as RxCheckbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import React from "react";
import { Icon } from "./icon";

type CheckboxProps = {
  name?: string;
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <div className={clsx("group flex items-center gap-2", props.className)}>
      <RxCheckbox.Root
        className="border-primary-300 data-[state=checked]:border-accent-400 group-hover:border-accent-400 aspect-square h-4 w-4 appearance-none rounded border transition-colors duration-300"
        id={props.name || "checkbox"}
      >
        <RxCheckbox.Indicator className="text-accent-400 text-sm">
          <Icon icon="check" />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>
      {label && (
        <label
          className="group-hover:text-accent-400 cursor-pointer text-[13px] transition-colors duration-300 dark:text-neutral-400"
          htmlFor={props.name || "checkbox"}
        >
          {label}
        </label>
      )}
    </div>
  );
}
