import React from 'react';
import Layout from '../components/Layout';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for October 24th
const oct24Data = [
  { time: '14:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '16:00', floorStaff: 1, barStaff: 1, covers: 0 },
  { time: '16:15', floorStaff: 1, barStaff: 1, covers: 0 },
  { time: '16:30', floorStaff: 1, barStaff: 1, covers: 0 },
  { time: '16:45', floorStaff: 1, barStaff: 1, covers: 0 },
  { time: '17:00', floorStaff: 1, barStaff: 1, covers: 4 },
  { time: '17:15', floorStaff: 1, barStaff: 1, covers: 4 },
  { time: '17:30', floorStaff: 2, barStaff: 1, covers: 4 },
  { time: '17:45', floorStaff: 2, barStaff: 1, covers: 6 },
  { time: '18:00', floorStaff: 3, barStaff: 1, covers: 16 },
  { time: '18:15', floorStaff: 4, barStaff: 1, covers: 16 },
  { time: '18:30', floorStaff: 4, barStaff: 1, covers: 25 },
  { time: '18:45', floorStaff: 4, barStaff: 1, covers: 25 },
  { time: '19:00', floorStaff: 4, barStaff: 1, covers: 23 },
  { time: '19:15', floorStaff: 4, barStaff: 1, covers: 29 },
  { time: '19:30', floorStaff: 4, barStaff: 1, covers: 31 },
  { time: '19:45', floorStaff: 4, barStaff: 1, covers: 25 },
  { time: '20:00', floorStaff: 4, barStaff: 1, covers: 21 },
  { time: '20:15', floorStaff: 4, barStaff: 1, covers: 21 },
  { time: '20:30', floorStaff: 3, barStaff: 1, covers: 10 },
  { time: '20:45', floorStaff: 3, barStaff: 1, covers: 10 },
  { time: '21:00', floorStaff: 2, barStaff: 1, covers: 10 },
  { time: '21:15', floorStaff: 1, barStaff: 1, covers: 2 },
  { time: '21:30', floorStaff: 1, barStaff: 1, covers: 0 },
  { time: '21:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '22:00', floorStaff: 1, barStaff: 0, covers: 0 }
];

// Data for October 31st
const oct31Data = [
  { time: '10:30', floorStaff: 1, barStaff: 0, covers: 0 }, // Nicola starts
  { time: '10:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '11:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '11:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '11:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '11:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '12:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '12:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '12:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '12:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '13:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '13:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '13:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '13:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '14:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '15:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '16:00', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '16:15', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '16:30', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '16:45', floorStaff: 1, barStaff: 0, covers: 0 },
  { time: '17:00', floorStaff: 1, barStaff: 1, covers: 0 }, // Kieran starts
  { time: '17:15', floorStaff: 1, barStaff: 1, covers: 0 },
  { time: '17:30', floorStaff: 2, barStaff: 1, covers: 0 }, // Aurelie starts
  { time: '17:45', floorStaff: 2, barStaff: 1, covers: 0 },
  { time: '18:00', floorStaff: 3, barStaff: 1, covers: 9 }, // Will starts
  { time: '18:15', floorStaff: 3, barStaff: 1, covers: 15 },
  { time: '18:30', floorStaff: 4, barStaff: 1, covers: 17 }, // Amelia starts
  { time: '18:45', floorStaff: 4, barStaff: 1, covers: 17 },
  { time: '19:00', floorStaff: 4, barStaff: 1, covers: 18 },
  { time: '19:15', floorStaff: 4, barStaff: 1, covers: 23 },
  { time: '19:30', floorStaff: 4, barStaff: 1, covers: 25 },
  { time: '19:45', floorStaff: 4, barStaff: 1, covers: 25 },
  { time: '20:00', floorStaff: 4, barStaff: 1, covers: 18 },
  { time: '20:15', floorStaff: 3, barStaff: 1, covers: 16 }, // Aurelie ends
  { time: '20:30', floorStaff: 2, barStaff: 1, covers: 10 }, // Amelia ends
  { time: '20:45', floorStaff: 2, barStaff: 1, covers: 10 },
  { time: '21:00', floorStaff: 2, barStaff: 1, covers: 9 },
  { time: '21:15', floorStaff: 2, barStaff: 0, covers: 4 }, // Kieran ends
  { time: '21:30', floorStaff: 2, barStaff: 0, covers: 0 },
  { time: '21:45', floorStaff: 2, barStaff: 0, covers: 0 },
  { time: '22:00', floorStaff: 1, barStaff: 0, covers: 0 } // Will ends, Nicola ends
];

export default function ThursdayComparison() {
  return (
    <Layout>
      <h1 style={{ marginBottom: '20px' }}>Frenchie - Thursday Service Comparison</h1>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* October 24th Chart */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>October 24th</h2>
          <div style={{ height: '500px' }}>
            <ResponsiveContainer>
              <ComposedChart data={oct24Data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  angle={-45} 
                  textAnchor="end"
                  height={60}
                  interval={2}
                />
                <YAxis 
                  yAxisId="left"
                  label={{ value: 'Covers', angle: -90, position: 'insideLeft' }}
                  domain={[0, 50]}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  label={{ value: 'Staff Count', angle: 90, position: 'insideRight' }}
                  domain={[0, 6]}
                />
                <Tooltip />
                <Legend />
                <Bar yAxisId="right" dataKey="floorStaff" stackId="staff" name="Floor Staff" fill="#82ca9d" />
                <Bar yAxisId="right" dataKey="barStaff" stackId="staff" name="Bar Staff" fill="#ffc658" />
                <Line 
                  yAxisId="left"
                  type="monotone"
                  dataKey="covers"
                  name="Covers in Venue" 
                  stroke="#8884d8"
                  strokeWidth={3}
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* October 31st Chart */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>October 31st</h2>
          <div style={{ height: '500px' }}>
            <ResponsiveContainer>
              <ComposedChart data={oct31Data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  angle={-45} 
                  textAnchor="end"
                  height={60}
                  interval={2}
                />
                <YAxis 
                  yAxisId="left"
                  label={{ value: 'Covers', angle: -90, position: 'insideLeft' }}
                  domain={[0, 50]}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  label={{ value: 'Staff Count', angle: 90, position: 'insideRight' }}
                  domain={[0, 6]}
                />
                <Tooltip />
                <Legend />
                <Bar yAxisId="right" dataKey="floorStaff" stackId="staff" name="Floor Staff" fill="#82ca9d" />
                <Bar yAxisId="right" dataKey="barStaff" stackId="staff" name="Bar Staff" fill="#ffc658" />
                <Line 
                  yAxisId="left"
                  type="monotone"
                  dataKey="covers"
                  name="Covers in Venue" 
                  stroke="#8884d8"
                  strokeWidth={3}
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
}
