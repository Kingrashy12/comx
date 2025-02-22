"use client";

import React from "react";
import Box from "./Box";
import Label from "./Label";
import SelectTrigger from "./select/SelectTrigger";
import { clx } from "@/utils/clx";

type SelectLabelProps = {
  label: string;
  placeholder: string;
  children?: React.ReactNode;
  onClick?: () => void;
  error?: boolean;
  value: string;
};

const SelectWithLabel: React.FC<SelectLabelProps> = ({
  label,
  placeholder,
  onClick,
  error,
  value,
}) => {
  return (
    <Box column fullWidth className="gap-2" onClick={onClick}>
      <Label value={label} />
      <SelectTrigger
        className={clx(error && "border-red-500 text-red-500")}
        placeholder={placeholder}
        label={value}
      />
    </Box>
  );
};

export default SelectWithLabel;
