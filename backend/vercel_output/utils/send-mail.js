"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail = async ({ to, subject, html }) => {
    try {
        const transport = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html: html,
        };
        const info = await transport.sendMail(mailOptions);
        console.log("✅ Email sent:", info.response);
        return info;
    }
    catch (error) {
        console.error("❌ Email sending failed:", error);
        throw new Error("Email sending failed");
    }
};
exports.sendMail = sendMail;
