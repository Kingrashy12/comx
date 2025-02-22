"use client";

import { SelectTriggerInterface } from "@/types/ui";
import React from "react";
import Box from "../Box";
import { clx } from "@/utils/clx";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Icon from "../Icon";

const SelectTrigger: React.FC<SelectTriggerInterface> = ({
  placeholder,
  className,
  label,
}) => {
  const open = false;
  return (
    <Box
      itemsCenter
      between
      fullWidth
      className={clx(
        `h-46 rounded-xs cursor-pointer font-roboto border border-btn-outline text-sm flex
        gap-5 active:scale-95 transition-transform font-medium px-4 hover:bg-gray-50`,
        className
      )}
    >
      <span className="font-roboto text-muted truncate text-sm">
        {label.length > 1 ? label : placeholder}
      </span>
      <Icon
        icon={open ? GoChevronUp : GoChevronDown}
        size={20}
        className="text-muted"
      />
    </Box>
  );
};

export default SelectTrigger;
