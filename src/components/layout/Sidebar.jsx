import React from "react";
import rainfallData from "../../data/rainfall.json";

const DAY_KEYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function Sidebar() {
  const [search, setSearch] = React.useState("");

  // 🔥 Dynamic today key
  const todayKey = DAY_KEYS[new Date().getDay()];

  const wards = rainfallData?.wards || [];

  const filteredWards = wards.filter((ward) =>
    ward.ward_name.toLowerCase().includes(search.toLowerCase())
  );

  // ===== Summary =====
  const todayRainfalls =
    filteredWards.length > 0
      ? filteredWards.map((w) => w.daily_rainfall[todayKey] || 0)
      : [0];

  const maxRainfall = Math.max(...todayRainfalls);
  const avgRainfall =
    todayRainfalls.reduce((a, b) => a + b, 0) /
    todayRainfalls.length;

  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-100 px-4 py-5 flex flex-col overflow-hidden">
      {/* Filters */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Filters
          </h3>
          <input
            type="text"
            placeholder="Search ward..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mt-4 mb-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Wards
        </h3>
        <span className="text-xs font-medium bg-blue-600 text-white px-3 py-1 rounded-full capitalize">
          {todayKey}
        </span>
      </div>

      {/* Scroll area */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <ul className="space-y-1">
          {filteredWards.map((ward) => (
            <li
              key={ward.ward_id}
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm hover:bg-gray-50 transition"
            >
              <span className="text-gray-700">
                {ward.ward_name}
              </span>
              <span className="text-gray-500 font-medium">
                {ward.daily_rainfall[todayKey]} mm
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="border-t border-gray-200 pt-4 mt-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Today’s Summary
        </h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>🌧️ Max Rainfall</span>
            <span className="font-medium">{maxRainfall} mm</span>
          </div>
          <div className="flex justify-between">
            <span>📊 Avg Rainfall</span>
            <span className="font-medium">
              {avgRainfall.toFixed(1)} mm
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;










