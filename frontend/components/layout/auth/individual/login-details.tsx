import { Box, Label } from "@/components/ui";
import FormWithLabel from "@/components/ui/form-with-label";
import React from "react";
import NextButton from "../shared/next-button";
import { useAuthFlow } from "@/context/auth-flow";
import PhoneInput from "@/components/ui/PhoneInput";
import { sendOtp } from "@/helper/api";

const LoginDetails = () => {
  const { individualErrors, individualForm, handleIndividualForm } =
    useAuthFlow();

  const send = async () => {
    await sendOtp({
      email: individualForm.email,
      name: individualForm.first_name,
    });
  };

  return (
    <>
      <Box column>
        <FormWithLabel
          value={individualForm.password}
          label="Password"
          name="password"
          onChange={handleIndividualForm}
          error={!!individualErrors.password}
          errorMessage={individualErrors.password}
          placeholder="Enter your Password"
        />
        <FormWithLabel
          label="Confirm Password"
          placeholder="Confirm Password"
          value={individualForm.confirm_password}
          name="confirm_password"
          onChange={handleIndividualForm}
          error={!!individualErrors.confirm_password}
          errorMessage={individualErrors.confirm_password}
        />
        <Box className="flex-col gap-2">
          <Label value="Number" />
          <Box fullWidth className="gap-1 items-center">
            <PhoneInput />
          </Box>
        </Box>
        <NextButton next_stage="OTP" onClick={send}>
          Verify Account
        </NextButton>
      </Box>
    </>
  );
};

export default LoginDetails;
