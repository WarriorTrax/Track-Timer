import React from "react";
import { CHAMPIONSHIP_ORDER } from "../core/scheduleEngine";

export default function ScheduleBuilder() {
  return (
    <div>
      <h1>Championship Schedule</h1>

      {CHAMPIONSHIP_ORDER.map((e, i) => (
        <div key={i}>
          {i + 1}. {e}
        </div>
      ))}
    </div>
  );
}