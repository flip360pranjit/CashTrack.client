import React from "react";
import style from "../Dashboard.module.scss";
import Piechart from "../Piechart";
import Recent from "../Recent";

function Overview() {
  return (
    <div className={style.dashboardContent}>
      <Piechart />
      <Recent />
    </div>
  );
}

export default Overview;
