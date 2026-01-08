import React, { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import rainfallData from "../data/rainfall.json";
import riskScoreData from "../data/riskscore.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

function RiskTrendChart() {
  const [selectedWard, setSelectedWard] = useState(
    rainfallData.wards?.[0]?.ward_name
  );
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredWards = useMemo(() => {
    return rainfallData.wards.filter((w) =>
      w.ward_name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const rainfallWard = rainfallData.wards.find(
    (w) => w.ward_name === selectedWard
  );
  if (!rainfallWard) return null;

  const riskWard = riskScoreData[selectedWard];
  if (!riskWard) return null;

  const days = Object.keys(rainfallWard.daily_rainfall);

  const labels = days.map(
    (d) => d.charAt(0).toUpperCase() + d.slice(1)
  );

  // 🌧️ Daily rainfall
  const rainfallValues = days.map(
    (d) => rainfallWard.daily_rainfall[d] ?? 0
  );

  // ⚠️ Daily risk (NEW – from updated JSON)
  const riskValues = days.map(
    (d) => riskWard.daily?.[d] ?? 0
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Rainfall (mm)",
        data: rainfallValues,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.1)",
        pointBackgroundColor: "#2563eb",
        pointRadius: 4,
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: "Daily Risk Score",
        data: riskValues,
        borderColor: "#dc2626",
        backgroundColor: "rgba(220,38,38,0.1)",
        pointBackgroundColor: "#dc2626",
        pointRadius: 3,
        borderWidth: 2,
        tension: 0.35,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 10,
          font: { size: 11 },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rainfall / Risk",
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 h-80 w-full">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-base font-bold text-gray-800">
            Risk Trend – {selectedWard}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Daily Rainfall vs Daily Risk Score
          </p>
        </div>

        {/* CUSTOM DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300 shadow-sm"
          >
            {selectedWard} ▼
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-20">
              <input
                type="text"
                placeholder="Search ward..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 text-sm border-b border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 rounded-t-lg"
              />

              <div className="max-h-48 overflow-y-auto">
                {filteredWards.map((ward) => (
                  <div
                    key={ward.ward_id}
                    onClick={() => {
                      setSelectedWard(ward.ward_name);
                      setOpen(false);
                      setSearch("");
                    }}
                    className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    {ward.ward_name}
                  </div>
                ))}

                {filteredWards.length === 0 && (
                  <div className="px-3 py-2 text-xs text-gray-500 text-center">
                    No wards found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CHART */}
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default RiskTrendChart;
