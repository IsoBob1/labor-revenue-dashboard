import React from 'react';
import Layout from '../components/Layout';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { time: '17:00', covers: 4, staff: 3 },
  { time: '17:15', covers: 4, staff: 3 },
  { time: '17:30', covers: 4, staff: 4 },
  { time: '17:45', covers: 6, staff: 4 },
  { time: '18:00', covers: 16, staff: 6 },
  { time: '18:15', covers: 16, staff: 6 },
  { time: '18:30', covers: 25, staff: 7 },
  { time: '18:45', covers: 25, staff: 7 },
  { time: '19:00', covers: 23, staff: 7 },
  { time: '19:15', covers: 29, staff: 7 },
  { time: '19:30', covers: 31, staff: 7 },
  { time: '19:45', covers: 25, staff: 7 },
  { time: '20:00', covers: 21, staff: 7 },
  { time: '20:15', covers: 21, staff: 7 },
  { time: '20:30', covers: 10, staff: 6 },
  { time: '20:45', covers: 10, staff: 5 },
  { time: '21:00', covers: 10, staff: 4 },
  { time: '21:15', covers: 2, staff: 2 },
  { time: '21:30', covers: 0, staff: 2 },
  { time: '21:45', covers: 0, staff: 2 },
  { time: '22:00', covers: 0, staff: 2 }
];

export default function Covers() {
  return (
    <Layout>
      <h1 style={{ marginBottom: '20px' }}>Frenchie - Covers vs Staff Analysis</h1>
      <h2 style={{ marginBottom: '20px', color: '#666' }}>Thursday, 24th October 2024</h2>
      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time" 
              interval={2}  // Show every third label to prevent crowding
            />
            <YAxis 
              yAxisId="left" 
              label={{ value: 'Covers in Venue', angle: -90, position: 'insideLeft' }}
              domain={[0, 35]}  // Slightly above max covers
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              label={{ value: 'Staff Count', angle: 90, position: 'insideRight' }}
              domain={[0, 10]}  // Slightly above max staff
            />
            <Tooltip />
            <Legend />
            <Bar 
              yAxisId="right"
              dataKey="staff" 
              name="Staff on Duty" 
              fill="#8884d8"
              opacity={0.8}
            >
              <LabelList dataKey="staff" position="inside" fill="white" />
            </Bar>
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="covers" 
              name="Covers in Venue" 
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 3 }}
            >
              <LabelList 
                dataKey="covers" 
                position="top" 
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
