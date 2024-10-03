'use client';

import { useToggle } from "@src/utils";
import clsx from "clsx";
import React, { InputHTMLAttributes, useState } from "react"; 
import { Control, FieldPath, useController } from "react-hook-form";
import { Icon } from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

export interface InputVariants extends VariantProps<typeof inputVariants> {}
const inputVariants = cva("group", {
  variants: {
    direction: {
      vertical: ["space-y-1"],
      horizontal: [
        "grid grid-cols-[80px_1fr] items-center gap-x-[10px] sm:grid-cols-[120px_1fr] sm:gap-x-5",
      ],
    },
    defaultVariant: {
      direction: "vertical",
    },
  },
});

type ControlledInputProps<TFieldValues extends object = object> = {
  label?: string;
  tooltips?: string;
  direction?: "vertical" | "horizontal";
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues, any>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  InputVariants;

export function ControlledTextInput<TFieldValues extends object>({
  label,
  name,
  control,
  tooltips,
  leftElement,
  rightElement,
  direction = "vertical",
  ...props
}: ControlledInputProps<TFieldValues>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [isFocused, setIsFocused] = useState(false); 

  return (
    <label
      className={inputVariants({ direction })}
       style={{ position: 'relative' }}
    >
      <span>
        {label}
      </span>
      <div className={clsx(!!tooltips && "flex flex-col")}>
        <div className="relative flex items-stretch">
          {!!leftElement && (
            <span className="bg-primary-100 text-primary-300 p-2 transition-colors duration-300 dark:bg-[#33333a]">
              {leftElement}
            </span>
          )}
          <input
            className="focus:shadow-accent-400 dark:focus:shadow-accent-400 shadow-primary-100 dark:shadow-primary-700 shadow-inset flex-1 bg-transparent px-2 py-1 text-sm transition-[box-shadow] duration-300 placeholder:text-xs focus:outline-none"
            placeholder={label ? label : props.placeholder}
            {...props}
            {...field}
            onFocus={(e) => {
              setIsFocused(true); 
              if (props.onFocus) props.onFocus(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              if (props.onBlur) props.onBlur(e);
              field.onBlur(); 
            }}
          />
          {!!rightElement && rightElement}

          {!!tooltips && isFocused && (
            <span
              className="absolute top-0 left-0 text-accent-400 rounded px-2 py-1 text-sm" 
              style={{
                transform: "translateY(-90%)",
                marginLeft: direction === "horizontal" ? "25px" : "0",
              }}
            >
              {tooltips}
            </span>
          )}

          {error?.message && (
            <span
              className={clsx(
                "text-error-900 bg-error-300 absolute bottom-[calc(100%+4px)] right-0 rounded-md px-2 py-1 text-[10px]",
                "after:bg-error-300 after:absolute after:-bottom-1 after:right-4 after:h-2 after:w-2 after:rotate-45",
              )}
            >
              {error.message}
            </span>
          )}
        </div>
      </div>
    </label>
  );
}

export function ControlledPasswordInput<TFieldValues extends object>({
  name,
  control,
  ...props
}: Omit<ControlledInputProps<TFieldValues>, "leftElement" | "rightElement">) {
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <ControlledTextInput
      name={name}
      control={control}
      type={showPassword ? "text" : "password"}
      leftElement={<Icon icon="key" className="text-primary-300" />}
      rightElement={
        showPassword ? (
          <button
            className="bg-accent-600 text-primary-50 p-2"
            type="button"
            onClick={() => toggleShowPassword()}
          >
            <Icon icon="eye-open" />
          </button>
        ) : (
          <button
            className="bg-accent-300 text-primary-50 hover:bg-accent-400 p-2"
            type="button"
            onClick={() => toggleShowPassword()}
          >
            <Icon icon="eye-closed" />
          </button>
        )
      }
      {...props}
    />
  );
}
