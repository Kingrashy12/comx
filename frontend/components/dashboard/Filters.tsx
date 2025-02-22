import React from "react";
import { Box, Card } from "../ui";
import { clx } from "@/utils/clx";

const Pill = ({ label, active }: { label: string; active?: boolean }) => (
  <button
    className={clx(
      `border-none outline-none h-[36px] font-roboto font-medium text-sm text-text active:scale-95 transition-transform
       bg-neutral-200 rounded-full p-3 flex items-center justify-center cursor-pointer hover:bg-neutral-300`,
      { "text-white bg-red-600 hover:bg-red-700": active }
    )}
  >
    {label}
  </button>
);

const Filters = () => {
  return (
    <Card classNames={{ root: "h-fit w-full" }}>
      <Box itemsCenter className="gap-3">
        <p className="font-roboto font-medium text-sm text-text">Board</p>
        <Pill label="X-Traded" active />
        <Pill label="OTC" />
        <Pill label="FI" />
        <Pill label="Derivatives" />
      </Box>
      <Box itemsCenter className="gap-3 max-[950px]:flex-wrap">
        <p className="font-roboto font-medium text-sm text-text">Products</p>
        <Pill label="All" active />
        <Pill label="SMAZ" />
        <Pill label="SBBS" />
        <Pill label="SPRL" />
        <Pill label="SGNG" />
        <Pill label="SSGM" />
        <Pill label="FETC" />
        <Pill label="SCOC" />
      </Box>
    </Card>
  );
};

export default Filters;
