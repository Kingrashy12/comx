import {
  changePassword,
  login,
  registerAccount,
  resetPassword,
} from "../controllers/auth";
import { defineRoutes, validateEmail, validateFields } from "zoltra";

export const routes = defineRoutes([
  {
    method: "POST",
    path: "/register",
    handler: registerAccount,
    middleware: [validateFields(["type", "password"])],
  },
  {
    method: "POST",
    path: "/login",
    handler: login,
    middleware: [validateFields(["email", "password"]), validateEmail],
  },
  {
    method: "POST",
    path: "/reset-password",
    handler: resetPassword,
    middleware: [validateFields(["email"]), validateEmail],
  },
  {
    method: "POST",
    path: "/reset-password/new-password",
    handler: changePassword,
    middleware: [
      validateFields(["email", "password", "confirm_password"]),
      validateEmail,
    ],
  },
]);
