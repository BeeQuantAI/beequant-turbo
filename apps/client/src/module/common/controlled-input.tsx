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
      <span>{label}</span>
      <div className="input input-bordered flex items-center gap-2">
        {!!leftElement && leftElement}
        <input className="grow" {...props} {...field} />
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
      <span>{label}</span>
      <div className="input input-bordered flex items-center gap-2">
        <Icon icon="key" />
        <input
          type={showPassword ? "text" : "password"}
          className="grow"
          {...props}
          {...field}
        />
        {showPassword ? (
          <button type="button" onClick={() => toggleShowPassword()}>
            <Icon icon="eye-open" />
          </button>
        ) : (
          <button type="button" onClick={() => toggleShowPassword()}>
            <Icon icon="eye-closed" />
          </button>
        )}
      </div>

      {error && <span className="text-error">{error.message}</span>}
    </label>
  );
}
