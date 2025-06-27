import { closeLoader, openLoader } from "@/components/ui/BackgroundLoader";
import { toast } from "@/components/ui/Toast";
import apiClient, { getError } from "@/constants/apiClient";
// import { apiClient } from "@/constants/nexu.client";
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

export const sendOtp = async (form: SendOTPForm) => {
  openLoader(true);
  try {
    const res = await apiClient.post<OTPResponse>("/otp/send", {
      ...form,
    });
    form.onSuccess?.();
    return res.data;
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
    const res = await apiClient.patch<OTPVerificationResponse>("/otp/verify", {
      ...form,
    });
    return res.data;
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
    const res = await apiClient.post<string>("/auth/register", {
      type: "corporate",
      email: form.company_email,
      ...form,
    });
    global?.localStorage?.setItem("COMX_AUTH", JSON.stringify(res.data));
    return res.data;
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
    const res = await apiClient.post<string>("/auth/register", {
      type: "individual",
      ...form,
    });
    global?.localStorage?.setItem("COMX_AUTH", JSON.stringify(res.data));
    return res.data;
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
    const res = await apiClient.post<{ message: string; token: string }>(
      "/auth/login",
      form
    );
    toast.success(res.data.message);
    global?.localStorage?.setItem("COMX_AUTH", res.data.token);

    return res.data;
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
    const res = await apiClient.post<ResetPasswordRes>("/auth/reset-password", {
      email,
    });
    toast.success(res.data.message);
    return res.data;
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
    const res = await apiClient.post<ChangePasswordRes>(
      "/reset-password/new-password",
      {
        ...form,
      }
    );
    toast.success(res.data.message);
    return res.data;
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
