import React from "react";
import { GOALS_LIST } from "../../config";

export default function Goal({ parentGoalCallback }) {
  return (
    <div className="goal">
      <select onChange={e => parentGoalCallback(e.currentTarget.value)}>
        <option>Select Goal</option>
        {GOALS_LIST.map(goal => (
          <option>{goal}</option>
        ))}
      </select>
    </div>
  );
}
