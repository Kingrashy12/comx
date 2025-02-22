import React from "react";
import { RiDashboardLine, RiLineChartLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { LinkItem } from "../shared/layout";

const SideBar = () => {
  return (
    <div className="bg-white sticky flex flex-col gap-2 left-0 h-screen w-[95px] border-r px-1 py-2 max-[950px]:hidden">
      <LinkItem icon={RiDashboardLine} label="Overview" />
      <LinkItem icon={RiLineChartLine} label="Market" active />
      <LinkItem icon={TbMoneybag} label="Portfolio" />
      <LinkItem icon={FiUsers} label="Community" />
      <LinkItem icon={CiFileOn} label="Reports" />
      <LinkItem icon={SlSettings} label="Settings" />
    </div>
  );
};

export default SideBar;
