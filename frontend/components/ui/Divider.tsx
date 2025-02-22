import { clx } from "@/utils/clx";
import React from "react";

const Divider = ({
  type = "bottom",
  className,
}: {
  type?: "height" | "bottom";
  className?: string;
}) => {
  return (
    <div
      className={clx(
        {
          "w-full border-b border-b-neutral-100": type === "bottom",
          "h-auto border-r border-r-neutral-100": type === "height",
        },
        className
      )}
    />
  );
};

export default Divider;
