import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface CheckboxVariants
  extends VariantProps<typeof checkboxVariants> {}

const checkboxVariants = cva(
  "group-hover:border-primary-300 peer size-[18px] cursor-pointer appearance-none rounded border border-solid bg-transparent transition-all focus:outline-none focus:ring-0 focus:ring-offset-0",
  {
    variants: {
      variant: {
        primary: "border-gary-layout-primary",
      },
      size: {
        small: "text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  },
);

const svgVariants = cva(
  "size-4 cursor-pointer opacity-0 transition-opacity peer-checked:opacity-100",
  {
    variants: {
      variant: {
        primary: "border-primary-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type CheckboxProps = {
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement> &
  CheckboxVariants;

export function Checkbox({
  label,
  variant,
  color,
  type = "checkbox",
  ...props
}: CheckboxProps) {
  return (
    <label className="group flex items-center gap-2 w-[119.27px] h-[20px]">
      <div className="relative flex items-center">
        <input
          className={checkboxVariants({ variant })}
          type={type}
          {...props}
        />
        <svg
          className={svgVariants({ variant })}
          fill="#70bbfd"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </div>
      {label && (
        <span className="group-hover:!text-primary-300 text-neutral-500 transition-colors dark:text-neutral-400 cursor-pointer !text-[13px]">
          {label}
        </span>
      )}
    </label>
  );
}
