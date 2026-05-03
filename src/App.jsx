import React, { useState } from "react";
import Operator from "./views/Operator";
import Scoreboard from "./views/Scoreboard";
import ScheduleBuilder from "./views/ScheduleBuilder";
import TeamLeaderboard from "./views/TeamLeaderboard";

export default function App() {
  const [view, setView] = useState("operator");

  if (view === "scoreboard") return <Scoreboard setView={setView} />;
  if (view === "schedule") return <ScheduleBuilder setView={setView} />;
  if (view === "teams") return <TeamLeaderboard setView={setView} />;

  return <Operator setView={setView} />;
}