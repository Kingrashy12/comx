import { SuccessSvg } from "@/assets";
import { Box, Button } from "@/components/ui";
import { useAuthFlow } from "@/context/auth-flow";
import { clx } from "@/utils/clx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AuthSuccess = () => {
  const { individualForm } = useAuthFlow();
  const router = useRouter();
  return (
    <Box fullWidth center className="gap-4" column>
      <Image alt="success" src={SuccessSvg} width={273} height={273} />
      <h2 className="font-roboto text-3xl font-normal text-[##1B1E24]">
        Registration Complete
      </h2>
      <p className={clx("text font-light text-[#252631] text-center")}>
        Dear [{individualForm.first_name}]. Your registration is now complete.
        You may proceed to your dashboard and start trading commodities.
      </p>
      <Button
        className="font-medium uppercase text-sm"
        colorScheme="danger"
        variant="ghost"
        onClick={() => router.push("/dashboard")}
      >
        go to dashboard
      </Button>
    </Box>
  );
};

export default AuthSuccess;
