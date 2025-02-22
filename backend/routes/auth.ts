import { nexuRouter, validateEmail, validateFields } from "nexujs";
import {
  changePassword,
  login,
  registerAccount,
  resetPassword,
} from "../controller/auth";

const AuthRoutes = nexuRouter;

AuthRoutes.post(
  "/register",
  validateFields(["type", "password"]),
  validateEmail,
  registerAccount
);

AuthRoutes.post(
  "/login",
  validateFields(["email", "password"]),
  validateEmail,
  login
);

AuthRoutes.post(
  "/reset-password",
  validateFields(["email"]),
  validateEmail,
  resetPassword
);

AuthRoutes.post(
  "/reset-password/new-password",
  validateFields(["email", "password", "confirm_password"]),
  validateEmail,
  changePassword
);

export = AuthRoutes;
