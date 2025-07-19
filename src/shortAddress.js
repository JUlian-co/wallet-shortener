export function shortAddress(
  address,
  opts = {}
) {
  const left = opts.left ?? 4;
  const right = opts.right ?? 4;

  if (!address || address.length < left + right) return address;
  return `${address.slice(0, left)}...${address.slice(-right)}`;
}
