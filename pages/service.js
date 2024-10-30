import React from 'react';
import Layout from '../components/Layout';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { time: '14:00', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 }, // Nicola starts
  { time: '14:15', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '14:30', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '14:45', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '15:00', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '15:15', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '15:30', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '15:45', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '16:00', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 1 }, // Kieran starts
  { time: '16:15', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 1 },
  { time: '16:30', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 1 },
  { time: '16:45', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 1 },
  { time: '17:00', arriving: 4, inVenue: 4, floorStaff: 1, barStaff: 1 },
  { time: '17:15', arriving: 0, inVenue: 4, floorStaff: 1, barStaff: 1 },
  { time: '17:30', arriving: 0, inVenue: 4, floorStaff: 2, barStaff: 1 }, // Aurelie starts
  { time: '17:45', arriving: 2, inVenue: 6, floorStaff: 2, barStaff: 1 },
  { time: '18:00', arriving: 10, inVenue: 16, floorStaff: 3, barStaff: 1 }, // Will starts
  { time: '18:15', arriving: 0, inVenue: 16, floorStaff: 4, barStaff: 1 }, // Elias starts
  { time: '18:30', arriving: 9, inVenue: 25, floorStaff: 4, barStaff: 1 },
  { time: '18:45', arriving: 0, inVenue: 25, floorStaff: 4, barStaff: 1 },
  { time: '19:00', arriving: 2, inVenue: 23, floorStaff: 4, barStaff: 1 },
  { time: '19:15', arriving: 6, inVenue: 29, floorStaff: 4, barStaff: 1 },
  { time: '19:30', arriving: 2, inVenue: 31, floorStaff: 4, barStaff: 1 },
  { time: '19:45', arriving: 0, inVenue: 25, floorStaff: 4, barStaff: 1 },
  { time: '20:00', arriving: 0, inVenue: 21, floorStaff: 4, barStaff: 1 },
  { time: '20:15', arriving: 0, inVenue: 21, floorStaff: 4, barStaff: 1 },
  { time: '20:30', arriving: 0, inVenue: 10, floorStaff: 3, barStaff: 1 },
  { time: '20:45', arriving: 0, inVenue: 10, floorStaff: 3, barStaff: 1 },
  { time: '21:00', arriving: 0, inVenue: 10, floorStaff: 2, barStaff: 1 },
  { time: '21:15', arriving: 0, inVenue: 2, floorStaff: 1, barStaff: 1 },
  { time: '21:30', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 1 },
  { time: '21:45', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 },
  { time: '22:00', arriving: 0, inVenue: 0, floorStaff: 1, barStaff: 0 }
];

export default function ServiceAnalysis() {
  return (
    <Layout>
      <h1 style={{ marginBottom: '20px' }}>Frenchie - Thursday 24 October - Covers vs. Staff</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time" 
              interval={2}
            />
            <YAxis 
              yAxisId="left" 
              label={{ value: 'Covers', angle: -90, position: 'insideLeft' }}
              domain={[0, 35]}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              label={{ value: 'Staff Count', angle: 90, position: 'insideRight' }}
              domain={[0, 6]}
            />
            <Tooltip />
            <Legend />
            <Bar 
              yAxisId="right"
              dataKey="floorStaff" 
              name="Floor Staff" 
              fill="#82ca9d"
              stackId="staff"
            >
              <LabelList dataKey="floorStaff" position="inside" fill="white" />
            </Bar>
            <Bar 
              yAxisId="right"
              dataKey="barStaff" 
              name="Bar Staff" 
              fill="#8884d8"
              stackId="staff"
            >
              <LabelList dataKey="barStaff" position="inside" fill="white" />
            </Bar>
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="inVenue" 
              name="Covers in Venue" 
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 3 }}
            >
              <LabelList 
                dataKey="inVenue" 
                position="top"
                offset={10}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
}
