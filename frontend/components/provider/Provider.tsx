"use client";

import React from "react";
import ModalProvider from "./modal";
import AuthFlowProvider from "./auth-flow";
import BackgroundLoader from "../ui/BackgroundLoader";
import AuthProvider from "./auth";
import DrawerProvider from "./drawer";
// import Toaster from "../ui/Toaster";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <AuthFlowProvider>
        <BackgroundLoader />
        <ModalProvider>
          <DrawerProvider>{children}</DrawerProvider>
        </ModalProvider>
      </AuthFlowProvider>
    </AuthProvider>
  );
};

export default Provider;
