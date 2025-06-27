"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.resetPassword = exports.login = exports.registerAccount = void 0;
const password_1 = require("../utils/password");
// import { query } from "../config/postgresClient";
const auth_1 = require("../utils/auth");
const sign_token_1 = require("../utils/sign-token");
const send_otp_1 = require("../utils/send-otp");
const send_mail_1 = require("../utils/send-mail");
const email_temp_1 = require("../utils/email-temp");
const neon_1 = require("../config/neon");
const request_1 = require("../utils/request");
const registerAccount = async (req, res, next) => {
    const { type, password, confirm_password, ...details } = req.body;
    try {
        if (password !== confirm_password) {
            return res.status(400).json({
                error: "Passwords do not match",
            });
        }
        const hashedPassword = await (0, password_1.hashPassword)(password);
        if (type === "individual") {
            const { first_name, last_name, email, phone_number } = details;
            const userExists = await (0, auth_1.checkUserExists)(email, phone_number);
            if (userExists) {
                return res.status(403).json({
                    error: "User Already exists",
                    message: "An account with this email or phone number already exists.",
                });
            }
            const user = await (0, auth_1.createIndividual)({
                first_name,
                last_name,
                email,
                phone_number,
                password: hashedPassword,
            });
            return res.status(200).json((0, sign_token_1.signIndividual)(user));
        }
        else if (type === "corporate") {
            const { company_name, type_of_business, date_of_incorporation, company_email, } = details;
            const companyExists = await (0, auth_1.checkCompanyExists)(company_email);
            if (companyExists) {
                return res.status(403).json({
                    error: "Company Already Exists",
                    message: "A company with this email already exists.",
                });
            }
            const corporate = await (0, auth_1.createCorporate)({
                company_email,
                company_name,
                password: hashedPassword,
                date_of_incorporation,
                type_of_business,
            });
            return res.status(200).json((0, sign_token_1.signCorporate)(corporate));
        }
    }
    catch (error) {
        return (0, request_1.throwError)({ res, status: "500", error });
    }
};
exports.registerAccount = registerAccount;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user;
        let type;
        let result = await (0, neon_1.query)(`SELECT * FROM individuals WHERE email = $1`, [
            email,
        ]);
        if (result.length !== 0) {
            user = result[0];
            type = "individual";
        }
        else {
            result = await (0, neon_1.query)(`SELECT * FROM corporates WHERE company_email = $1`, [email]);
            if (result.length !== 0) {
                user = result[0];
                type = "corporate";
            }
        }
        if (!user) {
            return (0, request_1.throwError)({
                res,
                status: "401",
                message: "Invalid email or password.",
                error: "Authentication failed",
            });
        }
        const isValid = await (0, password_1.comparePassword)(password, user.password);
        if (!isValid) {
            return (0, request_1.throwError)({
                res,
                status: "401",
                message: "Invalid email or password.",
                error: "Authentication failed",
            });
        }
        delete user.password;
        return res.status(200).json({
            message: "Login Successful",
            token: type === "individual"
                ? (0, sign_token_1.signIndividual)(user)
                : (0, sign_token_1.signCorporate)(user),
        });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const resetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        let accountExits;
        let name;
        const user = await (0, neon_1.query)(`SELECT * FROM individuals WHERE email = $1`, [
            email,
        ]);
        const corp = await (0, neon_1.query)(`SELECT * FROM corporates WHERE company_email = $1`, [email]);
        if (user.length !== 0) {
            accountExits = true;
            name = user[0].first_name;
        }
        else if (corp.length !== 0) {
            accountExits = true;
            name = corp[0].company_name;
        }
        else {
            accountExits = false;
        }
        if (!accountExits) {
            return (0, request_1.throwError)({
                status: "404",
                res,
                message: "Account not found",
            });
        }
        await (0, send_otp_1.sendOTP)(email, "Reset Password", name);
        res.status(200).json({
            isValid: true,
            message: "We've sent your OTP. Please check your email.",
            name,
        });
    }
    catch (error) {
        return (0, request_1.throwError)({
            res,
            status: "500",
            error,
            message: "Internal server error",
        });
    }
};
exports.resetPassword = resetPassword;
const changePassword = async (req, res) => {
    const { email, password, confirm_password } = req.body;
    try {
        if (password !== confirm_password) {
            return (0, request_1.throwError)({
                res,
                status: "400",
                message: "Passwords do not match.",
            });
        }
        const hashedPassword = await (0, password_1.hashPassword)(password);
        const updateIndividual = await (0, neon_1.query)(`UPDATE individuals SET password = $1 WHERE email = $2 RETURNING first_name`, [hashedPassword, email]);
        if (updateIndividual.length > 0) {
            const firstName = updateIndividual[0].first_name;
            await sendPasswordChangeEmail(email, firstName);
            return successResponse(res);
        }
        // If no individual found, update password for a corporate account
        const updateCorporate = await (0, neon_1.query)(`UPDATE corporates SET password = $1 WHERE company_email = $2 RETURNING company_name`, [hashedPassword, email]);
        if (updateCorporate.length > 0) {
            const companyName = updateCorporate[0].company_name;
            await sendPasswordChangeEmail(email, companyName);
            return successResponse(res);
        }
        return (0, request_1.throwError)({ res, status: "404", message: "User not found." });
    }
    catch (error) {
        return (0, request_1.throwError)({
            res,
            status: "500",
            message: "Internal server error.",
            error,
        });
    }
};
exports.changePassword = changePassword;
// Helper function to send email notification
const sendPasswordChangeEmail = async (email, name) => {
    await (0, send_mail_1.sendMail)({
        to: email,
        subject: "Your Password Has Been Changed",
        html: (0, email_temp_1.PasswordChangeTemp)(name),
    });
};
// Helper function for success response
const successResponse = (res) => {
    return res.status(200).json({
        message: "Your password has been successfully updated!",
        success: true,
    });
};
