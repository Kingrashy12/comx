import { ZoltraHandler } from "zoltra";
import { sendOTP, verifyOtp } from "../utils/send-otp";
import { throwError } from "../utils/request";

export const SendOtp: ZoltraHandler = async (req, res) => {
  try {
    const { email, name } = req.body;

    const result = await sendOTP(email, "OTP Verification", name);
    res.status(200).json(result);
  } catch (error) {
    return throwError({ res, status: "500", error });
  }
};

export const VerifyOtp: ZoltraHandler = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const data = await verifyOtp(email, otp);
    if (data.success) {
      return res.status(200).json(data);
    } else return res.status(400).json(data);
  } catch (error) {
    return throwError({ res, status: "500", error });
  }
};
