export const formatTime = (time) => {
  if (!time) return "--";

  const t = parseFloat(time);

  if (t < 60) return `${t.toFixed(2)}s`;

  const min = Math.floor(t / 60);
  const sec = (t % 60).toFixed(2);

  return `${min}:${sec.padStart(5, "0")}`;
};