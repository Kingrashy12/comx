import { AuthCardInterface } from "@/types/cards";
import React from "react";
import Card from "../ui/Card";
import { Box } from "../ui";
import { clx } from "@/utils/clx";

const AuthCard: React.FC<AuthCardInterface> = ({
  children,
  header,
  subHeader,
  hideHeader,
  className,
}) => {
  return (
    <Card
      classNames={{
        root: "w-[500px] max-[550px]:w-95%",
        body: clx(
          "gap-9 px-9 py-9 max-[550px]:gap-6 max-[550px]:px-5",
          className
        ),
      }}
      renderHeader={
        <Box
          column
          center
          className={clx("gap-2 border-b/ py-6 px-5", hideHeader && "hidden")}
        >
          <h1 className="font-roboto font-normal text-3xl leading-[35.16px] max-[550px]:text-2xl text-text text-center">
            {header}
          </h1>
          <p className="font-roboto text-sm-bold font-normal leading-5 text-text text-center">
            {subHeader}
          </p>
        </Box>
      }
    >
      {children}
    </Card>
  );
};

export default AuthCard;
