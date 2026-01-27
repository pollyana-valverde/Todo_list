import React from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex items-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
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
}

export function Button({
  className,
  children,
  disabled,
  variant,
  size,
  icon: IconComponent,
  ...rest
}: ButtonProps) {
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
