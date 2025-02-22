"use client";

import React from "react";
import { Card } from "../ui";
import { IoEyeOutline, IoSearch } from "react-icons/io5";
import InputWithIcon from "../ui/InputWithIcon";
import { GrLineChart } from "react-icons/gr";
import { RiBookLine } from "react-icons/ri";
import { MdHistory, MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { MenuItem } from "../shared/layout";

const SubMenu = () => {
  return (
    <Card classNames={{ root: "h-fit max-[900px]:hidden", body: "p-3 gap-3" }}>
      <InputWithIcon
        placeholder="Search"
        icon={IoSearch}
        inputClass="h-[35px]"
        variant="surface"
      />
      <MenuItem label="Product View" icon={GrLineChart} />
      <MenuItem label="Order Book" active icon={RiBookLine} />
      <MenuItem label="Price History" icon={MdHistory} />
      <MenuItem label="Open Orders" icon={IoEyeOutline} />
      <MenuItem label="Closed Trades" icon={FaRegCheckCircle} />
      <MenuItem label="Cancelled Trades" icon={MdOutlineCancel} />
    </Card>
  );
};

export default SubMenu;
