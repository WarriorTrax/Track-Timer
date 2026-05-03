export const detectRecord = (time, event) => {
  // placeholder logic (customize later)
  if (time < 10) return "MEET RECORD";
  if (time < 9) return "NEW RECORD";
  return null;
};

export const windEffect = () => {
  return (Math.random() * 2 - 1).toFixed(1); // -1.0 to +1.0
};