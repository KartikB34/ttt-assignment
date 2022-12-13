import React from 'react'
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

const Graph = (maps) => {
    
    console.log(maps.maps)

  return (
        <div style={{ textAlign: "center" }}>
      <div>
        <BarChart
            width={900}
            height={500}
            data={maps.maps}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            barSize={20}
            >
            <XAxis dataKey="x" scale="band" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="y" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  )
}

export default Graph
