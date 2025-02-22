"use client";

import { useModal } from "@/context/modal";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

type PanelProp = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const ModalPanel: React.FC<PanelProp> = ({ children, className, size }) => {
  const { isVisible } = useModal();
  return (
    <div className={clx(panel({ size, isVisible }), className)}>{children}</div>
  );
};

export default ModalPanel;

const panel = cva(
  "bg-white flex flex-col p- shadow rounded-xs max-h-[95%] h-auto",
  {
    variants: {
      size: {
        sm: "w-[300px] max-[550px]:w-[95%]",
        md: "w-[400px] max-[550px]:w-[95%]",
        lg: "w-[500px] max-[550px]:w-[95%]",
        xl: "w-[600px] max-[550px]:w-[95%]",
        full: "w-10/12 max-[550px]:w-[95%]",
      },
      isVisible: {
        true: "animate-walkIn",
        false: "animate-walkOut",
      },
    },
    defaultVariants: {
      size: "sm",
      isVisible: false,
    },
  }
);
