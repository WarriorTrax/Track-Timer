import React, { useEffect } from "react";
import { useMeetStore } from "../state/meetStore";
import { TimingEngine } from "../core/timingEngine";
import { keyboardController } from "../core/keyboardController";

export default function Operator({ setView }) {
  const { race, setRace } = useMeetStore();

  const engine = new TimingEngine(setRace, () => race);

  useEffect(() => {
    const handler = keyboardController(engine, false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="operator">
      <h1>Operator Panel</h1>

      <button onClick={() => engine.start()}>Start</button>
      <button onClick={() => engine.stop()}>Stop</button>

      <button onClick={() => setView("scoreboard")}>Scoreboard</button>
      <button onClick={() => setView("teams")}>Teams</button>

      <h2>Results</h2>
      {Object.entries(race.results).map(([lane, time]) => (
        <div key={lane}>
          Lane {lane}: {time}s
        </div>
      ))}
    </div>
  );
}