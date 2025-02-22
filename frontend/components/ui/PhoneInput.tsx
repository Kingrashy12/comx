"use client";

import React from "react";
// import Select from "react-select";
import Box from "./Box";
import TextInput from "./TextInput";
import SelectButton from "./SelectButton";
import { GoChevronDown } from "react-icons/go";
import { useAuthFlow } from "@/context/auth-flow";

const PhoneInput = () => {
  const { individualErrors, individualForm, handleIndividualForm } =
    useAuthFlow();
  return (
    <Box className="flex-col gap-5" fullWidth>
      <Box className="items-center gap-2 h-full" fullWidth>
        <SelectButton className="justify-between px-3 font-roboto text-neutral-400">
          <p>+234</p>
          <GoChevronDown size={20} />
        </SelectButton>

        <TextInput
          hideErr
          type="tel"
          error={!!individualErrors.phone_number}
          value={individualForm.phone_number}
          name="phone_number"
          onChange={handleIndividualForm}
          placeholder="Enter phone number"
          className="flex-1 p-2 outline-none border-gray-200 rounded-md"
        />
      </Box>
      {individualErrors.phone_number && (
        <p className="font-roboto text-sm text-red-500">
          {individualErrors.phone_number}
        </p>
      )}
    </Box>
  );
};

export default PhoneInput;
