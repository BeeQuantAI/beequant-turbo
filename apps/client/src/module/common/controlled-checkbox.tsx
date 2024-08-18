import * as RxCheckbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import React from "react";
import { useController, Control, FieldPath } from "react-hook-form";
import { Icon } from "./icon";

type ControlledCheckboxProps<TFieldValues extends object = object> = {
  label?: string;
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues, any>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function ControlledCheckbox<TFieldValues extends object>({
                                                                  label,
                                                                  name,
                                                                  control,
                                                                  ...props
                                                                }: ControlledCheckboxProps<TFieldValues>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className={clsx("group flex items-center gap-2", props.className)}>
      <RxCheckbox.Root
        className="border-primary-300 data-[state=checked]:border-accent-400 group-hover:border-accent-400 aspect-square h-4 w-4 appearance-none rounded border transition-colors duration-300"
        id={field.name}
        checked={field.value}
        onCheckedChange={field.onChange}
      >
        <RxCheckbox.Indicator className="text-accent-400 text-sm">
          <Icon icon="check" />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>
      {label && (
        <label
          className="group-hover:text-accent-400 cursor-pointer transition-colors duration-300 dark:text-neutral-400"
          htmlFor={field.name}
        >
          {label}
        </label>
      )}
      {error?.message && (
        <span className="text-error-900 text-xs">{error.message}</span>
      )}
    </div>
  );
}
