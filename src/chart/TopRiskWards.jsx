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
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 h-96">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-gray-800">
            Top {limit} High-Risk Wards
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {mode === "weekly" ? "Weekly" : "Daily"} risk assessment
          </p>
        </div>
        <button
          onClick={() =>
            setMode((prev) => (prev === "weekly" ? "daily" : "weekly"))
          }
          className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm"
        >
          {mode === "weekly" ? "View Daily" : "View Weekly"}
        </button>
      </div>

      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TopRiskWards;
