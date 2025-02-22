"use client";

import React, { useState } from "react";
import { AuthCard } from "../cards";
import FormWithLabel from "../ui/form-with-label";
import { Box, Button } from "../ui";
import { resetPassword } from "@/helper/api";
import { useRouter } from "next/navigation";
import { TextEncode } from "@/utils/global";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();

  const submit = async () => {
    const result = await resetPassword(email);
    if (!result.isValid) {
      setErr(true);
      setErrMsg(result.message);
      return;
    }

    setErr(false);
    const id = TextEncode.encode(email);
    const u_name = TextEncode.encode(result.name);
    router.push(
      `/auth/sign-in/reset-password/otp-validation?id=${id}&u=${u_name}`
    );
  };

  return (
    <AuthCard
      header="Password Reset"
      className="gap-3"
      subHeader="Reset your password to continue trading on ComX"
    >
      <FormWithLabel
        value={email}
        error={err}
        errorMessage={errMsg}
        onChange={(e) => setEmail(e.target.value)}
        label="Enter the Email Address you registered with"
        placeholder="Enter your Email"
      />
      <p className=" font-roboto font-normal text-xs text-center text-muted">
        Note that you’ll be sent an OTP to the email address provided
      </p>
      <Box itemsCenter between fullWidth className="max-[550px]:flex-wrap mt-8">
        <Button variant="ghost" onClick={() => router.back()}>
          Back
        </Button>
        <Button
          onClick={submit}
          colorScheme="danger"
          variant="ghost"
          disabled={!email}
        >
          Proceed
        </Button>
      </Box>
    </AuthCard>
  );
};

export default ResetPassword;
