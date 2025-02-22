import { ButtonInterface } from "@/types/ui";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import Icon from "./Icon";

const Button: React.FC<ButtonInterface> = ({
  children,
  variant,
  colorScheme,
  className,
  fullWidth,
  disabled,
  isLoading,
  between,
  icon,
  iconSize,
  ...props
}) => {
  return (
    <button
      className={clx(
        button({
          variant,
          colorScheme,
          fullWidth,
          between,
          disabled: disabled || isLoading,
        }),
        className
      )}
      {...props}
    >
      {isLoading ? <CgSpinner className="animate-spin" size={26} /> : children}
      {icon && <Icon size={iconSize} icon={icon} />}
    </button>
  );
};

export default Button;

const button = cva(
  `h-46 rounded-xs font-roboto text-sm flex px-5 items-center
   justify-center gap-5 active:scale-95 transition-transform font-medium`,
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      disabled: {
        true: "cursor-not-allowed pointer-events-none opacity-80",
      },
      between: {
        true: "justify-between",
      },
      variant: {
        solid: "",
        outline: "bg-white border-btn-outline hover:bg-gray-50 border",
        ghost: "",
        surface: "",
      },
      colorScheme: {
        danger: "",
        success: "",
        primary: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        class: "bg-primary text-white hover:bg-primary/90",
      },
      {
        variant: "solid",
        colorScheme: "danger",
        class: "bg-red-500 text-white hover:bg-red-600",
      },
      {
        variant: "solid",
        colorScheme: "success",
        class: "bg-green-700 hover:bg-green-600 text-white",
      },
      {
        variant: "surface",
        colorScheme: "danger",
        class: "bg-red-100 hover:bg-red-200 text-red-500",
      },
      {
        variant: "surface",
        colorScheme: "success",
        class: "bg-green-100 hover:bg-green-200 text-green-500",
      },
      {
        variant: "surface",
        colorScheme: "primary",
        class: "bg-slate-100 hover:bg-slate-200 text-black",
      },
      {
        variant: "ghost",
        colorScheme: "danger",
        class: "bg-transparent hover:bg-red-200 text-red-500",
      },
      {
        variant: "ghost",
        colorScheme: "success",
        class: "bg-transparent hover:bg-green-200 text-green-500",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        class: "bg-transparent hover:bg-slate-200 text-black",
      },
      {
        variant: "outline",
        colorScheme: "success",
        class: "border-green-500 text-green-500 border bg-transparent",
      },
      {
        variant: "outline",
        colorScheme: "danger",
        class: "border-red-500 text-red-500 border bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      fullWidth: false,
      disabled: false,
      between: false,
    },
  }
);
