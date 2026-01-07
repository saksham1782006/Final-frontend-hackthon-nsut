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
    <div className="bg-white rounded-xl p-4 h-80 w-full max-w-160 shadow-sm">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-sm font-semibold">
            Risk Trend – {selectedWard}
          </h2>
          <p className="text-xs text-gray-500">
            Daily Rainfall vs Daily Risk Score
          </p>
        </div>

        {/* CUSTOM DROPDOWN */}
        <div className="relative w-48">
          <button
            onClick={() => setOpen(!open)}
            className="w-full rounded-md px-3 py-1 text-sm text-left bg-gray-100 hover:bg-gray-200 transition"
          >
            {selectedWard}
          </button>

          {open && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow">
              <input
                type="text"
                placeholder="Search ward..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-1 text-sm border-b outline-none"
              />

              <div className="max-h-40 overflow-y-auto">
                {filteredWards.map((ward) => (
                  <div
                    key={ward.ward_id}
                    onClick={() => {
                      setSelectedWard(ward.ward_name);
                      setOpen(false);
                      setSearch("");
                    }}
                    className="px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {ward.ward_name}
                  </div>
                ))}

                {filteredWards.length === 0 && (
                  <div className="px-3 py-2 text-xs text-gray-500">
                    No wards found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CHART */}
      <div className="h-57.5">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default RiskTrendChart;


