import React, { forwardRef } from "react";
import Box from "./Box";
import { cva } from "class-variance-authority";
import { clx } from "@/utils/clx";
import Icon from "./Icon";
import { InputWithIconInterface } from "@/types/ui";
// "outline-none border-none w-full h-full p-1"
const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconInterface>(
  (
    { variant, value, onChange, name, className, inputClass, icon, ...props },
    ref
  ) => {
    return (
      <Box className={clx(input({ variant }), className)}>
        {icon && <Icon icon={icon} size={19} className="text-neutral-400" />}
        <input
          ref={ref}
          onChange={onChange}
          value={value}
          name={name}
          className={clx(
            "h-52 outline-none border-none w-full bg-transparent placeholder:text-muted font-roboto text-text pl-4 text-sm-bold",
            inputClass
          )}
          {...props}
        />
      </Box>
    );
  }
);

export default InputWithIcon;
InputWithIcon.displayName = "InputWithIcon";

const input = cva("items-center w-full rounded-sm p-1 px-2", {
  variants: {
    variant: {
      outline: "bg-white border-btn-outline outline-none",
      surface: "bg-gray-50 border border-neutral-100 outline-none",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});
