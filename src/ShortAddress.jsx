import React from "react";

export const ShortAddress = ({
  children: address,
  left = 4,
  right = 4,
  copyOnClick = true,
  className = "",
}) => {
  if (!address || typeof address !== "string") return null;

  const shortAddress =
    address.length <= left + right
      ? address
      : `${address.slice(0, left)}...${address.slice(-right)}`;

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
      title={address}
    >
      {shortAddress}
    </span>
  );
};
