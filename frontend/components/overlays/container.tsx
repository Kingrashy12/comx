import React from "react";
import SelectBusiness from "./select-business-type";
import DateOfInCorporation from "./date-of-incorporation";
import MobileMenu from "./menu";
import SubMenu from "./sub-menu";

const Container = () => {
  return (
    <>
      <SelectBusiness />
      <DateOfInCorporation />
      <MobileMenu />
      <SubMenu />
    </>
  );
};

export default Container;
