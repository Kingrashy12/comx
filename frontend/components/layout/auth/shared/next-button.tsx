import { Button } from "@/components/ui";
import { useAuthFlow } from "@/context/auth-flow";
import { AuthStage } from "@/types/global";
import React from "react";

type NextProps = {
  next_stage: AuthStage;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const NextButton: React.FC<NextProps> = ({
  next_stage,
  onClick,
  disabled,
  children,
}) => {
  const { validateForms } = useAuthFlow();

  const next = () => {
    onClick?.();
    validateForms(next_stage);
    // setRegState(next_stage);
  };

  return (
    <Button
      onClick={next}
      disabled={disabled}
      colorScheme="danger"
      variant="ghost"
      className="uppercase mt-4"
    >
      {children}
    </Button>
  );
};

export default NextButton;
