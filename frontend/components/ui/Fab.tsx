import { DivProps } from "@/types/ui";
import { clx } from "@/utils/clx";
import React from "react";

const Fab: React.FC<DivProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clx(
        `fixed right-6 bottom-14 z-[200] cursor-pointer hover:bg-red-500 active:scale-95
         transition-transform rounded-full bg-red-600 p-3 flex items-center justify-center text-white`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Fab;
