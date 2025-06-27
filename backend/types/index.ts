import { ZoltraResponse } from "zoltra";

type ErrorCode =
  | "400"
  | "401"
  | "403"
  | "404"
  | "402"
  | "405"
  | "406"
  | "408"
  | "500"
  | "502"
  | "503"
  | "504";

export type ThrowError = {
  /**
   * The error object or details associated with the error.
   *
   * @type {any}
   */
  error?: any;

  /**
   * The response object to send back the error response.
   *
   * @type {ZoltraResponse}
   */
  res: ZoltraResponse;

  /**
   * The HTTP status code indicating the error type.
   *
   * @default "403"
   */
  status: ErrorCode;

  /**
   * Optional custom error message to provide more context.
   * If not provided, a default message will be used.
   *
   * @type {string}
   */
  message?: string;
};
