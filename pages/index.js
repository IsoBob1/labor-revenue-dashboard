import React from 'react';
import Layout from '../components/Layout';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { week: '22/9', barLabor: 1022, floorLabor: 3335, revenue: 21785 },
  { week: '29/9', barLabor: 709, floorLabor: 2606, revenue: 22390 },
  { week: '6/10', barLabor: 709, floorLabor: 2637, revenue: 21555 },
  { week: '13/10', barLabor: 1259, floorLabor: 3799, revenue: 26139 },
  { week: '20/10', barLabor: 1272, floorLabor: 2843, revenue: 24238 },
  { week: '27/10', barLabor: 1126, floorLabor: 2504, revenue: 19470 },
  { week: '3/11', barLabor: 909, floorLabor: 3010, revenue: 22779 }
];

export default function Home() {
  const formatCurrency = (value) => `$${value.toLocaleString()}`;

  return (
    <Layout>
      <h1 style={{ marginBottom: '20px' }}>Frenchie Revenue vs Labor</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis 
              domain={[0, 30000]}
              tickFormatter={value => `$${value/1000}k`}
            />
            <Tooltip formatter={formatCurrency} />
            <Legend />
            <Bar dataKey="floorLabor" name="Floor Labor" stackId="labor" fill="#82ca9d">
              <LabelList dataKey="floorLabor" position="inside" formatter={formatCurrency} fill="white" />
            </Bar>
            <Bar dataKey="barLabor" name="Bar Labor" stackId="labor" fill="#8884d8">
              <LabelList dataKey="barLabor" position="inside" formatter={formatCurrency} fill="white" />
            </Bar>
            <Line 
              type="monotone" 
              dataKey="revenue" 
              name="Revenue" 
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 4, fill: "#ff7300", stroke: "#ff7300" }}
            >
              <LabelList 
                dataKey="revenue" 
                position="top" 
                formatter={formatCurrency}
                fill="#ff7300"
                offset={10}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
}
