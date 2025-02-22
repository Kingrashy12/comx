import React from "react";
import { Box } from "../ui";
import { liveMarkets } from "@/data/live-markets";

const LiveMarkets = () => {
  return (
    <div className="bg-white border-t border-t-neutral-200 shadow fixed bottom-0 w-full z-[100] h-[55px] flex items-center gap-2">
      <Box className="z-50">
        <div className="h-[55px] text-white flex items-center justify-center bg-black font-roboto text-[15px] font-medium w-[150px]">
          Live Markets
        </div>
      </Box>
      <Box
        className="gap-6 overflow-x-auto py-2 px-4 scrollbar-none whitespace-nowrap animate-scroll"
        itemsCenter
        fullWidth
      >
        {liveMarkets.map((item, index) => (
          <Box column key={index} className="gap-0 flex-shrink-0">
            <p className="font-roboto font-semibold text-sm">{item.market}</p>
            <span className="font-roboto font-normal text-sm text-black">
              ₦{item.price.toLocaleString()}
            </span>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default LiveMarkets;
