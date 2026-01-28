import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./Icon";

const inputCheckboxWrapperVariants = cva(
  "inline-flex items-center justify-center relative group",
);

const inputCheckboxVariants = cva(
  "appearance-none peer flex items-center justify-center border-2 transition overflow-hidden border-green-base cursor-pointer hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
  {
    variants: {
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed",
      },
    },
    defaultVariants: {
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
    VariantProps<typeof inputCheckboxVariants> {}

export function InputCheckbox({
  size,
  disabled,
  className,
  ...rest
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled })}
        {...rest}
      />
      <Icon name="check" weight="bold" className={inputCheckboxIconVariants({ size })} />
    </label>
  );
}
