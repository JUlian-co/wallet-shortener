import React from "react";
import { shortAddress } from "./shortAddress";

export const WalletAddress = ({
  address,
  left = 6,
  right = 4,
  copyOnClick = false,
  className = "",
}) => {
  const handleClick = () => {
    if (copyOnClick && navigator?.clipboard) {
      navigator.clipboard.writeText(address);
    }
  };

  return (
    <span
      onClick={handleClick}
      style={{ cursor: copyOnClick ? "pointer" : "default" }}
      className={className}
    >
      {shortAddress(address, { left, right })}
    </span>
  );
};
