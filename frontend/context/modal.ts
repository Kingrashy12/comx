"use client";

import { createContext, useContext } from "react";

type ModalContextProps = {
  isOpen: boolean;
  isVisible: boolean;
  onClose: () => void;
  onOpen: (value: string) => void;
  currentValue: string;
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error(
      "ModalProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
