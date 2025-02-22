import { nexuRouter, validateEmail, validateFields } from "nexujs";
import { SendOtp, VerifyOtp } from "../controller/otp";

const OTPRoutes = nexuRouter;

OTPRoutes.post(
  "/send",
  validateFields(["email", "name"]),
  validateEmail,
  SendOtp
);
OTPRoutes.patch(
  "/verify",
  validateFields(["email", "otp"]),
  validateEmail,
  VerifyOtp
);

export = OTPRoutes;
