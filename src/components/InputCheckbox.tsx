import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Skeleton } from "./Skeleton";
import { Icon } from "./Icon";

const inputCheckboxWrapperVariants = cva(
  "inline-flex items-center justify-center relative group",
);

const inputCheckboxVariants = cva(
  "appearance-none peer flex items-center justify-center transition overflow-hidden cursor-pointer ",
  {
    variants: {
      variant: {
        none: "",
        default:
          "border-2 border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
      },
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  },
);

const inputCheckboxIconVariants = cva(
  "absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white",
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface InputCheckboxProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCheckboxVariants> {
  isLoading?: boolean;
}

export function InputCheckbox({
  variant,
  size,
  disabled,
  className,
  isLoading,
  ...rest
}: InputCheckboxProps) {
  if (isLoading) {
    return (
      <Skeleton
        rounded="sm"
        className={inputCheckboxVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...rest}
      />
      <Icon
        name="check"
        weight="bold"
        className={inputCheckboxIconVariants({ size })}
      />
    </label>
  );
}
