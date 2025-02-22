import { TextInputInterface } from "@/types/ui";
import React, { forwardRef } from "react";
import Box from "./Box";
import { cva } from "class-variance-authority";
import { clx } from "@/utils/clx";

const TextInput = forwardRef<HTMLInputElement, TextInputInterface>(
  (
    {
      variant,
      value,
      onChange,
      name,
      className,
      error,
      errorMessage,
      hideErr,
      inputClass,

      ...props
    },
    ref
  ) => {
    return (
      <Box fullWidth column className={clx("gap-3", className)}>
        <input
          ref={ref}
          onChange={onChange}
          value={value}
          name={name}
          className={clx(input({ variant, error }), inputClass)}
          {...props}
        />
        <div className={clx("min-h-[20px]", hideErr && "hidden")}>
          {error && errorMessage && (
            <p className="font-roboto text-sm text-red-500 mb-2">
              {errorMessage}
            </p>
          )}
        </div>
      </Box>
    );
  }
);

export default TextInput;
TextInput.displayName = "TextInput";

const input = cva(
  "h-52 rounded-xs border placeholder:text-muted font-roboto text-text pl-4 text-sm-bold",
  {
    variants: {
      variant: {
        outline: "bg-white border-btn-outline outline-none",
        surface: "bg-gray-50 border-neutral-100 outline-none",
      },
      error: {
        true: "border-red-500 text-red-500 caret-red-500",
      },
    },
    defaultVariants: {
      variant: "outline",
      error: false,
    },
  }
);
