import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "border-accent-400 relative overflow-hidden rounded border text-sm transition-all duration-500",
  {
    variants: {
      variant: {
        default: [
          "bg-accent-250 text-neutral-50",
          "before:transition-width before:transition-height before:bg-accent-400 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        ],
        outline: [
          "text-accent-250 bg-transparent",
          "before:transition-width before:transition-height before:bg-accent-250 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
        ],
        facebook:[
          "bg-primary-700",
          "border-transparent",
          "before:transition-width before:transition-height before:bg-white before:opacity-65 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-cover-layout-primary hover:bg-cover-layout-primary hover:before:-z-50",
        ],
        google:[
          "bg-red-primary",
          "border-none",
          "before:transition-width before:transition-height before:bg-white before:opacity-65 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-cover-layout-primary hover:bg-cover-layout-primary hover:before:-z-50",
        ]
      },
      size: {
        small:"size-[38px]",
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
