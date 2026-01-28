import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "../utils/textVariants";

const inputTextVariants = cva(
  "border-b border-gray-200 focus:border-pink-base bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
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

interface InputTextProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputTextVariants> {}

export function InputText({
  size,
  disabled,
  className,
  ...rest
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className,
      )}
      {...rest}
    />
  );
}
