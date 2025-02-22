"use client";

import { DrawerContext } from "@/context/drawer";
import React, { useState } from "react";

let onOpen: (value: string) => void;
let triggerDrawer: (value: string) => void;
let onClose: () => void;

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
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

  triggerDrawer = (value: string) => {
    if (isOpen) onClose();
    else onOpen(value);
  };

  return (
    <DrawerContext.Provider
      value={{ currentValue, onClose, onOpen, isOpen, isVisible }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;

export { onClose as closeDrawer, onOpen as openDrawer, triggerDrawer };
