"use client";

import { CorporateForm, IndividualForm } from "@/types/form";
import { AuthStage, FormSchemaError } from "@/types/global";
import { createContext, useContext } from "react";

export type AuthFlow = {
  regState: AuthStage;
  account_type: "corporate" | "individual";
  corporateForm: CorporateForm;
  individualForm: IndividualForm;
  setIndividualForm: (form: IndividualForm) => void;
  setCorporateForm: (form: CorporateForm) => void;
  setAccount_Type: (type: "corporate" | "individual") => void;
  setRegState: (state: AuthStage) => void;
  handleIndividualForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCorporateForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  individualErrors: FormSchemaError;
  corporateErrors: FormSchemaError;
  validateForms: (next_stage: AuthStage) => void;
};

export const AuthFlowContext = createContext<AuthFlow | undefined>(undefined);

export const useAuthFlow = () => {
  const context = useContext(AuthFlowContext);
  if (context === undefined) {
    throw new Error(
      "AuthFlowProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
