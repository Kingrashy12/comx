"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = exports.sendOTP = exports.generateId = void 0;
const send_mail_1 = require("./send-mail");
const email_temp_1 = require("./email-temp");
const neon_1 = require("../config/neon");
const generateId = (length) => {
    const numbers = "0123456789";
    return Array.from({ length }, () => numbers.charAt(Math.floor(Math.random() * numbers.length))).join("");
};
exports.generateId = generateId;
const sendOTP = async (to, subject, name) => {
    try {
        const otp = (0, exports.generateId)(4);
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
        await (0, send_mail_1.sendMail)({ to, subject, html: (0, email_temp_1.OtpTemp)(name, otp) });
        await (0, neon_1.query)(`INSERT INTO otps (email, otp, expires_at) 
        VALUES ($1, $2, $3) 
        ON CONFLICT (email) 
        DO UPDATE SET otp = $2, expires_at = $3`, [to, otp, expiresAt]);
        return { otp, expiresAt };
    }
    catch (error) {
        throw new Error(`Failed to send otp: ${error.message}`);
    }
};
exports.sendOTP = sendOTP;
const verifyOtp = async (email, otp) => {
    const result = await (0, neon_1.query)(`SELECT * FROM otps WHERE email = $1 AND otp = $2`, [email, otp]);
    if (result?.length === 0) {
        return { success: false, message: "Invalid OTP" };
    }
    const expires_at = result[0]?.expires_at;
    if (new Date() > new Date(expires_at)) {
        return { success: false, message: "OTP has expired" };
    }
    await (0, neon_1.query)(`DELETE FROM otps WHERE email = $1`, [email]);
    return { success: true, message: "OTP verified successfully" };
};
exports.verifyOtp = verifyOtp;
