import { NexuHandler, throwError } from "nexujs";
import { sendOTP, verifyOtp } from "../utils/send-otp";

export const SendOtp: NexuHandler = async (req, res) => {
  try {
    const { email, name } = req.body;

    const result = await sendOTP(email, "OTP Verification", name);
    res.status(200).json(result);
  } catch (error) {
    return throwError({ res, status: "500", error });
  }
};

export const VerifyOtp: NexuHandler = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const data = await verifyOtp(email, otp);
    res.status(200).json(data);
  } catch (error) {
    return throwError({ res, status: "500", error });
  }
};
