import { generateId } from "nexujs";
import { sendMail } from "./send-mail";
import { OtpTemp } from "./email-temp";
import { query } from "../config/neon";
// import { query } from "../config/postgresClient";

export const sendOTP = async (to: string, subject: string, name: string) => {
  try {
    const otp = generateId(4);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await sendMail({ to, subject, html: OtpTemp(name, otp) });
    await query(
      `INSERT INTO otps (email, otp, expires_at) 
        VALUES ($1, $2, $3) 
        ON CONFLICT (email) 
        DO UPDATE SET otp = $2, expires_at = $3`,
      [to, otp, expiresAt]
    );
    return { otp, expiresAt };
  } catch (error) {
    throw new Error(`Failed to send otp: ${(error as Error).message}`);
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  const result = await query(
    `SELECT * FROM otps WHERE email = $1 AND otp = $2`,
    [email, otp]
  );

  if (result?.length === 0) {
    return { success: false, message: "Invalid OTP" };
  }

  const expires_at = result[0]?.expires_at;

  if (new Date() > new Date(expires_at)) {
    return { success: false, message: "OTP has expired" };
  }

  await query(`DELETE FROM otps WHERE email = $1`, [email]);

  return { success: true, message: "OTP verified successfully" };
};
