"use client";

import { useDrawer } from "@/context/drawer";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";
import React from "react";

type PanelProp = {
  children: React.ReactNode;
  className?: string;
};

const DrawerPanel: React.FC<PanelProp> = ({ className, children }) => {
  const { isVisible } = useDrawer();
  return <div className={clx(panel({ isVisible }), className)}>{children}</div>;
};

export default DrawerPanel;

const panel = cva(
  "flex flex-col fixed w-[450px] max-[550px]:w-[85%] max-[330px]:w-full max-[550px]:rounded-none h-full left-0 top-0 bg-white bottom-0 transition-all duration-300 ease-in-out max-[1024px]:w-[60%] max-[768px]:w-[80%]",
  {
    variants: {
      isVisible: {
        true: "animate-slideInLeft",
        false: "animate-slideOutLeft",
      },
    },
  }
);
