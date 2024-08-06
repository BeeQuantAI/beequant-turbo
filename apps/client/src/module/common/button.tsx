import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "border-primary-400 relative overflow-hidden rounded border text-xs transition-all duration-500",
  {
    variants: {
      variant: {
        primary: "bg-primary-400",
        secondary: "bg-transparent",
      },
      size: {
        medium: "w-400 mb-5 px-6 py-2.5",
      },
      animation: {
        "growing-bubble-tl-primary":
          "before:transition-width before:transition-height before:bg-primary-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        "growing-bubble-tl-secondary":
          "before:transition-width before:transition-height before:bg-primary-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
      },
      textColor: {
        white: "text-neutral-50",
        blue: "text-primary-300",
      },
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
  animation,
  size,
  textColor,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        animation,
        textColor,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
