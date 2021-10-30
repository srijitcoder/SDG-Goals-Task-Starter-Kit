import React, { useState } from "react";
import { UT } from "../../config";
import C3Chart from "react-c3js";
import "c3/c3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chart.css";

export default function Chart({ data, goal }) {
  const [chAxis] = useState({
    rotated: true,
    x: { type: "category" }
  });
  const [chSize] = useState({ height: 650, width: 600 });
  const [stateWise, chngStateWise] = useState(true);

  return (
    <div className="chart">
      <div className="form-check form-switch switch-bt">
        {/* <label className="form-check-label">
          States
        </label> */}
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          value={stateWise}
          onChange={e => {
            chngStateWise(!stateWise);
          }}
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          UTs
        </label>
      </div>
      <div>
        <C3Chart
          size={chSize}
          data={chartData(data, goal, stateWise)}
          axis={chAxis}
          zoom={true}
          legend={true}
          tooltip={true}
        ></C3Chart>
      </div>
    </div>
  );
}

function arrFilter(data, string, stateWise) {
  let categoryWiseData = [];
  if (stateWise) {
    categoryWiseData = data.filter(x => {
      return !UT.includes(x.area_name);
    });
  } else {
    categoryWiseData = data.filter(x => {
      return UT.includes(x.area_name);
    });
  }
  if(string.length) {
    let chDt = categoryWiseData.map(x => {
      return {
        area: x.area_name,
        dValue: x.chartdata.find(glDt => string.startsWith(glDt.name))["value"]
      };
    });
    return chDt;
  } else {
    return [];
  }
}

function chartData(data, string, stWise) {
  const dummyD = arrFilter(data, string, stWise);
  let obj = {
    type: "bar",
    json: dummyD,
    keys: {
      x: "area",
      value: ["dValue"]
    },
    names: {
      dValue: "Index"
    },
    labels: true
  };
  return obj;
}
