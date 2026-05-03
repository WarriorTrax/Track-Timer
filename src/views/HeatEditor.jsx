import React, { useState } from "react";
import { createHeat, assignAthleteToLane } from "../core/heatEngine";

export default function HeatEditor() {
  const [heat, setHeat] = useState(createHeat(8));

  const addAthlete = (lane) => {
    const name = prompt("Enter athlete name:");
    if (!name) return;

    const updated = assignAthleteToLane(
      { ...heat },
      lane,
      { name }
    );

    setHeat({ ...updated });
  };

  const resetHeat = () => {
    setHeat(createHeat(8));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Heat Editor</h1>

      <button onClick={resetHeat}>New Heat</button>

      <div style={{ marginTop: 20 }}>
        {heat.lanes.map(l => (
          <div key={l.lane} style={{ marginBottom: 10 }}>
            <strong>Lane {l.lane}</strong> — {l.athlete?.name || "Empty"}

            <button onClick={() => addAthlete(l.lane)}>
              Assign Athlete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}