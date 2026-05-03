export const keyboardController = (engine, isDistance) => {
  return (e) => {
    const lane = parseInt(e.key);

    if (lane >= 1 && lane <= 8) {
      engine.recordLane(lane, isDistance);
    }

    if (e.key === "s") engine.start();
    if (e.key === "x") engine.stop();
  };
};