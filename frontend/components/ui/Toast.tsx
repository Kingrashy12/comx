"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export declare type ToastType = {
  error: (message: string) => void;
  success: (message: string) => void;
};

export let toast: ToastType;

const Toast = () => {
  const [messages, setMessages] = useState<
    { type: "error" | "success"; text: string }[]
  >([]);

  const removeMessage = (index: number) => {
    setMessages((prevMessages) =>
      prevMessages.filter((_, idx) => idx !== index)
    );
  };

  toast = {
    error: (message) => {
      setMessages((prev) => [...prev, { type: "error", text: message }]);
      setTimeout(() => removeMessage(0), 3000); // Auto-remove after 3s
    },
    success: (message) => {
      setMessages((prev) => [...prev, { type: "success", text: message }]);
      setTimeout(() => removeMessage(0), 3000);
    },
  };

  return (
    <div className="fixed z-[200] top-[30px] right-[20px] flex flex-col gap-3">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`border px-3 py-4 rounded-xl w-fit flex gap-5 items-center animate-walkIn
            ${
              msg.type === "error"
                ? "border-red-500 bg-red-100 text-red-500"
                : "border-green-500 bg-green-100 text-green-500"
            }
          `}
        >
          <p className="font-roboto text-sm font-normal">{msg.text}</p>
          <IoClose
            className="cursor-pointer"
            size={21}
            onClick={() => removeMessage(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Toast;
// export { toast };
