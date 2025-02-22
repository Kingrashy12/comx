import React from "react";
import Box from "./Box";
import Label from "./Label";
import TextInput from "./TextInput";
import { TextInputInterface } from "@/types/ui";

interface Form extends TextInputInterface {
  label: string;
}

const FormWithLabel: React.FC<Form> = ({ label, ...props }) => {
  return (
    <Box column fullWidth className="gap-2">
      <Label value={label} />
      <TextInput {...props} />
    </Box>
  );
};

export default FormWithLabel;
