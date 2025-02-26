"use client";

import { Logo } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { Box, Button, Icon } from "../ui";
import { MdClose, MdOutlineLightMode } from "react-icons/md";
import { clx } from "@/utils/clx";
import { IoChevronDown, IoLogOutOutline, IoMoon } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { triggerDrawer } from "../provider/drawer";
import { useDrawer } from "@/context/drawer";
import { useAuth } from "@/context/auth";

const Balance = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box className="flex-col gap-1">
      <p className="font-roboto text-[10px] font-medium text-[#778CA2] uppercase">
        {label}
      </p>
      <p className="font-roboto font-semibold text-text text-xs">
        ₦ <span className="font-bold font-roboto text-base">{value}</span>
      </p>
    </Box>
  );
};

const Navbar = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const { isOpen } = useDrawer();
  const { signOut } = useAuth();

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className="h-[64px] bg-white shadow-sm border-b border-neutral-200 z-[100] py-3 px-5 flex items-center justify-between w-full sticky top-0">
      <Box
        between
        itemsCenter
        fullWidth
        className="border-r-2 px-4 max-[550px]:border-none"
      >
        <Box className="gap-2" itemsCenter>
          <Icon
            icon={isOpen ? MdClose : BiMenuAltLeft}
            size={35}
            onClick={() => triggerDrawer("mobile-menu")}
            className="cursor-pointer hidden hover:bg-neutral-100 active:scale-90 max-[950px]:block rounded-sm p-1"
          />
          <Image
            src={Logo.src}
            className="max-[550px]:w-[90px]"
            alt="Logo"
            width={112}
            height={59}
          />
        </Box>
        <Box
          onClick={toggleTheme}
          className={clx(
            "bg-[#F4F4F6] rounded-full w-fit h-[31px] px-1 gap-2 hover:bg-neutral-300 transition-transform cursor-pointer",
            { "flex-row-reverse": mode === "dark" }
          )}
          itemsCenter
        >
          <p
            className={clx(
              "font-medium font-roboto text-[8px] pl-1 text-[#1E1E1E] uppercase",
              mode === "dark" && "pr-1"
            )}
          >
            {mode}
          </p>

          <Icon
            icon={mode === "light" ? MdOutlineLightMode : IoMoon}
            size={25}
            className="p-1 rounded-full bg-white shadow cursor-pointer active:scale-75 transition-transform"
          />
        </Box>
      </Box>
      <Box
        itemsCenter
        fullWidth
        className="gap-10 ml-2 border-r-2 px-3 max-[950px]:hidden"
      >
        <Balance label="CASH BALANCE" value="8,374,763" />
        <Balance label="SECURITIES VALUE" value="8,374,763" />
        <Balance label="LOAN BALANCE" value="7,542,246" />
      </Box>
      <Box itemsCenter className="px-6 gap-2 max-[550px]:hidden border-r-2">
        <Button className="h-[35px] text-[10px]">DEMO</Button>
        <IoChevronDown size={19} />
      </Box>
      <Box
        onClick={signOut}
        itemsCenter
        className="rounded-lg active:scale-90 cursor-pointer p-2 hover:bg-neutral-100 max-[450px]:hidden ml-2 justify-center"
      >
        <IoLogOutOutline size={25} />
      </Box>
    </div>
  );
};

export default Navbar;
