"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const otp_1 = require("../controller/otp");
const zoltra_1 = require("zoltra");
exports.routes = (0, zoltra_1.defineRoutes)([
    {
        method: "POST",
        path: "/send",
        handler: otp_1.SendOtp,
        middleware: [(0, zoltra_1.validateFields)(["email", "name"]), zoltra_1.validateEmail],
    },
    {
        method: "PATCH",
        path: "/verify",
        handler: otp_1.VerifyOtp,
        middleware: [(0, zoltra_1.validateFields)(["email", "otp"]), zoltra_1.validateEmail],
    },
]);
