import React from 'react';

const data = [
  { week: '22/9', barLabor: 1022, floorLabor: 3335, revenue: 21785 },
  { week: '29/9', barLabor: 709, floorLabor: 2606, revenue: 22390 },
  { week: '6/10', barLabor: 709, floorLabor: 2637, revenue: 21555 },
  { week: '13/10', barLabor: 1259, floorLabor: 3799, revenue: 26139 },
  { week: '20/10', barLabor: 1272, floorLabor: 2843, revenue: 24238 },
  { week: '27/10', barLabor: 1126, floorLabor: 2504, revenue: 19470 }
];

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
