"use client";

import { ModalContext } from "@/context/modal";
import React, { useState } from "react";

let onOpen: (value: string) => void;
let onClose: () => void;

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  onOpen = (value: string) => {
    setCurrentValue(value);
    setIsVisible(true);
    setIsOpen(true);
  };

  onClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 400);
  };

  return (
    <ModalContext.Provider
      value={{ currentValue, onClose, onOpen, isOpen, isVisible }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export { onClose as closeModal, onOpen as openModal };
