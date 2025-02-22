import { LabelInterface } from "@/types/ui";
import { clx } from "@/utils/clx";
import React from "react";

const Label = ({ value, className, ...props }: LabelInterface) => {
  return (
    <label className={clx("text", className)} {...props}>
      {value}
    </label>
  );
};

export default Label;
