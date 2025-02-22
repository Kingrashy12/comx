"use client";

import React from "react";
import { Box, Button } from "../ui";
import { AuthCard } from "../cards";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  return (
    <Box className="gap-8 flex-col" fullWidth center>
      <AuthCard header="Sign in to ComX" subHeader="Welcome to ComX">
        <Button
          colorScheme="success"
          onClick={() => router.push("/auth/sign-in")}
        >
          Sign In
        </Button>
      </AuthCard>
      <AuthCard header="Create an Account" subHeader="Join the Family">
        <Button onClick={() => router.push("/auth/register")}>Register</Button>
      </AuthCard>
    </Box>
  );
};

export default Welcome;
