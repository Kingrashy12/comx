import { clx } from "@/utils/clx";
import React from "react";

const DrawerFooter = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clx(
        "flex w-full p-3 gap-3 rounded-br-sm bg-white border-t border-t-neutral-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default DrawerFooter;
