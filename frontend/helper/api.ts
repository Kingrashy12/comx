import { closeLoader, openLoader } from "@/components/ui/BackgroundLoader";
import { toast } from "@/components/ui/Toast";
import { apiClient } from "@/constants/nexu.client";
import {
  ChangePasswordRes,
  OTPResponse,
  OTPVerificationResponse,
  ResetPasswordRes,
  SendOTPForm,
  SignInForm,
} from "@/types/api-res";
import {
  ChangePasswordForm,
  CorporateForm,
  IndividualForm,
} from "@/types/form";

import { getError } from "nexujs-client";

export const sendOtp = async (form: SendOTPForm) => {
  openLoader(true);
  try {
    const res = await apiClient.Post<OTPResponse>({
      url: "/otp/send",
      data: { ...form },
    });
    form.onSuccess?.();
    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
  } finally {
    closeLoader();
  }
};

export const verifyOTP = async (form: { email: string; otp: string }) => {
  openLoader(true);
  try {
    const res = await apiClient.Patch<OTPVerificationResponse>({
      url: "/otp/verify",
      data: { ...form },
    });
    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
  } finally {
    closeLoader();
  }
};

export const createUserCorporate = async (form: CorporateForm) => {
  openLoader(true);
  try {
    const res = await apiClient.Post<string>({
      url: "/auth/register",
      data: {
        type: "corporate",
        email: form.company_email,
        ...form,
      },
    });
    global?.localStorage?.setItem("COMX_AUTH", res);
    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
    return "";
  } finally {
    closeLoader();
  }
};

export const createUserIndividual = async (form: IndividualForm) => {
  openLoader(true);
  try {
    const res = await apiClient.Post<string>({
      url: "/auth/register",
      data: {
        type: "individual",
        ...form,
      },
    });
    global?.localStorage?.setItem("COMX_AUTH", res);
    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
    return "";
  } finally {
    closeLoader();
  }
};

export const login = async (form: SignInForm) => {
  openLoader(true);
  try {
    const res = await apiClient.Post<{ message: string; token: string }>({
      url: "/auth/login",
      data: form,
    });
    toast.success(res.message);
    global?.localStorage?.setItem("COMX_AUTH", res.token);

    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
    return { token: "", message: errMessage.message };
  } finally {
    closeLoader();
  }
};

export const resetPassword = async (email: string) => {
  openLoader(true);
  try {
    const res = await apiClient.Post<ResetPasswordRes>({
      url: "/auth/reset-password",
      data: { email },
    });
    toast.success(res.message);
    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
    return {
      isValid: false,
      message: String(errMessage.message),
      name: "",
    };
  } finally {
    closeLoader();
  }
};

export const changePassword = async (form: ChangePasswordForm) => {
  openLoader(true);
  try {
    const res = await apiClient.Post<ChangePasswordRes>({
      url: "/reset-password/new-password",
      data: { ...form },
    });
    toast.success(res.message);
    return res;
  } catch (error) {
    const errMessage = getError(error);
    toast.error(String(errMessage.message));
    return {
      success: false,
      message: String(errMessage.message),
    };
  } finally {
    closeLoader();
  }
};
