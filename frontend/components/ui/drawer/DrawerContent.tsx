import { ModalContentType } from "@/types/ui";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

const Drawer: React.FC<ModalContentType> = ({
  children,
  className,
  centerContent,
}) => {
  return (
    <div className={clx(content({ centerContent }), className)}>{children}</div>
  );
};

export default Drawer;

const content = cva(
  "flex flex-col p-3 bg-white overflow-y-auto h-full gap-[16px]",
  {
    variants: {
      centerContent: {
        true: "items-center justify-center",
      },
    },
    defaultVariants: {
      centerContent: false,
    },
  }
);
