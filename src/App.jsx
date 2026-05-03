import React, { useState } from "react";
import Operator from "./views/Operator";
import ScheduleBuilder from "./views/ScheduleBuilder";
import TeamLeaderboard from "./views/TeamLeaderboard";
import BroadcastScoreboard from "./views/BroadcastScoreboard";
import { useMeetStore } from "./state/meetStore";

export default function App() {
  const { race } = useMeetStore();
  const [view, setView] = useState("operator");

  if (view === "scoreboard")
    return <BroadcastScoreboard race={race} />;

  if (view === "schedule")
    return <ScheduleBuilder />;

  if (view === "teams")
    return <TeamLeaderboard results={race.results} />;

  return <Operator setView={setView} />;
}