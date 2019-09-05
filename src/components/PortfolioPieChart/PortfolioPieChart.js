import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

const generateData = (positions) => {
  const data = positions.map(p => {
    return {
      stockSymbol: p.StockSymbol,
      marketPrice: Math.floor(p.CurrentPrice * p.Quantity)
    }
  })

  return data;
}

const PortfolioPieChart = (props) => {
  const data = generateData(props.positions);

  return (
    <ResponsiveContainer width="100%" height={540}>
      <PieChart>
        <Pie
          data={data}
          dataKey="marketPrice"
          nameKey="stockSymbol"
          fill="#03a9f4"
          label={({cx,cy,midAngle,innerRadius,outerRadius,percent,index}) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {`${data[index].stockSymbol} (${(percent * 100).toFixed(2)}%)`}
              </text>
            )
          }}
        />
        <Tooltip
          formatter={(value) => {
            return (
              `$${value.toFixed(2)}`
            )
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PortfolioPieChart;