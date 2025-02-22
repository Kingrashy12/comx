"use client";

import React from "react";
import { Modal } from "../ui";
import { MenuItem } from "../shared/layout";
import InputWithIcon from "../ui/InputWithIcon";
import { GrLineChart } from "react-icons/gr";
import { RiBookLine } from "react-icons/ri";
import { MdHistory, MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoEyeOutline, IoSearch } from "react-icons/io5";

const SubMenu = () => {
  return (
    <Modal.Root value="sub-menu" className="z-[400]">
      <Modal.Panel size="md" className="rounded-sm">
        <Modal.Content>
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
        </Modal.Content>
      </Modal.Panel>
    </Modal.Root>
  );
};

export default SubMenu;
