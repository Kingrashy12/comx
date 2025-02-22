import { Logo } from "@/assets";
import { Box, SupportIcon } from "@/components";
import Toaster from "@/components/ui/Toaster";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box fullWidth column center className="gap-7">
      <Image
        alt="Logo"
        src={Logo.src}
        width={161}
        height={81}
        className="max-[550px]:w-[130px]"
      />
      <Toaster />
      {children}
      <SupportIcon />
    </Box>
  );
};

export default AuthLayout;
