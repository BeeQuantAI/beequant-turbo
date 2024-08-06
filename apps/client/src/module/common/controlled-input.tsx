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
      <span className="text-xs dark:text-neutral-200">{label}</span>
      <div className="flex items-center">
        <span className="border border-neutral-700 bg-neutral-700 p-2 text-neutral-400">
          {!!leftElement && leftElement}
        </span>
        <input
          className="focus:border-primary-400 flex-1 border border-neutral-700 bg-transparent px-2 py-1 transition-colors placeholder:text-xs focus:outline-none dark:text-neutral-50"
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
      <span className="text-xs dark:text-neutral-200">{label}</span>
      <div className="flex items-center">
        <span className="border border-neutral-700 bg-neutral-700 p-2 text-neutral-400">
          <Icon icon="key" />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          className="focus:border-primary-400 flex-1 border border-neutral-700 bg-transparent px-2 py-1 transition-colors placeholder:text-xs focus:outline-none dark:text-neutral-50"
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
