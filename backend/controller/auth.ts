import { NexuHandler, NexuResponse, throwError } from "nexujs";
import { comparePassword, hashPassword } from "../utils/password";
// import { query } from "../config/postgresClient";
import {
  checkCompanyExists,
  checkUserExists,
  createCorporate,
  createIndividual,
} from "../utils/auth";
import { signCorporate, signIndividual } from "../utils/sign-token";
import { CorporateAuthRes, IndividualAuthRes } from "../types/auth";
import { sendOTP } from "../utils/send-otp";
import { sendMail } from "../utils/send-mail";
import { PasswordChangeTemp } from "../utils/email-temp";
import { query } from "../config/neon";

export const registerAccount: NexuHandler = async (req, res) => {
  const { type, password, confirm_password, ...details } = req.body;

  try {
    if (password !== confirm_password) {
      return throwError({
        error: "Passwords do not match",
        res,
        status: "400",
      });
    }

    const hashedPassword = await hashPassword(password);

    if (type === "individual") {
      const { first_name, last_name, email, phone_number } = details;

      const userExists = await checkUserExists(email, phone_number);

      if (userExists) {
        return throwError({
          res,
          status: "403",
          error: "User Already exists",
          message: "An account with this email or phone number already exists.",
        });
      }

      const user = await createIndividual({
        first_name,
        last_name,
        email,
        phone_number,
        password: hashedPassword,
      });
      return res.status(200).json(signIndividual(user as IndividualAuthRes));
    } else if (type === "corporate") {
      const {
        company_name,
        type_of_business,
        date_of_incorporation,
        company_email,
      } = details;

      const companyExists = await checkCompanyExists(company_email);

      if (companyExists) {
        return throwError({
          res,
          status: "403",
          error: "Company Already Exists",
          message: "A company with this email already exists.",
        });
      }

      const corporate = await createCorporate({
        company_email,
        company_name,
        password: hashedPassword,
        date_of_incorporation,
        type_of_business,
      });
      return res.status(200).json(signCorporate(corporate as CorporateAuthRes));
    }
  } catch (error) {
    return throwError({ res, status: "500", error });
  }
};

export const login: NexuHandler = async (req, res) => {
  console.log("key_PIUBLIC:", process.env.NEXU_PUBLIC_KEY);
  console.log("key-PRIVATE:", process.env.NEXU_PRIVATE_KEY);
  try {
    const { email, password } = req.body;
    let user;
    let type;

    let result = await query(`SELECT * FROM individuals WHERE email = $1`, [
      email,
    ]);

    if (result.length !== 0) {
      user = result[0];
      type = "individual";
    } else {
      result = await query(
        `SELECT * FROM corporates WHERE company_email = $1`,
        [email]
      );

      if (result.length !== 0) {
        user = result[0];
        type = "corporate";
      }
    }

    if (!user) {
      return throwError({
        res,
        status: "400",
        message: "Invalid email or password.",
        error: "Authentication failed",
      });
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return throwError({
        res,
        status: "400",
        message: "Invalid email or password.",
        error: "Authentication failed",
      });
    }

    delete user.password;

    return res.status(200).json({
      message: "Login Successful",
      token:
        type === "individual"
          ? signIndividual(user as IndividualAuthRes)
          : signCorporate(user as CorporateAuthRes),
    });
  } catch (error) {
    return throwError({
      res,
      status: "500",
      error,
      message: "Internal server error",
    });
  }
};

export const resetPassword: NexuHandler = async (req, res) => {
  try {
    const { email } = req.body;
    let accountExits;
    let name;

    const user = await query(`SELECT * FROM individuals WHERE email = $1`, [
      email,
    ]);

    const corp = await query(
      `SELECT * FROM corporates WHERE company_email = $1`,
      [email]
    );

    if (user.length !== 0) {
      accountExits = true;
      name = user[0].first_name;
    } else if (corp.length !== 0) {
      accountExits = true;
      name = corp[0].company_name;
    } else {
      accountExits = false;
    }

    if (!accountExits) {
      return throwError({
        status: "404",
        res,
        message: "Account not found",
      });
    }

    await sendOTP(email, "Reset Password", name);

    res.status(200).json({
      isValid: true,
      message: "We've sent your OTP. Please check your email.",
      name,
    });
  } catch (error) {
    return throwError({
      res,
      status: "500",
      error,
      message: "Internal server error",
    });
  }
};

export const changePassword: NexuHandler = async (req, res) => {
  const { email, password, confirm_password } = req.body;

  try {
    if (password !== confirm_password) {
      return throwError({
        res,
        status: "400",
        message: "Passwords do not match.",
      });
    }

    const hashedPassword = await hashPassword(password);

    const updateIndividual = await query(
      `UPDATE individuals SET password = $1 WHERE email = $2 RETURNING first_name`,
      [hashedPassword, email]
    );

    if (updateIndividual.length! > 0) {
      const firstName = updateIndividual[0].first_name;
      await sendPasswordChangeEmail(email, firstName);
      return successResponse(res);
    }

    // If no individual found, update password for a corporate account
    const updateCorporate = await query(
      `UPDATE corporates SET password = $1 WHERE company_email = $2 RETURNING company_name`,
      [hashedPassword, email]
    );

    if (updateCorporate.length! > 0) {
      const companyName = updateCorporate[0].company_name;
      await sendPasswordChangeEmail(email, companyName);
      return successResponse(res);
    }

    return throwError({ res, status: "404", message: "User not found." });
  } catch (error) {
    return throwError({
      res,
      status: "500",
      message: "Internal server error.",
      error,
    });
  }
};

// Helper function to send email notification
const sendPasswordChangeEmail = async (email: string, name: string) => {
  await sendMail({
    to: email,
    subject: "Your Password Has Been Changed",
    html: PasswordChangeTemp(name),
  });
};

// Helper function for success response
const successResponse = (res: NexuResponse) => {
  return res.status(200).json({
    message: "Your password has been successfully updated!",
    success: true,
  });
};
