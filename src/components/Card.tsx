import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-lg border border-gray-200 bg-white shadow-sm",
  {
    variants: {
      size: {
        none: "",
        md: "p-4",
      },
    },
    defaultVariants: {
      size: "none",
    },
  },
);

interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
    as?: keyof React.JSX.IntrinsicElements;
}

export function Card ({
    as = "div",
    size,
    className,
    children,
    ...rest
}: CardProps) {
    return React.createElement(
        as,
        {
            className: cardVariants({ size, className }),
            ...rest,
        },
        children
    );
}