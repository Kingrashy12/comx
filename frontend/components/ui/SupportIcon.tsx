import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const SupportIcon = () => {
  return (
    <div
      className="flex rounded-full bg-red-600 p-3 cursor-pointer
     hover:bg-red-700 fixed bottom-5 right-6 text-white active:scale-90
     transition-transform"
    >
      <IoChatbubbleEllipsesOutline size={25} />
    </div>
  );
};

export default SupportIcon;
