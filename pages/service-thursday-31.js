import React from 'react';
import Layout from '../components/Layout';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '10:30', floorStaff: 0, barStaff: 0, covers: 0 },
  { time: '10:45', floorStaff: 1, barStaff: 0, covers: 0 }, // Nicola starts
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
  { time: '22:00', floorStaff: 1, barStaff: 0, covers: 0 }, // Will ends, Nicola ends
  { time: '22:15', floorStaff: 0, barStaff: 0, covers: 0 }
];

export default function ServiceAnalysis() {
  return (
    <Layout>
      <h1 style={{ marginBottom: '20px' }}>Frenchie - Thursday 31 October - FOH Staffing Analysis</h1>
      
      <div style={{ width: '1000px', margin: '0 auto', marginBottom: '40px' }}>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
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
              domain={[0, 30]}
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

      <div style={{ width: '1000px', margin: '0 auto', overflowX: 'auto' }}>
        <h2 style={{ marginBottom: '20px' }}>Service Capacity Analysis</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f4f4f4' }}>Time</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f4f4f4' }}>Total FOH Staff</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f4f4f4' }}>Covers in Venue</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f4f4f4' }}>Covers per Staff</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const totalStaff = row.floorStaff + row.barStaff;
              const coversPerStaff = totalStaff ? (row.covers / totalStaff).toFixed(1) : 0;
              let backgroundColor = 'white';
              
              if (totalStaff && row.covers === 0) {
                backgroundColor = '#fff3e0'; // Orange for staff but no covers
              } else if (coversPerStaff > 20) {
                backgroundColor = '#ffebee'; // Red for high covers per staff
              }

              return (
                <tr key={row.time} style={{ backgroundColor }}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.time}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{totalStaff}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.covers}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{coversPerStaff}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
