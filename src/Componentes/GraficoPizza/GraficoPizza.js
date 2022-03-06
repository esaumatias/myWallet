import React, { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";
import AppContext from '../../Context/AppContext';

function GraficoPizza() {
  const {  
    sumAlimentacao,
    sumSaude,
    sumTransporte,
    sumLazer,
    sumTrabalho,} = useContext(AppContext);
  
  const data = [
    { name: "Alimentação", value: parseInt(sumAlimentacao) },
    { name: "Saude", value: parseInt(sumSaude) },
    { name: "Trabalho", value: parseInt(sumTrabalho) },
    { name: "Lazer", value: parseInt(sumLazer) },
    { name: "Transporte", value: parseInt(sumTransporte) },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FB6169"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: any) => {
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
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
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
