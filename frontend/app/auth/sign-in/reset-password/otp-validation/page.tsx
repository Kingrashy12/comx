import { OTPValidation } from "@/components";
import React from "react";

export const metadata = {
  title: "OTP Validation - ComX",
};

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full fixed z-50"></div>
  );
};

const Page = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <OTPValidation />;
    </React.Suspense>
  );
};

export default Page;
