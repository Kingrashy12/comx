import { ModalHeaderType } from "@/types/ui";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

const ModalHeader: React.FC<ModalHeaderType> = ({
  children,
  showBorder,
  className,
}) => {
  return (
    <div className={clx(header({ showBorder }), className)}>{children}</div>
  );
};

export default ModalHeader;

const header = cva(
  "flex items-center justify-between border-none px-5 py-3 w-full",
  {
    variants: {
      showBorder: {
        true: "border-b border-b-btn-outline",
        false: "",
      },
    },
    defaultVariants: {
      showBorder: true,
    },
  }
);
