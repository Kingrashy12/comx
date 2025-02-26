"use client";

import React from "react";
import { Box } from "../ui";
import { AuthCard } from "../cards";
import { CorpAuth, UserAuth } from "../layout";
import { useAuthFlow } from "@/context/auth-flow";
import Status from "../ui/Status";
import { useAuthRedirect } from "@/hooks/redirect";
import Link from "next/link";
import { clx } from "@/utils/clx";

const Register = () => {
  const { regState, account_type } = useAuthFlow();

  useAuthRedirect();

  const Auth = {
    corporate: CorpAuth,
    individual: UserAuth,
  };

  const AuthComponent = Auth[account_type][regState];

  return (
    <Box column center fullWidth className="gap-5 py-5">
      <AuthCard
        hideHeader={regState === "Success"}
        header="Register new account"
        subHeader="Sign up for an account and start trading today"
      >
        <AuthComponent />
        <p
          className={clx(
            "font-roboto text font-normal text-center",
            regState === "Success" && "hidden"
          )}
        >
          Already have an account?{" "}
          <Link className="text-red-500 hover:underline" href="/auth/sign-in">
            Sign In
          </Link>
        </p>
      </AuthCard>

      <Status />
    </Box>
  );
};

export default Register;
