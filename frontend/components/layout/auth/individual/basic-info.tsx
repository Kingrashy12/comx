import { Box } from "@/components/ui";
import FormWithLabel from "@/components/ui/form-with-label";
import React from "react";
import AuthCategory from "../shared/auth-category";
import NextButton from "../shared/next-button";
import { useAuthFlow } from "@/context/auth-flow";

const BasicInfo = () => {
  const { individualForm, handleIndividualForm, individualErrors } =
    useAuthFlow();

  const erros =
    individualErrors.first_name ||
    individualErrors.last_name ||
    individualErrors.email;

  return (
    <>
      <AuthCategory />
      <Box column>
        <Box
          itemsCenter
          fullWidth
          className="gap-2 h-full max-[550px]:flex-col"
        >
          <FormWithLabel
            label="Your First Name"
            placeholder="Enter your First Name"
            name="first_name"
            value={individualForm.first_name}
            onChange={handleIndividualForm}
            error={!!individualErrors.first_name}
            errorMessage={individualErrors.first_name}
          />
          <FormWithLabel
            label="Your Last Name"
            placeholder="Enter your Last Name"
            name="last_name"
            value={individualForm.last_name}
            onChange={handleIndividualForm}
            error={!!individualErrors.last_name}
            errorMessage={individualErrors.last_name}
          />
        </Box>
        <FormWithLabel
          label="Your Email"
          placeholder="Enter your Email"
          name="email"
          value={individualForm.email}
          onChange={handleIndividualForm}
          error={!!individualErrors.email}
          errorMessage={individualErrors.email}
        />
        <NextButton next_stage="LoginDetails" disabled={!!erros}>
          Next Step
        </NextButton>
      </Box>
    </>
  );
};

export default BasicInfo;
