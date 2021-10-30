import React from "react";
import { YEARS } from "../../config";

export default function Year({ parentYearCallback }) {
  return (
    <div className="goal">
      <select
        onChange={e => {
          parentYearCallback(e.currentTarget.value);
        }}
      >
        <option>Select Year</option>
        {YEARS.map(goal => (
          <option>{goal}</option>
        ))}
      </select>
    </div>
  );
}
