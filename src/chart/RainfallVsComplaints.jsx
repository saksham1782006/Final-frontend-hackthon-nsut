import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import rainfallData from "../data/rainfall.json";
import complaintsData from "../data/complaints.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const RainfallVsComplaints = () => {
  const [selectedWard, setSelectedWard] = useState("Civil Lines");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const ward = rainfallData.wards.find(
    (w) => w.ward_name === selectedWard
  );

  const wardComplaints = complaintsData.wards.find(
    (c) => c.ward_id === ward?.ward_id
  );

  const dailyData = useMemo(() => {
    if (!ward || !wardComplaints) return null;

    return {
      labels: DAYS.map(
        (d) => d.charAt(0).toUpperCase() + d.slice(1)
      ),
      rainfall: DAYS.map(
        (d) => ward.daily_rainfall[d] ?? 0
      ),
      complaints: DAYS.map(
        (d) => wardComplaints.daily_complaints[d] ?? 0
      ),
    };
  }, [ward, wardComplaints]);

  const data = {
    labels: dailyData?.labels ?? [],
    datasets: [
      {
        label: "Daily Rainfall (mm)",
        data: dailyData?.rainfall ?? [],
        borderColor: "rgba(59, 130, 246, 0.9)",
        backgroundColor: "rgba(59, 130, 246, 0.9)",
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: "Daily Complaints",
        data: dailyData?.complaints ?? [],
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgb(239, 68, 68)",
        yAxisID: "y1",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Rainfall (mm)",
        },
      },
      y1: {
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Complaints",
        },
      },
    },
  };

  const filteredWards = rainfallData.wards.filter((w) =>
    w.ward_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow p-4 h-80">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">
          Rainfall vs Complaints (Daily)
        </h3>

        {/* Ward selector */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-full rounded-md px-3 py-1 text-sm text-left bg-gray-100 hover:bg-gray-200 transition pr-25"
          >
            {selectedWard}
          </button>

          {open && (
            <div className="absolute right-0 mt-1 w-44 bg-white border rounded-md shadow z-20">
              <input
                type="text"
                placeholder="Search ward..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-1 text-xs border-b outline-none"
              />

              <div className="max-h-40 overflow-y-auto">
                {filteredWards.map((w) => (
                  <div
                    key={w.ward_id}
                    onClick={() => {
                      setSelectedWard(w.ward_name);
                      setOpen(false);
                      setSearch("");
                    }}
                    className="px-2 py-1 text-xs hover:bg-gray-100 cursor-pointer"
                  >
                    {w.ward_name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default RainfallVsComplaints;






