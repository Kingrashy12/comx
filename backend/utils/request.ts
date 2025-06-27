import { Logger } from "zoltra";
import { ThrowError } from "../types";

export const throwError = ({
  error,
  res,
  status = "403",
  message,
}: ThrowError) => {
  const logger = new Logger("ErrorLog");
  const err = error?.message ? error.message : error;
  logger.error(err);
  return res.status(Number(status)).json({
    message: message || "Internal server error",
    error: typeof error === "object" && error?.message ? error.message : error,
  });
};
