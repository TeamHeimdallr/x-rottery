export const truncateAddress = (addr?: `r${string}`, limit = 4) => {
  if (!addr) return '';

  const zerox = addr.slice(0, 1) == 'r' ? 2 : 0;
  return addr.slice(0, zerox + limit) + '...' + addr.slice(-limit, addr.length);
};
