"use client";

import React, { useState } from "react";
import { AuthCard } from "../cards";
import { Box, Button, TextInput } from "../ui";
import { sendOtp, verifyOTP } from "@/helper/api";
import { useRouter, useSearchParams } from "next/navigation";
import { TextEncode } from "@/utils/global";
import { toast } from "../ui/Toast";

const OTPValidation = () => {
  const [otp, setOTP] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();
  const id = useSearchParams().get("id");
  const u_name = useSearchParams().get("u");
  const email = TextEncode.decode(String(id));
  const name = TextEncode.decode(String(u_name));

  const submit = async () => {
    const res = await verifyOTP({ email, otp });
    if (!res?.success) {
      setErr(true);
      setErrMsg(String(res?.message));
    } else {
      setErr(false);
      toast.success(String(res.message));
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
      const encodedTime = TextEncode.encode(String(expiresAt));
      router.push(
        `/auth/sign-in/reset-password/new-password?time-frame=${encodedTime}&id=${id}`
      );
    }
  };

  const reSend = async () => {
    await sendOtp({
      email: email,
      name,

      onSuccess() {
        toast.success("We've sent your OTP. Please check your email.");
      },
    });
  };

  return (
    <AuthCard
      header="Password Reset"
      className="gap-3"
      subHeader="Reset your password to continue trading on ComX"
    >
      <span className="text tracking-wide !leading-snug">
        Enter the 4-digit code that was sent to {email}
      </span>
      <TextInput
        value={otp}
        maxLength={4}
        error={err}
        errorMessage={errMsg}
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter your Email"
      />

      <Button
        variant="ghost"
        className="disabled:text-muted"
        colorScheme="primary"
        // disabled
        onClick={reSend}
      >
        Resend
      </Button>

      <Box itemsCenter between fullWidth className="mt-auto">
        <Button
          variant="ghost"
          colorScheme="primary"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Button
          onClick={submit}
          colorScheme="danger"
          variant="ghost"
          className="uppercase"
          disabled={!otp}
        >
          Finish
        </Button>
      </Box>
    </AuthCard>
  );
};

export default OTPValidation;
