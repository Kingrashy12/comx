import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const clx = (...classess: ClassValue[]) => {
  return twMerge(clsx(...classess));
};
