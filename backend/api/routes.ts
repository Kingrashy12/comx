import { withPrefix } from "zoltra";
import { routes as authRoutes } from "../routes/auth";
import { routes as otpRoutes } from "../routes/otp";

export default [
  ...withPrefix("user", authRoutes),
  ...withPrefix("otp", otpRoutes),
];
