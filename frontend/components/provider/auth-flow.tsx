"use client";

import { AuthFlow, AuthFlowContext } from "@/context/auth-flow";
import {
  corporateFormSchema,
  getCorporateStageSchema,
  getIndividualStageSchema,
  individualFormSchema,
} from "@/schemas/auth";

import { CorporateForm, IndividualForm } from "@/types/form";
import { AuthStage, FormSchemaError } from "@/types/global";
import { formatErrors } from "@/utils/global";
import React, { useState } from "react";

const AuthFlowProvider = ({ children }: { children: React.ReactNode }) => {
  const [corporateForm, setCorporateForm] = useState<CorporateForm>({
    company_name: "",
    type_of_business: "",
    date_of_incorporation: "",
    company_email: "",
    password: "",
    confirm_password: "",
  });

  const [individualForm, setIndividualForm] = useState<IndividualForm>({
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const [individualErrors, setIndividualErrors] = useState<FormSchemaError>({});
  const [corporateErrors, setCorporateErrors] = useState<FormSchemaError>({});

  const [account_type, setAccount_Type] = useState<"corporate" | "individual">(
    "individual"
  );

  const [regState, setRegState] = useState<AuthStage>("BasicInfo");

  const handleIndividualForm: AuthFlow["handleIndividualForm"] = (e) => {
    const { name, value } = e.target;

    const newFormData = { ...individualForm, [name]: value };
    const fieldSchema =
      individualFormSchema.shape[name as keyof typeof individualForm];

    const result = fieldSchema.safeParse(value);

    if (!result.success) {
      setIndividualErrors((prevErrors) => ({
        ...prevErrors,
        [name]: result.error.errors[0].message,
      }));
    } else {
      setIndividualErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }

    setIndividualForm(newFormData);
  };

  const handleCorporateForm: AuthFlow["handleCorporateForm"] = (e) => {
    const { name, value } = e.target;

    const newFormData = { ...corporateForm, [name]: value };
    const currentField =
      corporateFormSchema.shape[name as keyof typeof corporateForm];
    const result = currentField.safeParse(value);

    if (!result.success) {
      setCorporateErrors((prevErrors) => ({
        ...prevErrors,
        [name]: result.error.errors[0].message,
      }));
    } else {
      setCorporateErrors((prevErrors) => {
        const newError = { ...prevErrors };
        delete newError[name];
        return newError;
      });
    }

    setCorporateForm(newFormData);
  };

  const validateForms: AuthFlow["validateForms"] = (next_stage) => {
    if (account_type === "corporate") {
      const currentSchema = getCorporateStageSchema(regState);
      const result = currentSchema.safeParse(corporateForm);

      if (!result.success) {
        setCorporateErrors(formatErrors(result.error.errors));
        return;
      }

      setCorporateErrors({});
    } else {
      const currentSchema = getIndividualStageSchema(regState);
      const result = currentSchema.safeParse(individualForm);

      if (!result.success) {
        setIndividualErrors(formatErrors(result.error.errors));
        return;
      }

      setIndividualErrors({});
    }

    setRegState(next_stage);
  };

  return (
    <AuthFlowContext.Provider
      value={{
        corporateForm,
        individualForm,
        account_type,
        regState,
        setIndividualForm,
        setCorporateForm,
        setAccount_Type,
        setRegState,
        handleCorporateForm,
        handleIndividualForm,
        individualErrors,
        corporateErrors,
        validateForms,
      }}
    >
      {children}
    </AuthFlowContext.Provider>
  );
};

export default AuthFlowProvider;
