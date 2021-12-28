import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const Chart = () => {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      "Active User": 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      "Active User": 2000,
    },
    {
      name: "Apr",
      "Active User": 2780,
    },
    {
      name: "May",
      "Active User": 1890,
    },
    {
      name: "Jun",
      "Active User": 2390,
    },
    {
      name: "Jul",
      "Active User": 3490,
    },
    {
      name: "Aug",
      "Active User": 1490,
    },
    {
      name: "Sep",
      "Active User": 2490,
    },
    {
      name: "Oct",
      "Active User": 3090,
    },
    {
      name: "Nov",
      "Active User": 5490,
    },
    {
      name: "Dec",
      "Active User": 4490,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
