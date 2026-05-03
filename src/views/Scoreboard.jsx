import React from "react";
import { useMeetStore } from "../state/meetStore";

export default function Scoreboard({ setView }) {
  const { race } = useMeetStore();

  const sorted = Object.entries(race.results)
    .sort((a, b) => a[1] - b[1]);

  return (
    <div className="scoreboard">
      <h1>LIVE RESULTS</h1>

      {sorted.map(([lane, time], i) => (
        <div key={lane}>
          #{i + 1} Lane {lane} — {time}s
        </div>
      ))}

      <button onClick={() => setView("operator")}>
        Back
      </button>
    </div>
  );
}