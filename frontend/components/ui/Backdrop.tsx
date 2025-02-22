import React, { MouseEvent } from "react";
import Box from "./Box";
import { clx } from "@/utils/clx";

type Drop = {
  children?: React.ReactNode;
  className?: string;
  open: boolean;
  onClose: () => void;
};

const Backdrop: React.FC<Drop> = ({ children, className, onClose, open }) => {
  const closeDrop = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Box
      className={clx(
        "fixed w-full h-full inset-0 z-[100] bg-black/50 transition-transform",
        open ? "flex" : "hidden",
        className
      )}
      onClick={closeDrop}
    >
      {children}
    </Box>
  );
};

export default Backdrop;
