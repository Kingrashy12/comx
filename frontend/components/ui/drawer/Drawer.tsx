"use client";

import React from "react";
import Backdrop from "../Backdrop";
import { useDrawer } from "@/context/drawer";
import { clx } from "@/utils/clx";

type DrawerProps = {
  children?: React.ReactNode;
  className?: string;
  value: string;
};

const Drawer: React.FC<DrawerProps> = ({ children, className, value }) => {
  const { onClose, isOpen, currentValue } = useDrawer();

  if (value !== currentValue) return null;

  return (
    <Backdrop onClose={onClose} open={isOpen} className={clx(className)}>
      {children}
    </Backdrop>
  );
};

export default Drawer;
