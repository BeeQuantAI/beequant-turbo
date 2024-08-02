import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(["btn"], {
  variants: {
    intent: {
      default: [],
      outline: ["btn-outline"],
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Button({ children, intent, ...props }: Props) {
  return (
    <button className={buttonVariants({ intent })} {...props}>
      {children}
    </button>
  );
}
