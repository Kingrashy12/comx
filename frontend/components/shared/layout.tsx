import { ElementType } from "react";
import { Box, Icon } from "../ui";
import { clx } from "@/utils/clx";

export const Balance = ({ label, value }: { label: string; value: string }) => {
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

export const LinkItem = ({
  active,
  label,
  icon,
}: {
  icon: ElementType;
  label: string;
  active?: boolean;
}) => (
  <Box
    column
    className={clx(
      "gap-2 p-2 rounded-sm hover:bg-neutral-100 active:scale-95 transition-transform cursor-pointer",
      active ? "text-[#D71E0E] hover:bg-red-100" : "text-text"
    )}
    center
  >
    <Icon icon={icon} size={25} />
    <p className={clx("font-roboto font-medium text-sm")}>{label}</p>
  </Box>
);

export const MenuItem = ({
  active,
  label,
  icon,
}: {
  active?: boolean;
  label: string;
  icon: ElementType;
}) => (
  <Box
    fullWidth
    className={clx(
      "p-3 gap-4 hover:bg-neutral-100 cursor-pointer active:scale-95 transition-transform",
      active && "bg-neutral-100"
    )}
    itemsCenter
  >
    <Icon icon={icon} size={22} />
    <p
      className={clx(
        "font-roboto text-sm font-medium text-text",
        active && "text-red-600"
      )}
    >
      {label}
    </p>
  </Box>
);
