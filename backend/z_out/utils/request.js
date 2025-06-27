"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
const zoltra_1 = require("zoltra");
const throwError = ({ error, res, status = "403", message, }) => {
    const logger = new zoltra_1.Logger("ErrorLog");
    const err = error?.message ? error.message : error;
    logger.error(err);
    return res.status(Number(status)).json({
        message: message || "Internal server error",
        error: typeof error === "object" && error?.message ? error.message : error,
    });
};
exports.throwError = throwError;
