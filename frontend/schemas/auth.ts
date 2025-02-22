import { AuthStage } from "@/types/global";
import { z } from "zod";

export const individualFormSchema = z.object({
  first_name: z.string().min(5, "First name is required"),
  last_name: z.string().min(5, "Last name is required"),
  email: z.string().email("Email address is incorrect."),
  phone_number: z
    .string()
    .min(11, "Phone number must be 11 characters")
    .max(11, "Phone number must not exceet 11 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirm_password: z
    .string()
    .min(6, "Confirm password must be at least 6 characters"),
});

export const corporateFormSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  type_of_business: z.string().min(1, "Business type is required"),
  date_of_incorporation: z.date(),
  company_email: z.string().email("Email address is incorrect."),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirm_password: z
    .string()
    .min(6, "Confirm password must be at least 6 characters"),
});

export const getCorporateStageSchema = (stage: AuthStage) => {
  const stageFields = {
    BasicInfo: corporateFormSchema.pick({
      company_name: true,
      type_of_business: true,
      date_of_incorporation: true,
    }),
    LoginDetails: corporateFormSchema
      .pick({
        company_email: true,
        password: true,
        confirm_password: true,
      })
      .refine((data) => data.password === data.confirm_password, {
        message: "Passwords must match",
        path: ["confirm_password"],
      }),

    // OTP: () => {},
    // Success: () => {},
  };

  // @ts-expect-error otp and success staage are not required
  return stageFields[stage];
};

export const getIndividualStageSchema = (stage: AuthStage) => {
  const stageFields = {
    BasicInfo: individualFormSchema.pick({
      first_name: true,
      last_name: true,
      email: true,
    }),
    LoginDetails: individualFormSchema
      .pick({
        phone_number: true,
        password: true,
        confirm_password: true,
      })
      .refine((data) => data.password === data.confirm_password, {
        message: "Passwords must match",
        path: ["confirm_password"],
      }),
    // OTP: () => {},
    // Success: () => {},
  };

  // @ts-expect-error otp and success staage are not required
  return stageFields[stage];
};
