import React from "react";
import Box from "./Box";
import Label from "./Label";
import Button from "./Button";
import { clx } from "@/utils/clx";

type SelectLabelProps = {
  label: string;
  text: string;
  children?: React.ReactNode;
  icon?: React.ElementType;
  between?: boolean;
  onClick?: () => void;
  error?: boolean;
  selected?: boolean;
};

const ButtonWithLabel: React.FC<SelectLabelProps> = ({
  label,
  text,
  icon,
  between,
  onClick,
  error,
  selected,
}) => {
  return (
    <Box column fullWidth onClick={onClick} className="gap-2">
      <Label value={label} />
      <Button
        icon={icon}
        iconSize={17}
        className={clx(
          "text-muted",
          error && "!border-red-500 text-red-500",
          selected && "text-text"
        )}
        between={between}
        colorScheme={error ? "danger" : "primary"}
        variant="outline"
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonWithLabel;
