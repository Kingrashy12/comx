import { BoxInterface } from "@/types/ui";
import { clx } from "@/utils/clx";
import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

const Box = forwardRef<HTMLDivElement, BoxInterface>(
  (
    {
      children,
      fullWidth,
      className,
      center,
      itemsCenter,
      column,
      between,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clx(
          box({ center, fullWidth, itemsCenter, between, column }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Box;
Box.displayName = "Box";

const box = cva("flex reltaive", {
  variants: {
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
    column: {
      true: "flex-col",
      false: "flex-row",
    },
    center: {
      true: "items-center justify-center",
    },
    between: {
      true: "justify-between",
    },
    itemsCenter: {
      true: "items-center",
    },
  },
  defaultVariants: {
    between: false,
    itemsCenter: false,
    center: false,
    column: false,
    fullWidth: false,
  },
});
