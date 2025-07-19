import React from "react";
const ShortAddress = ({
  children: address,
  left = 4,
  right = 4,
  copyOnClick = true,
  className = ""
}) => {
  if (!address || typeof address !== "string") return null;
  const shortAddress = address.length <= left + right ? address : `${address.slice(0, left)}...${address.slice(-right)}`;
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
      className,
      title: address
    },
    shortAddress
  );
};
export {
  ShortAddress
};
