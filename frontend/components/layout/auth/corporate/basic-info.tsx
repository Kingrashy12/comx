"use client";

import { openModal } from "@/components/provider/modal";
import { Box } from "@/components/ui";
import ButtonWithLabel from "@/components/ui/ButtonWithLabel";
import FormWithLabel from "@/components/ui/form-with-label";
import SelectWithLabel from "@/components/ui/SelectWithLabel";
import React from "react";
import { LuCalendar } from "react-icons/lu";
import AuthCategory from "../shared/auth-category";
import NextButton from "../shared/next-button";
import { useAuthFlow } from "@/context/auth-flow";
import { StrFun } from "@/utils/global";

const BasicInfo = () => {
  const { corporateErrors, corporateForm, handleCorporateForm } = useAuthFlow();

  const date = new Date(corporateForm.date_of_incorporation).toDateString();

  return (
    <>
      <AuthCategory />
      <Box column className="h-full">
        <FormWithLabel
          label="Company Name"
          placeholder="Enter your Company Name"
          value={corporateForm.company_name}
          name="company_name"
          onChange={handleCorporateForm}
          error={!!corporateErrors.company_name}
          errorMessage={corporateErrors.company_name}
        />
        <Box
          itemsCenter
          fullWidth
          className="gap-2 h-auto max-[550px]:flex-col"
        >
          <SelectWithLabel
            label="Type of Business"
            value={StrFun.capitalize(corporateForm.type_of_business)}
            error={!!corporateErrors.type_of_business}
            placeholder="Select Type of Business"
            onClick={() => openModal("select-business-type")}
          />

          <ButtonWithLabel
            error={!!corporateErrors.date_of_incorporation}
            label={"Date of Incorporation"}
            text={isNaN(new Date(date).getTime()) ? "Select Date" : date}
            icon={LuCalendar}
            selected={String(corporateForm.date_of_incorporation).length > 1}
            between
            onClick={() => openModal("date-of-incorporation")}
          />
        </Box>
        <NextButton next_stage="LoginDetails">Next Step</NextButton>
      </Box>
    </>
  );
};

export default BasicInfo;
