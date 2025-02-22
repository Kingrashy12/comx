import React from "react";
import { Box, Button, Drawer } from "../ui";
import Divider from "../ui/Divider";
import { IoChevronDown } from "react-icons/io5";
import { Balance, LinkItem } from "../shared/layout";
import { RiDashboardLine, RiLineChartLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";

const MobileMenu = () => {
  return (
    <Drawer.Root value="mobile-menu">
      <Drawer.Panel>
        <Drawer.Header></Drawer.Header>
        <Drawer.Content className="px-8 py-12">
          <Divider />
          <Box fullWidth className="gap-10 flex-col">
            <Balance label="CASH BALANCE" value="8,374,763" />
            <Balance label="SECURITIES VALUE" value="8,374,763" />
            <Balance label="LOAN BALANCE" value="7,542,246" />
          </Box>
          <Divider />
          <Box className="h-full overflow-y-auto flex-col gap-7">
            <LinkItem icon={RiDashboardLine} label="Overview" />
            <LinkItem icon={RiLineChartLine} label="Market" active />
            <LinkItem icon={TbMoneybag} label="Portfolio" />
            <LinkItem icon={FiUsers} label="Community" />
            <LinkItem icon={CiFileOn} label="Reports" />
            <LinkItem icon={SlSettings} label="Settings" />
          </Box>
        </Drawer.Content>
        <Drawer.Footer>
          <Box itemsCenter fullWidth className="px-6 gap-2">
            <Button fullWidth className="h-[35px] text-[10px]">
              DEMO
            </Button>
            <IoChevronDown size={19} />
          </Box>
        </Drawer.Footer>
      </Drawer.Panel>
    </Drawer.Root>
  );
};

export default MobileMenu;
