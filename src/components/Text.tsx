import React from "react";
import type {  VariantProps } from "class-variance-authority";
import { textVariants } from "../utils/textVariants";

interface TextProps extends VariantProps<typeof textVariants>, React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(as, { className: textVariants({ variant, className }), ...props }, children);
}
