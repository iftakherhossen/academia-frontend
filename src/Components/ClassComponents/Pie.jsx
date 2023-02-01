import React from "react";

const Circle = ({ color, percentage }) => {
     const r = 45;
     const circ = 2 * Math.PI * r;
     const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
     return (
          <circle
               r={r}
               cx={100}
               cy={100}
               fill="transparent"
               stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
               strokeWidth={"0.9rem"}
               strokeDasharray={circ}
               strokeDashoffset={percentage ? strokePct : 0}
          ></circle>
     );
};

const Text = ({ percentage }) => {
     return (
          <text
               x="50%"
               y="50%"
               dominantBaseline="central"
               textAnchor="middle"
               fontSize={"1.5em"}
               fontWeight={"500"}
          >
               {percentage.toFixed(0)}%
          </text>
     );
};

const Pie = ({ result }) => {
     return (
          <svg width={200} height={200}>
               <g transform={`rotate(-0 ${"100 100"})`}>
                    <Circle color="lightgrey" />
                    <Circle color="#1EB2A6" percentage={result} />
               </g>
               <Text percentage={result} />
          </svg>
     );
};

export default Pie;