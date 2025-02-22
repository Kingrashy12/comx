import { FormSchemaError } from "@/types/global";
import { z } from "zod";

export const formatErrors = (errors: z.ZodIssue[]): FormSchemaError => {
  const fieldErrors: FormSchemaError = {};
  errors.forEach((err) => {
    if (err.path[0]) fieldErrors[err.path[0]] = err.message;
  });
  return fieldErrors;
};

export const StrFun = {
  truncate(text: string, len = 10): string {
    return text.length > len ? text.slice(0, len) + "..." : text;
  },
  capitalize(text: string) {
    return text
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^\w-]/g, "-")
      .replace(/-+/g, "")
      .replace(/^-+|-+$/g, "")
      .replace(/_/, "-")
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  },
};

export const TextEncode = {
  encode(text: string) {
    return Buffer.from(text).toString("base64");
  },
  decode(text: string) {
    return Buffer.from(text, "base64").toString("utf-8");
  },
};
