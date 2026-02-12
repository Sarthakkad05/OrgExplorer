/**
 * ------------------------------------------------------------
 * Test Chart Component
 * ------------------------------------------------------------
 * This component is used to display a test chart using the recharts library.
 * ------------------------------------------------------------
 */

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts"
  
  const data = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 30 },
    { month: "Mar", value: 25 },
    { month: "Apr", value: 40 },
    { month: "May", value: 35 },
  ]
  
  export default function TestChart() {
    return (
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2e8b57" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
  