import { ModalHeaderType } from "@/types/ui";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

const DrawerHeader: React.FC<ModalHeaderType> = ({
  children,
  showBorder,
  className,
}) => {
  return (
    <div className={clx(header({ showBorder }), className)}>{children}</div>
  );
};

export default DrawerHeader;

const header = cva(
  "flex items-center justify-between bg-white rounded-tr-md p-[13px] w-full",
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
