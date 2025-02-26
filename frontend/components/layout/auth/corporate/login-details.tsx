import { Box } from "@/components/ui";
import FormWithLabel from "@/components/ui/form-with-label";
import React from "react";
import NextButton from "../shared/next-button";
import { useAuthFlow } from "@/context/auth-flow";
import { sendOtp } from "@/helper/api";

const LoginDetails = () => {
  const { corporateErrors, corporateForm, handleCorporateForm } = useAuthFlow();

  const send = async () => {
    await sendOtp({
      email: corporateForm.company_email,
      name: corporateForm.company_name,
    });
  };

  return (
    <>
      <Box column>
        <FormWithLabel
          label="Company Email"
          value={corporateForm.company_email}
          name="company_email"
          placeholder="Enter your Company email address"
          onChange={handleCorporateForm}
          error={!!corporateErrors.company_email}
          errorMessage={corporateErrors.company_email}
        />
        <FormWithLabel
          label="Password"
          value={corporateForm.password}
          name="password"
          placeholder="Enter your Password"
          onChange={handleCorporateForm}
          error={!!corporateErrors.password}
          errorMessage={corporateErrors.password}
        />
        <FormWithLabel
          label="Confirm Password"
          placeholder="Confirm Password"
          value={corporateForm.confirm_password}
          name="confirm_password"
          onChange={handleCorporateForm}
          error={!!corporateErrors.confirm_password}
          errorMessage={corporateErrors.confirm_password}
        />

        <NextButton
          next_stage="OTP"
          disabled={
            !corporateForm.password ||
            !corporateForm.confirm_password ||
            !corporateForm.company_email
          }
          onClick={send}
        >
          Verify Account
        </NextButton>
      </Box>
    </>
  );
};

export default LoginDetails;
