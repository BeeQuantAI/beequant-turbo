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
    <label className="space-y-2">
      <span className="text-sm dark:text-neutral-500">{label}</span>
      <div className="flex items-center border border-neutral-700">
        <span className="bg-neutral-700 p-2">
          {!!leftElement && leftElement}
        </span>
        <input
          className="flex-1 bg-transparent px-2 py-1 placeholder:text-xs focus:outline-none"
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
    <label className="space-y-2">
      <span className="text-sm dark:text-neutral-500">{label}</span>
      <div className="flex items-center border border-neutral-700">
        <span className="bg-neutral-700 p-2">
          <Icon icon="key" />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          className="flex-1 bg-transparent px-2 py-1 placeholder:text-xs focus:outline-none"
          placeholder={label ? label : props.placeholder}
          {...props}
          {...field}
        />
        {showPassword ? (
          <button
            className="bg-primary-400 p-2"
            type="button"
            onClick={() => toggleShowPassword()}
          >
            <Icon icon="eye-open" />
          </button>
        ) : (
          <button
            className="bg-primary-400 p-2"
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
