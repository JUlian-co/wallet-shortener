import React from "react";
import { shortAddress } from "./shortAddress";
const WalletAddress = ({
  address,
  left = 6,
  right = 4,
  copyOnClick = false,
  className = ""
}) => {
  const handleClick = () => {
    if (copyOnClick && navigator?.clipboard) {
      navigator.clipboard.writeText(address);
    }
  };
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      onClick: handleClick,
      style: { cursor: copyOnClick ? "pointer" : "default" },
      className
    },
    shortAddress(address, { left, right })
  );
};
export {
  WalletAddress
};
