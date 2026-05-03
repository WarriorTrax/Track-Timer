import React from "react";
import { calculateScores } from "../core/scoringEngine";

export default function TeamLeaderboard({ results }) {
  const scores = calculateScores(results);

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="leaderboard">
      <h1>TEAM STANDINGS</h1>

      {sorted.map(([team, score], i) => (
        <div key={team} className={i === 0 ? "top" : ""}>
          #{i + 1} {team} — {score} pts
        </div>
      ))}
    </div>
  );
}