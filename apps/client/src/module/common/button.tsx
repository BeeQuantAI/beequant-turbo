import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "border-accent-400 relative overflow-hidden rounded border text-sm transition-all duration-500",
  {
    variants: {
      variant: {
        default: [
          "bg-accent-400 text-neutral-50",
          "before:transition-width before:transition-height before:bg-accent-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
        outline: [
          "text-accent-400 bg-transparent",
          "before:transition-width before:transition-height before:bg-accent-400 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
        ],
      },
      size: {
        medium: "w-400 px-6 py-2.5",
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
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
