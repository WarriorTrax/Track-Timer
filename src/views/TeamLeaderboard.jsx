import React from "react";
import { useMeetStore } from "../state/meetStore";
import { calculateScores } from "../core/scoringEngine";

export default function TeamLeaderboard() {
  const { race } = useMeetStore();

  const scores = calculateScores(race.results);

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="leaderboard">
      <h1>TEAM STANDINGS</h1>

      {sorted.map(([team, score], i) => (
        <div key={team}>
          #{i + 1} {team} — {score} pts
        </div>
      ))}
    </div>
  );
}