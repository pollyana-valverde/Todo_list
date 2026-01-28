import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

import { Skeleton } from "./Skeleton";
import { Text } from "./Text";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full ",
  {
    variants: {
      variant: {
        none: "",
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
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  isLoading?: boolean;
}

export function Badge({
  variant,
  size,
  className,
  children,
  isLoading,
  ...rest
}: BadgeProps) {
  if (isLoading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeSkeletonVariants({ size }),
          badgeVariants({ variant: "none" }),
          className,
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...rest}>
      <Text className={badgeTextVariants({ variant })} variant="body-sm-bold">
        {children}
      </Text>
    </div>
  );
}
