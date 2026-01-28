import type React from "react";
import { cx } from "class-variance-authority";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MainContentProps extends React.ComponentProps<"main"> {}

export function MainContent({
  children,
  className,
  ...rest
}: MainContentProps) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...rest}>
      {children}
    </main>
  );
}
