import "./app.css";
import Goal from "./components/controls/goal";
import Year from "./components/controls/year";
import Chart from "./components/chart";
import Map from "./components/map";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedYear, setYear] = useState("");
  const [selectedGoal, setGoal] = useState("");
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    if (selectedYear === "2018") setJsonData(require("./data/2018.json"));
    else if (selectedYear === "2019") setJsonData(require("./data/2019.json"));
    else if (selectedYear === "2020") setJsonData(require("./data/2020.json"));
  }, [selectedYear]);

  return (
    <div className="App">
      <div className="side">
        <div className="control">
          <Goal parentGoalCallback={val => setGoal(val)} />
          <Year parentYearCallback={val => setYear(val)} />
        </div>
        <Chart data={jsonData} goal={selectedGoal} />
      </div>
      <Map />
    </div>
  );
}

export default App;
