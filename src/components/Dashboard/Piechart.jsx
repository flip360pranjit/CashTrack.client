import React from "react";
import { mockPieData as data } from "../../data/pieChartMockdata";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import style from "./Piechart.module.scss";

function Piechart() {
  return (
    <div className={style.piechart}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Piechart;
