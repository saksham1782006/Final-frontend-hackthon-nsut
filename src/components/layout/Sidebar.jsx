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
    todayRainfalls.reduce((a, b) => a + b, 0) / todayRainfalls.length;

  return (
    <aside className="w-80 h-full bg-white border-r border-gray-200 flex flex-col overflow-hidden shadow-sm">
      
      {/* Top Section - Fixed */}
      <div className="px-5 py-5 flex-shrink-0">
        {/* Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Filters
            </h3>
            <input
              type="text"
              placeholder="Search ward..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mt-6 mb-3">
          <h3 className="text-sm font-bold text-gray-800">
            Wards
          </h3>
          <span className="text-xs font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-full capitalize shadow-sm">
            {todayKey}
          </span>
        </div>
      </div>

      {/* Scroll area - Flexible */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5">
        <ul className="space-y-2 pr-1">
          {filteredWards.map((ward) => (
            <li
              key={ward.ward_id}
              className="flex justify-between items-center rounded-lg px-4 py-3 text-sm bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200"
            >
              <span className="text-gray-800 font-medium">
                {ward.ward_name}
              </span>
              <span className="text-blue-600 font-semibold">
                {ward.daily_rainfall[todayKey]} mm
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary - Fixed at Bottom */}
      <div className="flex-shrink-0 border-t border-gray-200 px-5 py-5 bg-white">
        <h3 className="text-sm font-bold text-gray-800 mb-4">
          Today's Summary
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="text-gray-700 font-medium">🌧️ Max Rainfall</span>
            <span className="font-bold text-gray-900">{maxRainfall} mm</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="text-gray-700 font-medium">📊 Avg Rainfall</span>
            <span className="font-bold text-gray-900">
              {avgRainfall.toFixed(1)} mm
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;


