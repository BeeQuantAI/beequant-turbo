import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const labelVariants = cva(
  [
    "label",
    "cursor-pointer",
    "transition-all",
    "duration-500",
    "group-hover:text-primary-300",
  ],
  {
    variants: {
      color: {
        white: "text-white",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
      fontWeight: {
        normal: "font-normal",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      color: "white",
      size: "small",
      fontWeight: "normal",
    },
  },
);

type LabelProps = {
  children: React.ReactNode;
} & VariantProps<typeof labelVariants>;

export const Label: React.FC<LabelProps> = ({
  children,
  color,
  size,
  fontWeight,
}) => {
  return (
    <span className={labelVariants({ color, size, fontWeight })}>
      {children}
    </span>
  );
};
