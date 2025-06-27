import { SendOtp, VerifyOtp } from "../controller/otp";
import { defineRoutes, validateEmail, validateFields } from "zoltra";

export const routes = defineRoutes([
  {
    method: "POST",
    path: "/send",
    handler: SendOtp,
    middleware: [validateFields(["email", "name"]), validateEmail],
  },
  {
    method: "PATCH",
    path: "/verify",
    handler: VerifyOtp,
    middleware: [validateFields(["email", "otp"]), validateEmail],
  },
]);
