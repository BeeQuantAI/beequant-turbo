import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "relative overflow-hidden rounded border transition-all duration-500",
  {
    variants: {
      variant: {
        default: [
          "border-accent-400 bg-accent-400 text-md text-neutral-50",
          "before:transition-width before:transition-height before:bg-accent-600 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
        outline: [
          "text-accent-400 border-accent-400 text-md bg-transparent",
          "before:transition-width before:transition-height before:bg-accent-400 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
        ],
        highlight: [
          "text-md border-[#eb5765] bg-[#eb5765] text-white",
          "before:transition-width before:transition-height hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#e83535] before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
        primary: [
          "border-[#0D6EFD] bg-[#0D6EFD] text-[16px] text-white",
          "hover:bg-[#0b5ed7]",
        ],
        secondary: [
          "text-md border-[#D8DFE9] bg-[#D8DFE9] text-[#787985]",
          "before:transition-width before:transition-height hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#b8c5d7] before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
        actionPrimary: [
          "text-md dark:text-primary-50 border-[#D8DFE9] text-[#787985]",
          "before:transition-width before:transition-height hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#b8c5d7] before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
      },
      size: {
        small: "px-3 py-[6px]",
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
      onMouseDown={(e) => e.preventDefault()}
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
