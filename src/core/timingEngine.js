export const startRace = () => performance.now();

export const getTime = (start) =>
  ((performance.now() - start) / 1000).toFixed(2);