import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Skeleton } from "./Skeleton";
import { Icon } from "./Icon";
import { Text } from "./Text";

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const buttonTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["name"];
  isLoading?: boolean;
}

export function Button({
  className,
  children,
  disabled,
  variant,
  size,
  icon: IconComponent,
  isLoading,
  ...rest
}: ButtonProps) {
  if (isLoading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...rest}
    >
      {IconComponent && (
        <Icon
          name={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text className={buttonTextVariants({ variant })} variant="body-md-bold">
        {children}
      </Text>
    </button>
  );
}
