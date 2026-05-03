import React, { useEffect, useState } from "react";
import { windEffect, detectRecord } from "../core/broadcastEngine";

export default function BroadcastScoreboard({ race }) {
  const [sorted, setSorted] = useState([]);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    const arr = Object.entries(race.results || {})
      .map(([lane, time]) => ({ lane, time }))
      .sort((a, b) => a.time - b.time);

    setSorted(arr);
    setWind(windEffect());
  }, [race.results]);

  return (
    <div className="broadcast">

      <div className="header">
        <h1>LIVE RESULTS</h1>
        <h3>Wind: {wind} m/s</h3>
      </div>

      <div className="board">
        {sorted.map((r, i) => {
          const record = detectRecord(r.time);

          return (
            <div
              key={r.lane}
              className={`lane ${i === 0 ? "leader" : ""}`}
            >
              <span>Lane {r.lane}</span>
              <span>{r.time}s</span>

              {record && (
                <span className="record">{record}</span>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}