import React, { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";
import AppContext from '../../Context/AppContext';

function GraficoPizza() {
  const {sumTags} = useContext(AppContext);
  
  const data = [
    { name: "Alimentação", value: sumTags["Alimentação"] },
    { name: "Saúde", value: sumTags["Saúde"] },
    { name: "Trabalho", value: sumTags["Trabalho"] },
    { name: "Lazer", value: sumTags["Lazer"] },
    { name: "Transporte", value: sumTags["Transporte"] },
  ];
  
  const COLORS = ["#0d6efd", "#0bcaf1", "#188754", "#6c757d", "#ffc108"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChart width={200} height={200} style={{margin: "auto"}}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}


export default GraficoPizza; 
