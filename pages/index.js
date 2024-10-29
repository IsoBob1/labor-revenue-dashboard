import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: '22/9', barLabor: 1022, floorLabor: 3335, revenue: 21785 },
  { week: '29/9', barLabor: 709, floorLabor: 2606, revenue: 22390 },
  { week: '6/10', barLabor: 709, floorLabor: 2637, revenue: 21555 },
  { week: '13/10', barLabor: 1259, floorLabor: 3799, revenue: 26139 },
  { week: '20/10', barLabor: 1272, floorLabor: 2843, revenue: 24238 },
  { week: '27/10', barLabor: 1126, floorLabor: 2504, revenue: 19470 }
];

export default function Home() {
  const formatCurrency = (value) => `$${value.toLocaleString()}`;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Revenue vs Labor Dashboard</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis tickFormatter={value => `$${value/1000}k`} />
            <Tooltip formatter={formatCurrency} />
            <Legend />
            <Bar dataKey="barLabor" name="Bar Labor" stackId="labor" fill="#8884d8" />
            <Bar dataKey="floorLabor" name="Floor Labor" stackId="labor" fill="#82ca9d" />
            <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
