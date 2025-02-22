"use client";

import React from "react";
import Backdrop from "../Backdrop";
import { useModal } from "@/context/modal";
import { clx } from "@/utils/clx";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  value: string;
};

const Modal: React.FC<ModalProps> = ({ children, className, value }) => {
  const { onClose, isOpen, currentValue } = useModal();

  if (value !== currentValue) return null;

  return (
    <Backdrop
      onClose={onClose}
      open={isOpen}
      className={clx("items-center justify-center", className)}
    >
      {children}
    </Backdrop>
  );
};

export default Modal;
