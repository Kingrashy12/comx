import React, { useState } from "react";
import Backdrop from "./Backdrop";
import { CgSpinner } from "react-icons/cg";
import { clx } from "@/utils/clx";

export let openLoader: (status: boolean) => void;
export let closeLoader: () => void;
const BackgroundLoader = () => {
  const [open, setOpen] = useState(false);

  openLoader = (status) => setOpen(status);
  closeLoader = () => setOpen(false);
  return (
    <Backdrop
      open={open}
      onClose={() => {}}
      className={clx("items-center justify-center")}
    >
      <CgSpinner className="animate-spin " color="red" size={50} />
    </Backdrop>
  );
};

export default BackgroundLoader;
