import { ModalContentType } from "@/types/ui";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

const ModalContent: React.FC<ModalContentType> = ({
  children,
  className,
  centerContent,
}) => {
  return (
    <div className={clx(content({ centerContent }), className)}>{children}</div>
  );
};

export default ModalContent;

const content = cva(
  "flex flex-col p-3 bg-white select-open:scrollbar-none overflow-y-auto h-full m-[5px 0] gap-[16px]",
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
