import "./app.css";
import Goal from "./components/controls/goal";
import Year from "./components/controls/year";
import Chart from "./components/chart";
import Map from "./components/map";
import React, { useState, useEffect } from "react";
import {
  useQueryParams,
  StringParam,
  NumberParam
} from "use-query-params";

function App() {
  const [sltYear, setYear] = useState("");
  const [sltGoal, setGoal] = useState("");
  const [query, setQuery] = useQueryParams({
    year: NumberParam,
    goal: StringParam,
  });
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    if (sltYear === "2018") {
      setJsonData(require("./data/2018.json"));
    } else if (sltYear === "2019") {
             setJsonData(require("./data/2019.json"));
           } else if (sltYear === "2020") {
                    setJsonData(require("./data/2020.json"));
                  }

    // return setQuery({ goal: "", year: "" });
  }, [sltYear]);

  return (
    <div className="App">
      <div className="side">
        <div className="control">
          <Goal
            parentGoalCallback={val => {
              setQuery({ goal: val });
              setGoal(val);
            }}
          />
          <Year
            parentYearCallback={val => {
              setQuery({ year: val });
              setYear(val);
            }}
          />
        </div>
        <Chart data={jsonData} goal={sltGoal} />
      </div>
      <Map />
    </div>
  );
}

export default App;
