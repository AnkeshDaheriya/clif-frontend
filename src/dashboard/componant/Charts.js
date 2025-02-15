import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Technology", Goals: 80, Actuals: 50 },
  { category: "Communication", Goals: 90, Actuals: 70 },
  { category: "Presentation", Goals: 85, Actuals: 60 },
  { category: "Business and", Goals: 75, Actuals: 50 },
  { category: "People", Goals: 80, Actuals: 55 },
  { category: "Other Skill", Goals: 90, Actuals: 65 },
];

const Charts = () => {
  const [hiddenBars, setHiddenBars] = useState({
    Goals: false,
    Actuals: false,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLegendClick = (dataKey) => {
    setHiddenBars((prev) => ({
      ...prev,
      [dataKey]: !prev[dataKey],
    }));
  };

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <ResponsiveContainer width="100%" height={isMobile ? 320 : 400}>
        <BarChart data={data} barGap={10} barCategoryGap="25%">
          <XAxis dataKey="category" angle={-30} textAnchor="end" interval={0} />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <Tooltip />
          <Legend
            onClick={(e) => handleLegendClick(e.dataKey)}
            wrapperStyle={{ cursor: "pointer" }}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
          <Bar
            dataKey="Goals"
            fill="#FFA500"
            barSize={isMobile ? 12 : 20}
            style={{ display: hiddenBars.Goals ? "none" : "block" }}
          />
          <Bar
            dataKey="Actuals"
            fill="#FFDDC1"
            barSize={isMobile ? 12 : 20}
            style={{ display: hiddenBars.Actuals ? "none" : "block" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
