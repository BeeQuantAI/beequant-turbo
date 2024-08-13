import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface SocialButtonVariants extends VariantProps<typeof socialButtonVariants> {}
const socialButtonVariants = cva(
  "relative overflow-hidden rounded transition-all duration-500 size-[38px]",
  {
    variants: {
      variant: {
        facebook:[
          "bg-primary-700",
          "before:transition-width before:transition-height before:bg-white before:opacity-65 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-cover-layout-primary hover:bg-cover-layout-primary hover:before:-z-50",
        ],
        google:[
          "bg-red-primary",
          "before:transition-width before:transition-height before:bg-white before:opacity-65 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-cover-layout-primary hover:bg-cover-layout-primary hover:before:-z-50",
        ]
      },
    },
  },
);

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  SocialButtonVariants;

export function SocialButton({
  children,
  variant,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      className={socialButtonVariants({
        variant,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
