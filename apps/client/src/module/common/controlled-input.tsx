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
    <label className="space-y-1 transition-colors">
      <span className="text-[13px]">{label}</span>
      <div className="flex items-stretch">
        <span className="bg-primary-100 text-primary-300 p-2 dark:bg-neutral-700">
          {!!leftElement && leftElement}
        </span>
        <input
          className="focus:shadow-accent-400 shadow-primary-100 shadow-inset flex-1 bg-transparent px-2 py-1 text-xs transition-[box-shadow] duration-300 placeholder:text-xs focus:outline-none"
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
    <label className="space-y-1 transition-colors">
      <span className="text-[13px]">{label}</span>
      <div className="flex items-stretch">
        <span className="bg-primary-100 p-2 dark:bg-neutral-700">
          <Icon icon="key" className="text-primary-300" />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          className="focus:shadow-accent-400 shadow-primary-100 shadow-inset flex-1 bg-transparent px-2 py-1 text-xs transition-[box-shadow] duration-300 placeholder:text-xs focus:outline-none dark:shadow-neutral-700"
          placeholder={label ? label : props.placeholder}
          {...props}
          {...field}
        />
        {showPassword ? (
          <button
            className="bg-accent-400 text-primary-50 p-2"
            type="button"
            onClick={() => toggleShowPassword()}
          >
            <Icon icon="eye-open" />
          </button>
        ) : (
          <button
            className="bg-accent-400 text-primary-50 p-2"
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
