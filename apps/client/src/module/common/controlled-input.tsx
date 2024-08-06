import { useToggle } from "@src/utils";
import React, { InputHTMLAttributes } from "react";
import { Control, FieldPath, useController } from "react-hook-form";
import { Icon } from "./icon";

type ControlledInputProps<TFieldValues extends object = object> = {
  label?: string;
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues, any>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
export function ControlledTextInput<TFieldValues extends object>({
  label,
  name,
  control,
  leftElement,
  rightElement,
  ...props
}: ControlledInputProps<TFieldValues>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <label className="space-y-2 text-neutral-500 transition-colors dark:text-neutral-400">
      <span className="text-xs">{label}</span>
      <div className="flex items-center">
        <span className="border border-slate-200 bg-slate-200 p-2 dark:border-neutral-700 dark:bg-neutral-700">
          {!!leftElement && leftElement}
        </span>
        <input
          className="focus:border-primary-400 flex-1 border border-slate-200 bg-transparent px-2 py-1 placeholder:text-xs focus:outline-none dark:border-neutral-700 dark:text-neutral-50"
          placeholder={label ? label : props.placeholder}
          {...props}
          {...field}
        />
        {!!rightElement && rightElement}
      </div>

      {error && <span className="text-error">{error.message}</span>}
    </label>
  );
}

export function ControlledPasswordInput<TFieldValues extends object>({
  label,
  name,
  control,
  leftElement,
  rightElement,
  ...props
}: ControlledInputProps<TFieldValues>) {
  const [showPassword, toggleShowPassword] = useToggle(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <label className="space-y-2 text-neutral-500 transition-colors dark:text-neutral-400">
      <span className="text-xs">{label}</span>
      <div className="flex items-center">
        <span className="border border-slate-200 bg-slate-200 p-2 dark:border-neutral-700 dark:bg-neutral-700">
          <Icon icon="key" />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          className="focus:border-primary-400 flex-1 border border-slate-200 bg-transparent px-2 py-1 placeholder:text-xs focus:outline-none dark:border-neutral-700 dark:text-neutral-50"
          placeholder={label ? label : props.placeholder}
          {...props}
          {...field}
        />
        {showPassword ? (
          <button
            className="bg-primary-400 border-primary-400 border p-2"
            type="button"
            onClick={() => toggleShowPassword()}
          >
            <Icon icon="eye-open" />
          </button>
        ) : (
          <button
            className="bg-primary-400 border-primary-400 border p-2"
            type="button"
            onClick={() => toggleShowPassword()}
          >
            <Icon icon="eye-closed" />
          </button>
        )}
      </div>

      {error && <span className="text-error">{error.message}</span>}
    </label>
  );
}
