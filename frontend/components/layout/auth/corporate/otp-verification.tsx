import { Box, Button, TextInput } from "@/components/ui";
import { toast } from "@/components/ui/Toast";
import { useAuth } from "@/context/auth";
import { useAuthFlow } from "@/context/auth-flow";
import { createUserCorporate, sendOtp, verifyOTP } from "@/helper/api";
import React, { useState } from "react";

const OTPVerification = () => {
  const { corporateForm, setRegState } = useAuthFlow();

  const [code, setCode] = useState("");
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const { signIn } = useAuth();

  const verifyOtp = async () => {
    const res = await verifyOTP({
      email: corporateForm.company_email,
      otp: code,
    });
    if (res) {
      if (res?.success) {
        toast.success(res.message);
        const token = await createUserCorporate({ ...corporateForm });
        signIn(token);
        if (token) setRegState("Success");
      } else {
        setErr(true);
        setMsg(res?.message);
      }
    }
  };

  const reSend = async () => {
    await sendOtp({
      email: corporateForm.company_email,
      name: corporateForm.company_name,

      onSuccess() {
        toast.success("We've sent your OTP. Please check your email.");
      },
    });
  };

  return (
    <>
      <Box column className="gap-4" fullWidth>
        <span className="text tracking-wide !leading-snug">
          Enter the 4-digit code that was sent to {corporateForm.company_email}
        </span>
        <TextInput
          placeholder="Enter code"
          maxLength={4}
          error={err}
          errorMessage={msg}
          value={code}
          onChange={(e) => setCode(e.target.value)}
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
      </Box>
      <Box itemsCenter between fullWidth className="mt-auto">
        <Button
          variant="ghost"
          colorScheme="primary"
          onClick={() => setRegState("LoginDetails")}
        >
          Back
        </Button>
        <Button
          onClick={verifyOtp}
          colorScheme="danger"
          variant="ghost"
          className="uppercase"
          disabled={!code}
        >
          Finish
        </Button>
      </Box>
    </>
  );
};

export default OTPVerification;
