import React from "react";
import { Text } from "./Text";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full ",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

export function Badge({
  variant,
  size,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...rest}>
      <Text className={badgeTextVariants({ variant })} variant="body-sm-bold">
        {children}
      </Text>
    </div>
  );
}
