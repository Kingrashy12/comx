import { CardProps } from "@/types/ui";
import { clx } from "@/utils/clx";
import React, { forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, renderHeader, classNames, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={clx(
          "bg-white rounded-xs shadow flex flex-col",
          classNames?.root
        )}
      >
        {renderHeader!}
        <div className={clx("flex flex-col gap-5 p-5", classNames?.body)}>
          {children}
        </div>
      </div>
    );
  }
);

export default Card;
Card.displayName = "Card";
