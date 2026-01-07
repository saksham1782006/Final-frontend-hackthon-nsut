import React, { useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import riskScoreData from "../data/riskscore.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const TopRiskWards = ({ limit = 10 }) => {
  const [mode, setMode] = useState("weekly"); 

  const today = "wednesday";

  const sortedWards = Object.entries(riskScoreData)
    .map(([ward, data]) => ({
      ward,
      score: mode === "weekly" ? data.weekly : data.daily[today],
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const labels = sortedWards.map((w) => w.ward);
  const values = sortedWards.map((w) => w.score);

  const data = {
    labels,
    datasets: [
      {
        label: mode === "weekly" ? "Weekly Risk Score" : "Daily Risk Score",
        data: values,
        borderRadius: 6,
        backgroundColor: "rgba(239, 68, 68, 0.7)",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` Risk Score: ${ctx.raw}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: mode === "weekly" ? 300 : 60,
        title: {
          display: true,
          text: "Risk Score",
        },
      },
      y: {
        ticks: { autoSkip: false },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 h-90">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">
          Top {limit} High-Risk Wards
        </h3>
        <button
          onClick={() =>
            setMode((prev) => (prev === "weekly" ? "daily" : "weekly"))
          }
          className="text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          {mode === "weekly" ? "View Daily" : "View Weekly"}
        </button>
      </div>

      <div className="h-70">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TopRiskWards;

