"use client";

import { createContext, useContext } from "react";

type DrawerContextProps = {
  isOpen: boolean;
  isVisible: boolean;
  onClose: () => void;
  onOpen: (value: string) => void;
  currentValue: string;
};

export const DrawerContext = createContext<DrawerContextProps | undefined>(
  undefined
);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "DrawerProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
