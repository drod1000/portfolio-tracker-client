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
        <Pie data={data} dataKey="marketPrice" nameKey="stockSymbol" fill="#03a9f4" label/>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PortfolioPieChart;