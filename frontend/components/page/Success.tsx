"use client";

import React from "react";
import { AuthCard } from "../cards";
import { Box, Button } from "../ui";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <AuthCard header="" subHeader="">
      <Box center>
        <RiVerifiedBadgeFill
          color="green"
          size={120}
          className="p-4 bg-green-200 rounded-full"
        />
      </Box>
      <h1 className="text-2xl font-medium text-gray-800 font-roboto text-center">
        Password Updated Successfully!
      </h1>
      <p className="text-gray-600 font-roboto text-center">
        You can now log in with your new password.
      </p>
      <Button
        colorScheme="success"
        onClick={() => router.push("/auth/sign-in")}
      >
        Go to Login
      </Button>
    </AuthCard>
  );
};

export default Success;
