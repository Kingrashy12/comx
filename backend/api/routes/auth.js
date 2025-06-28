"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_1 = require("../controllers/auth");
const zoltra_1 = require("zoltra");
exports.routes = (0, zoltra_1.defineRoutes)([
    {
        method: "POST",
        path: "/register",
        handler: auth_1.registerAccount,
        middleware: [(0, zoltra_1.validateFields)(["type", "password"])],
    },
    {
        method: "POST",
        path: "/login",
        handler: auth_1.login,
        middleware: [(0, zoltra_1.validateFields)(["email", "password"]), zoltra_1.validateEmail],
    },
    {
        method: "POST",
        path: "/reset-password",
        handler: auth_1.resetPassword,
        middleware: [(0, zoltra_1.validateFields)(["email"]), zoltra_1.validateEmail],
    },
    {
        method: "POST",
        path: "/reset-password/new-password",
        handler: auth_1.changePassword,
        middleware: [
            (0, zoltra_1.validateFields)(["email", "password", "confirm_password"]),
            zoltra_1.validateEmail,
        ],
    },
]);
