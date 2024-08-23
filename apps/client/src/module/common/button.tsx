import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "text-md relative overflow-hidden rounded border transition-all duration-500",
  {
    variants: {
      variant: {
        default: [
          "border-accent-400 bg-accent-400 text-neutral-50",
          "before:transition-width before:transition-height before:bg-accent-600 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
        outline: [
          "text-accent-400 border-accent-400 bg-transparent",
          "before:transition-width before:transition-height before:bg-accent-400 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
        ],
        secondary: [
          "border-[#D8DFE9] bg-[#D8DFE9] text-[#787985]",
          "before:transition-width before:transition-height hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#b8c5d7] before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
      },
      size: {
        medium: "px-6 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Button({
  className,
  children,
  variant,
  size,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        className,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
