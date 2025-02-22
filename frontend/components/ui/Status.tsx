import React from "react";
import Box from "./Box";
import { useAuthFlow } from "@/context/auth-flow";
// import { clx } from "@/utils/clx";

const Status = () => {
  const { regState } = useAuthFlow();

  const position = {
    BasicInfo: 1,
    LoginDetails: 2,
    OTP: 3,
    Success: 4,
  };
  return (
    <Box center fullWidth className="flex-col gap-2 flex-shrink-0">
      <p className="font-roboto font-normal text-base leading-10 tracking-widest">
        <span>{position[regState]}</span>/<span className="text-muted">4</span>
      </p>
      {/* <Box center className="w-[500px] max-[550px]:w-95%">
        <StatusRing />
        <StatusRing />
        <StatusRing />
        <StatusRing hide />
      </Box> */}
    </Box>
  );
};

export default Status;

// const StatusRing = ({ hide }: { hide?: boolean }) => (
//   <div className="flex items-center w-[125px] flex-shrink-0">
//     <div className="bg-red-600 w-3 h-3 rounded-full" />
//     <div className={clx("bg-red-600 h-1 w-full", hide && "hidden")} />
//   </div>
// );
