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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 h-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-gray-800">
          Rainfall vs Complaints (Daily)
        </h3>

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
                {filteredWards.map((w) => (
                  <div
                    key={w.ward_id}
                    onClick={() => {
                      setSelectedWard(w.ward_name);
                      setOpen(false);
                      setSearch("");
                    }}
                    className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    {w.ward_name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RainfallVsComplaints;



