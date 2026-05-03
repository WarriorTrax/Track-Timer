export const createHeat = (laneCount = 8) => {
  return {
    id: Date.now(),
    lanes: Array.from({ length: laneCount }, (_, i) => ({
      lane: i + 1,
      athlete: null,
      time: null,
      split: []
    })),
    status: "READY" // READY | RUNNING | FINISHED
  };
};

export const assignAthleteToLane = (heat, lane, athlete) => {
  heat.lanes[lane - 1].athlete = athlete;
  return heat;
};

export const startHeat = (heat) => {
  heat.status = "RUNNING";
  return heat;
};

export const finishHeat = (heat) => {
  heat.status = "FINISHED";
  return heat;
};

export const recordLaneTime = (heat, lane, time) => {
  const laneData = heat.lanes[lane - 1];

  if (!laneData.time) {
    laneData.time = time;
  } else {
    laneData.split.push(time);
  }

  return heat;
};