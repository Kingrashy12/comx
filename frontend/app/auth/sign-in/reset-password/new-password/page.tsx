import { NewPassword } from "@/components";
import React from "react";

export const metadata = {
  title: "New Password - ComX",
};

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full fixed z-50"></div>
  );
};

const Page = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <NewPassword />;
    </React.Suspense>
  );
};

export default Page;
