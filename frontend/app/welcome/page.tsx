import { Logo } from "@/assets";
import { Box, SupportIcon, Welcome } from "@/components";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Welcome to ComX",
};

const Page = () => {
  return (
    <Box fullWidth column center className="gap-7">
      <Image
        alt="Logo"
        src={Logo.src}
        width={161}
        height={81}
        className="max-[550px]:w-[130px]"
      />
      <Welcome />
      <SupportIcon />
    </Box>
  );
};

export default Page;
