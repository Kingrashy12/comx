export type OTPResponse = {
  otp: string;
  expiresAt: string;
};

export type OTPVerificationResponse = {
  success: boolean;
  message: string;
};

export type SendOTPForm = {
  name: string;
  email: string;
  onSuccess?: () => void;
  onProcessing?: () => void;
};

export type SignInForm = {
  email: string;
  password: string;
  onSuccess?: () => void;
};

export type CorporateAuthRes = {
  company_name: string;
  type_of_business: string;
  date_of_incorporation: Date | string;
  company_email: string;
  id: number;
};

export type IndividualAuthRes = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  id: number;
};

export type ResetPasswordRes = {
  isValid: boolean;
  message: string;
  name: string;
};

export type ChangePasswordRes = {
  message: string;
  success: boolean;
};
