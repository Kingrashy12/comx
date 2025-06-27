"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtp = exports.SendOtp = void 0;
const send_otp_1 = require("../utils/send-otp");
const request_1 = require("../utils/request");
const SendOtp = async (req, res) => {
    try {
        const { email, name } = req.body;
        const result = await (0, send_otp_1.sendOTP)(email, "OTP Verification", name);
        res.status(200).json(result);
    }
    catch (error) {
        return (0, request_1.throwError)({ res, status: "500", error });
    }
};
exports.SendOtp = SendOtp;
const VerifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const data = await (0, send_otp_1.verifyOtp)(email, otp);
        if (data.success) {
            return res.status(200).json(data);
        }
        else
            return res.status(400).json(data);
    }
    catch (error) {
        return (0, request_1.throwError)({ res, status: "500", error });
    }
};
exports.VerifyOtp = VerifyOtp;
