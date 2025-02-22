import { Box, SelectButton } from "@/components/ui";
import { useAuthFlow } from "@/context/auth-flow";
import React from "react";

const AuthCategory = () => {
  const { account_type, setAccount_Type: switchType } = useAuthFlow();
  return (
    <Box column className="gap-4">
      <Box column className="gap-3">
        <p className="text">
          Select select the category that best describes you
        </p>

        <Box itemsCenter className="gap-2">
          <SelectButton
            onClick={() => switchType("individual")}
            active={account_type === "individual"}
          >
            Individual
          </SelectButton>
          <SelectButton
            onClick={() => switchType("corporate")}
            active={account_type === "corporate"}
          >
            Corporate
          </SelectButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthCategory;
