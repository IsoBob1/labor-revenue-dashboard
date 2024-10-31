import React from 'react';
import Layout from '../components/Layout';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { week: '22/9', barLabor: 1071, floorLabor: 3328, revenue: 32012 },
  { week: '29/9', barLabor: 999, floorLabor: 3631, revenue: 30744 },
  { week: '6/10', barLabor: 1151, floorLabor: 3846, revenue: 31633 },
  { week: '13/10', barLabor: 1139, floorLabor: 3754, revenue: 32778 },
  { week: '20/10', barLabor: 1238, floorLabor: 3628, revenue: 29339 },
  { week: '27/10', barLabor: 1088, floorLabor: 3802, revenue: 31269 }
];

export default function AlfiesRevenue() {
  const formatCurrency = (value) => `$${value.toLocaleString()}`;

  return (
    <Layout>
      <h1 style={{ marginBottom: '20px' }}>Alfies Revenue vs Labor</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis 
              domain={[0, 35000]}
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
