import { SelectButtonInterface } from "@/types/ui";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

const SelectButton: React.FC<SelectButtonInterface> = ({
  children,
  active,
  className,
  disabled,
  ...props
}) => {
  return (
    <button className={clx(select({ active, disabled }), className)} {...props}>
      {children}
    </button>
  );
};

export default SelectButton;

const select = cva(
  `p-1 border rounded-xs cursor-pointer flex items-center justify-center
   h-[52px] w-[146px] active:scale-95 transition-transform`,
  {
    variants: {
      active: {
        true: "bg-primary text-white border-btn-outline hover:bg-primary/90",
        false: "bg-white text-button border-btn-outline hover:bg-gray-50",
      },
      disabled: {
        true: "cursor-not-allowed pointer-events-none opacity-80",
      },
    },
    defaultVariants: {
      disabled: false,
      active: false,
    },
  }
);
